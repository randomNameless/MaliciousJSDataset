var gtmAS  = gtmAS || (function(){
	let dataLayer = window.dataLayer = window.dataLayer||[],
	initialized = false

	function _getBasRetailEvent(eventType){
		switch(eventType){
			case 'formSubmission':
				return 'Form Submission'
				break
			case 'newletterSubmission':
				return 'Newsletter'
				break
			case 'referafriendSubmission':
				return 'Refer a Friend Submission'
				break
			case 'appointmentSubmission':
				return 'Schedule an Appointment'
				break
			case 'contactMeClick':
				return 'Off Domain Contact Form'
				break
			case 'phoneClick':
				return 'Phone Number Click'
				break
			case 'emailClick':
				return 'Email Click'
				break
			case 'pdfDownload':
				return 'PDF Downloads'
				break
			case 'stockMarkedChart':
				return 'Stock Market Charts'
				break
			case 'calculator':
				return 'Calculators'
				break
			case 'getQuote':
				return 'Get Quote'
				break
			case 'loginButton':
				return 'Log In (client)'
				break
			default:
				return 'Custom Form'
		}
	}

	function _setListeners(AdvisorSiteName){
		const siteName = AdvisorSiteName

		const forms = document.querySelectorAll('form[method="POST"]')
		if(forms.length > 0){
			for(let i = 0;forms.length>i;i++){
				forms[i].addEventListener('submit',function(event){
					const elData = this.dataset.event,
					eventType = elData?String(elData):'customForm',
					BASRetaileventType = elData?_getBasRetailEvent(String(elData)):'Custom Form'

					_updateDataLayer(eventType,BASRetaileventType,siteName)
				})
			}
		}

		const cfb = document.querySelectorAll('.contact-form-button')
		if(cfb.length > 0){
			for (let i = 0;cfb.length>i;i++){
				cfb[i].addEventListener('click',function(event){
					_updateDataLayer('contactMeClick','Contact Us Form Submit',siteName)
				})
			}
		}

		const linkEvent = document.querySelectorAll('a[data-event]')
		if(linkEvent.length > 0){
			for (let i = 0;linkEvent.length>i;i++){
				linkEvent[i].addEventListener('click',function(){
					const elData = this.dataset.event
					_updateDataLayer(String(elData),_getBasRetailEvent(elData),siteName)
				})
			}
		}
	}

	function _updateDataLayer(eventType,BASRetaileventType,BASRetailAdvisorSiteName){
		const submitEvent = {'event':eventType,'BASRetaileventType':BASRetaileventType,'BASRetailAdvisorSiteName':BASRetailAdvisorSiteName}
		dataLayer.push(submitEvent)
	}

	function init(obj,AdvisorSiteName){
		if (initialized)
			return false
		
		initialized = true

		dataLayer.push(obj)

		document.addEventListener('DOMContentLoaded',function(){
			_setListeners(String(AdvisorSiteName))
		})
	}

	return {
		init:init
	}
})()