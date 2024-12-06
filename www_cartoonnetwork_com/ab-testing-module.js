
async function getBandFromDOM (bandID, pageID, treatmentLabel) {
  const CHECK_INTERVAL = 50
  const CHECK_TIMEOUT = 10*1000

  const getBandSync = () => {
    const treatmentBand = document.getElementById(`page${pageID}-band${bandID}`)
    treatmentBand.treatmentLabel = treatmentLabel

    return treatmentBand
  }

  return new Promise((resolve, reject) => {
    const band = getBandSync()

    if (band) {
      resolve(band)
    } else {
      const checker = setInterval(() => {
        const band = getBandSync()
        
        if (band) {
          clearInterval(checker)
          resolve(band)
        }
      }, CHECK_INTERVAL)

      setTimeout(() => {
        clearInterval(checker)
        reject(`Waited for ${CHECK_TIMEOUT / 1000} seconds but bands we're not ready in the DOM. Will not render treatment`)
      }, CHECK_TIMEOUT)
    }
  })
}

function getDecisionsFromUser(label, experimentId, experimentArgs) {
  const experimentConfig = experimentArgs.configs.find(config => config.experiment_id === experimentId)
  if (!experimentConfig) {
    throw `The provided experiment ID (${experimentId}) does not match any experiment configs`
  }

  const isLabelValid = experimentConfig.treatments.some(treatment => treatment.title === label)
  if (!isLabelValid) {
    throw `The provided label (${label}) does not match any treatments for experiment ID ${experimentId}`
  }

  return {
    decisions: [{
      active: false,
      showTreatment: label !== 'C',
      label,
      status: 'success',
      treatmentId: undefined,
      experimentId
    }],
    trackDecision: () => {}
  };
}

function getDecisionsFromSDK ({
  configs,
  experimentIds,
  seedId,
  trackUrl,
  sessionId,
  LabsSDK,
  userCountry,
  webVersion,
  labsSDKVersion
}) {
  const sdkConfig = {
    trackUrl,
    experimentIds
  }
  const sdk = LabsSDK(sdkConfig, configs)

  const getDecisionsArguments = {
    seedId,
    experimentIds,
    context: {
      sessionId,
      userAgent: window.navigator.userAgent,
      webVersion,
      labsSDKVersion
    }
  }

  const { decisions, track } = userCountry === 'US' ?
    sdk.getDecisions(getDecisionsArguments) :
    sdk.getDeferredDecisions(getDecisionsArguments)

  const validatedDecisions = decisions.map(decision => {
      if (decision.status !== 'success' || decision.message) {
        console.warn(`Error from SDK. Message: ${decision.message}. Return object: ${JSON.stringify(decision)}`)
        Sentry.captureException(new Error(`Error from SDK. Message: ${decision.message}`))
      }
  
      return {
        ...decision,
        ...{
          showTreatment: !decision.control,
        }
      }
    })

  return {
    decisions: validatedDecisions,
    trackDecision: track
  }
}

function getDecisions (experimentArgs) {
  try {
    const params = new URLSearchParams(window.location.search);
    const labelFromUser = params.get('treatmentLabel');
    const experimentFromUser = params.get('experimentID');

    if (labelFromUser && experimentFromUser) {
      try {
        return getDecisionsFromUser(labelFromUser, experimentFromUser, experimentArgs)
      } catch (e) {
        console.warn(`Got invalid query param from user:`, e)
      }
    }

    return getDecisionsFromSDK(experimentArgs)
  } catch (e) {
    console.error('Error getting experiment decisions', e)
    Sentry.captureException(e)
    return []
  }
}

function validateExperimentConfigs ({ configs }) {
  return configs.filter(config => {
    if (config.error) {
      console.error('Filtering out config with error:', config.error)
      Sentry.captureException(new Error(config.error))
      return false
    }

    return true
  })
}

