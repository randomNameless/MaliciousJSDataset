(async () => {
  let code = getAgentCodeFmUrl()
  if (code) {
    // console.log('agent code from URL:', code)
    saveAgentCodeCookie(code)
  }
  else {
    code = getAgentCodeFmCookie()
  }
  // console.log('code:', code);
  if (! code)
    return
  const success = await setAgent(code)
  // console.log('Agent set:', success);
  if (! success) {
    alert(`"${code}" is not a valid or current agent code.`)
  }
})();

const expandAllBtn = document.getElementById('expand-all-sections')

addListeners()

handleTAgentLogin()

setupLightbox()

setupTAgentDialog()

buildSendLink()

function addListeners() {
  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", expandAllSetions, false)
  }
}

function expandAllSetions() {
  const detailsElements = document.getElementsByTagName('details')
  // const detailsElements = document.body.querySelectorAll('details')
  for (const element of detailsElements) {
    const isOpen = element.hasAttribute('open')
    if (isOpen) element.removeAttribute('open')
    else element.setAttribute('open', true)
  }
}

async function handleTAgentLogin() {
  const form = document.getElementById('t-agent-dialog-login')
  // console.log('form:', form)
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const field = form.querySelector('input[name="agent-code"]')
    if (! field) return
    const code = field.value
    if (! code) {
      throw "No code provided";
    }
    saveAgentCodeCookie(code)
    const success = await setAgent(code)
    console.info('setAgent success:', success);
    if (success) {
      closeTAgentDialog(true)
    }
    else {
      alert(`"${code}" is not a valid or current agent code.`)
    }
  })
}

/**
 * [setAgent description]
 * 
 * @return boolean
 *   True if successful, false otherwise
 */
async function setAgent(code) {
  if (! code)
    return false

  const agentInfo = await getAgent(code)
  // console.log('agentInfo:', agentInfo);

  // If the agent isn't in the system (checking by code)
  if (! agentInfo)
    return false

  // If the agent's contract has expired
  const currentDateTime = (new Date()).getTime()
  const endDateTime = Date.parse(agentInfo.end_date);
  const startDateTime = Date.parse(agentInfo.start_date);
  const isDateValid = startDateTime < currentDateTime && currentDateTime < endDateTime;
  if (! isDateValid) {
    return false
  }

  const infoDisplay = document.getElementById('agent-info-display')
  infoDisplay.classList.remove('hidden')
  // infoDisplay.querySelector('.code span').innerHTML = code
  infoDisplay.querySelector('.name span').innerHTML = agentInfo.name
  if (agentInfo.name) {
    infoDisplay.querySelector('.name').classList.remove('hidden');
  }
  infoDisplay.querySelector('.phone span').innerHTML = agentInfo.tel
  if (agentInfo.tel) {
    infoDisplay.querySelector('.phone').classList.remove('hidden');
  }
  infoDisplay.querySelector('.email span').innerHTML = agentInfo.email
  if (agentInfo.email) {
    infoDisplay.querySelector('.email').classList.remove('hidden');
  }

  // Change style to use agent's branding
  document.getElementsByTagName('body')[0].classList.add(`agent-${code}`)

  const logoImg = document.getElementById('site-logo').querySelector('img')
  const newSrc = `http://www.wordtravels.com/images/travelagents/${agentInfo.image}`
  // logoImg.setAttribute('data-src', logoImg.src);
  logoImg.src = newSrc
  return true
}

async function unsetAgent(code) {
  code = getAgentCode()
  document.getElementsByTagName('body')[0].classList.remove(`agent-${code}`)

  // console.log('unsetAgent()');
  removeAgentCookie(code);
  const infoDisplay = document.getElementById('agent-info-display')
  infoDisplay.classList.add('hidden');

  const logoImg = document.getElementById('site-logo').querySelector('img')
  // console.log('logoImg:', logoImg)
  logoImg.src = logoImg.getAttribute('data-src');

  // if (typeof URLSearchParams !== 'undefined') {
  //   const params = new URLSearchParams('')
  //   params.delete('param2')
  // }
}

