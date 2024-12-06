window.WM = window.WM || {};

//Get root domain of current website 
const domain = window.location.hostname

let rootdomain 

if (domain === 'localhost') {
    rootdomain = domain
} else {
    const arr = domain.split('.')
    const len = arr.length
    rootdomain = '.' + arr[len - 2] + '.' + arr[len - 1] //eg for web.dev.api.discomax.com the root domain is .discomax.com
}

WM.ConsentSiteConfig = {
    cookiedomain: rootdomain,
    domId: "418572d5-a922-4b12-af3b-ffc91a77d0e2", // This is a fallback, the main one is set in the pages
    src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
    vendor: {
        ga: {
            src: '',
            ucStates: ["required"]
        },
        gtm: {
            src: '',
            ucStates: ["required"]
        },
        labsSDK: {
            src: '',
            ucStates: ["required", "1p-targeting"]
        },

    }
}