async function runExperiment ({ experimentArgs, pageData }) {
  try {
    /*
    These breadcrumbs will be added to any Sentry exception caught inside runExperiment.

    We're adding these objecst as separate breadcrumbs because there is a limit to the depth
    that Sentry will display in these objects. If we passed in experimentArgs and pageData
    in one object, we would loose one level of depth in these objects when viewing in Sentry.
    */
    Sentry.addBreadcrumb({
      message: "Running AB experiment with experiment args:",
      data: { experimentArgs }
    })
    Sentry.addBreadcrumb({
      message: "Running AB experiment with pageData:",
      data: { pageData }
    })

    experimentArgs.configs = validateExperimentConfigs(experimentArgs)
    const {decisions, trackDecision} = getDecisions(experimentArgs)
    let experimentsResults = []
    const { bandsByExperimentID, pageID } = pageData

    for (const decision of decisions) {
      const {
        label,
        status,
        active,
        showTreatment,
        treatmentId,
        experimentId
      } = decision

      if (showTreatment) {
        const experimentBands = bandsByExperimentID[experimentId]
        for (const { bandID, treatmentLabel } of experimentBands) {
          const band = await getBandFromDOM(bandID, pageID, treatmentLabel)

          if (band.treatmentLabel === label) {
            band.classList.remove('hide')
          } else {
            band.classList.add('hide')
          }
        }
      }

      if (active && status === "success") {
        experimentsResults.push({
          experimentId,
          treatmentId,
          label
        })
      }
    }

    window.AB_EXPERIMENTS = window.AB_EXPERIMENTS ? window.AB_EXPERIMENTS : {}
    window.AB_EXPERIMENTS.results = experimentsResults

    if (!trackDecision) {
      return null
    }

    const trackDecisionsCalled = decisions.reduce((experimentDict, decision) => {
      experimentDict[decision.experimentId] = false
      return experimentDict
    }, {})
    
    const attemptToTrackAllDecisions = () => {
      /* general conditions to track decision */
      if (
        userConsentIsReady() && 
        userGivesConsent()
      ) {
        for (const { experimentId } of decisions) {
          /* experiment-specific conditions to track decision */
          if (
            !trackDecisionsCalled[experimentId]
          ) {
            trackDecisionsCalled[experimentId] = true
            trackDecision(experimentId)
          }
        }
      }
    }

    const userGivesConsent = () => (
      window.WM?.UserConsent?.inUserConsentState(window.WM?.ConsentSiteConfig?.vendor.labsSDK.ucStates)
    )

    const userConsentIsReady = () => (
      window.WM?.UserConsent?.isReady()
    )

    document.addEventListener("userConsentChanged", attemptToTrackAllDecisions)
    document.addEventListener("userConsentReady", attemptToTrackAllDecisions)
    attemptToTrackAllDecisions()

  } catch (e) {
    console.error(`Error attempting to run experiment.`, e)
    Sentry.captureException(e)
  }
}

function getCookie (key) {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${key}=`))
    ?.split('=')[1];
}

function createCookie ({ key, value, expires }) {
  const domainWithNoSubDomains = window.location.hostname
    .split('.')
    .slice(-2)
    .join('.')

  document.cookie = `${key}=${value}`.concat(
    `; domain=${domainWithNoSubDomains}`,
    `; path=/`,
    `; max-age=${expires}`
  )

  return value
}

function getOrCreateTransientId () {
  const tenYearsInSeconds = 60*60*24*365*10

  return getCookie('transientID') || createCookie({
    key: 'transientID',
    value: crypto.randomUUID(),
    expires: tenYearsInSeconds
  })
}

function getOrCreateSessionId () {
  const oneYearInSeconds = 60*60*24*365
  const thirtyMinutes = 60*30*1000
  const currentTime = Date.now()
  
  let session = {
    uuid: crypto.randomUUID(),
    created: currentTime,
    expires: currentTime + thirtyMinutes
  }

  const sessionCookie = getCookie('session')
  const existingSession = sessionCookie ? JSON.parse(sessionCookie) : null
  const existingSessionHasNotExpired = existingSession?.expires > currentTime

  if (existingSessionHasNotExpired) {
    existingSession.expires = currentTime + thirtyMinutes
    session = existingSession
  }

  createCookie({
    key: 'session',
    value: JSON.stringify(session),
    expires: oneYearInSeconds
  })

  return session.uuid
}

export default {
  getOrCreateTransientId,
  getOrCreateSessionId,
  runExperiment
}