function getAgentCode() {
  // console.log('getAgentCode()');
  let code = getAgentCodeFmUrl()
  // console.log('code from url:', code)
  
  if (! code) {
    code = getAgentCodeFmCookie();
  }
  // console.log('code found:', code)
  return code
}

function saveAgentCodeCookie(code) {
  // Set cookie to remember this agent
  document.cookie = `agent=${code}; SameSite=None; Secure; path=/`
  // console.log('cookie set');
}

function getAgentCodeFmUrl() {
  // console.log('getAgentCodeFmUrl()')
  // Get agent from URL parameter
  const urlParams = new URLSearchParams(window.location.search)
  // console.log('urlParams:', urlParams)
  return urlParams.get('agent')
}

function getAgentCodeFmCookie() {
  let code;
  // Fetch agent from cookie
  if (document.cookie) {
    agentCookie = getAgentCookie();
    if (agentCookie) {
      code = agentCookie.split('=')[1]
    }
    // console.log('code from cookie:', code)
  }
  return code;
}

function getAgentCookie() {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith('agent='));
}

function removeAgentCookie(code) {
  document.cookie = `agent=${code}; Max-Age=-99999999; path=/`;
  // console.log('cookie removed');
}

async function getAgent(agentCode) {
  // const agents = {
  //   'a': {'logo': 'abctravel.jpg'}
  // }
  // return agentCode in agents ? agents[agentCode] : null
  
  const response = await fetch(`https://data.wordtravels.com/travel-agents/${agentCode}`)
  return response.json();
   // .then(response => response.json())
   // .then(data => console.log(data))
  
  // return null
}

function setupLightbox() {
  const tobii = new Tobii({
    swipeClose: false,
    draggable: false,
    counter: false,
  })
}

function setupTAgentDialog() {
  const dialog = document.getElementById('tagent-dialog')
  // console.log('dialog:', dialog)
  const wasDialogClosed = getCookie('dialog-tagent-dialog-closed')
  const agentCode = getAgentCode()
  
  // If there's no agent code and the dialog hasn't yet been shown and closed,
  // then show the dialog
  if (! agentCode && ! wasDialogClosed) {
    setTimeout(() => {
      dialog.classList.remove('hidden')
    }, 1*1000)
  }

  // Close buttons
  document.querySelectorAll('.close').forEach((button) => {
    button.addEventListener('click', () => {
      const parent = button.parentNode
      // console.log('parent:', parent)
      if (parent.matches('[role="dialog"]')) {
        closeTAgentDialog(true)
      }
    })
  })
}

function closeTAgentDialog(rememberClose = false) {
  const dialog = document.getElementById('tagent-dialog')
  dialog.classList.add('hidden')

  if (rememberClose) {
    // Remember this via a cookie
    document.cookie = `dialog-${dialog.id}-closed="true"`
  }
}

/**
 * Get a browser cookie by name.
 *
 * @return string|undefined
 *   A string of the cookie's value if found, otherwise undefined.
 */
function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

function copyPageUrl() {
  const url = getPageUrl();
  window.prompt("Copy to clipboard: Ctrl+C or Cmd+C, then Enter", url);
}

function getPageUrl() {
  let url = window.location.href;
  // console.log('url:', url);
  const agentCode = getAgentCode();
  if (agentCode && !(url.includes('agent'))) {
    // console.log('add to url');
    url = url + `?agent=${agentCode}`;
    // console.log('url:', url);
  }
  return url;
}

function buildSendLink() {
  const link = document.getElementById('send-link');
  if (! link)
    return;

  link.attributes.href.value = link.attributes.href.value + getPageUrl();
}

function initMap() {
  document.querySelectorAll('.google-js-map').forEach((container) => {
    const lat = container.getAttribute('data-latitude');
    // console.log('lat:', lat);
    const lon = container.getAttribute('data-longitude');
    // console.log('lon:', lon);
    const zoom = container.getAttribute('data-zoom');
    // console.log('zoom:', zoom);

    if (! (lat && lon && zoom))
      return;

    let latlng = {
      lat: parseFloat(lat),
      lng: parseFloat(lon),
    };
    let map = new google.maps.Map(container, {
      zoom: parseInt(zoom),
      center: latlng,
    });
    let marker = new google.maps.Marker({
      position: latlng,
      map: map,
    });
  });
}