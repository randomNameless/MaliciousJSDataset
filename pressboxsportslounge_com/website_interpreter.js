// Website Interpreter START
document.addEventListener('DOMContentLoaded', function() {
    /////// 
    // Website Changes Log Interpreter START
    function runChangesLogInterpreter() {
        
        // Console log will be visible if string "?interpreter=on" is added in the URL
        const interpreterOn = window.location.href.toLowerCase().includes('?interpreter=on');

        // Get Changes Log array (changes_log_array var from WCache)
        if (typeof changes_log_array === 'undefined' || !changes_log_array || changes_log_array === null || changes_log_array.length === 0) {
            changes_log_array = [];
        }
        var changesLogSavedArray = changes_log_array || [];

        // Create custom event which will Edit mode listen to
        const eventEditor = new CustomEvent("PostInterpreter");

        if (!changesLogSavedArray || changesLogSavedArray.length === 0) {
            // Dispatch/Trigger/Fire the event
            document.dispatchEvent(eventEditor);
            if (interpreterOn) {
                console.log("<-------- Changes Log interpreter Done -------->");
                console.log("Changes Log array is empty");
            }
            return;
        }
        
        let log = {
            style: 'color: #000; font-size: 12px; padding: 3px 10px 3px 5px; border-radius: 10px;',
            info: (msg) => {
                console.log(`%c✅ ${msg}`, `background: #dff7e9; ${log.style}`);
            },
            warn: (msg) => {
                console.log(`%c⚠️ ${msg}`, `background: #ffd092; ${log.style}`);
            },
            success: (msg) => {
                console.log(`%cℹ️ ${msg}`, `background: #fcf4d2; ${log.style}`);
            },
            error: (msg) => {
                console.log(`%c❌ ${msg}`, `background: #fecace; ${log.style}`);
            }
        };

        const elementChangeResolver = {
            'text' : {
                'link_change': function(element, elementData) {
                    let initialData = element.getAttribute('href');
                    if (initialData !== elementData) {
                        if (elementData.startsWith('/')) {
                            elementData = appendDomainParamIfNeeded(elementData);
                        }
                        element.setAttribute('href', elementData);
                        return ['success', 'link changed'];
                    }
                    return ['no_action', 'link change'];
                },
                'content_change': function(element, elementData) {
                    let initialData = element.textContent.replace(/\s*(\r?\n|\r)\s*/g, '').replace(/\s{2,}/g, ' ').trim();
                    let elementDataHelper = extractTextContentFromHTML(elementData);
                    if (initialData !== elementDataHelper) {
                        element.innerHTML = elementData;
                        if (!elementData) {
                            element.classList.add('editor-empty-element');
                        } else {
                            element.classList.remove('editor-empty-element');
                        }
                        return ['success', 'text changed'];
                    }
                    return ['no_action', 'text change'];
                }
            },
            'background_image': {
                'content_change': function(element, elementData) {
                    let initialData = element.style.backgroundImage;
                    let initialDataHelper = extractUrlFromString(initialData);
                    if (initialDataHelper !== elementData) {
                        element.style.backgroundImage = `url('${elementData}')`;
                        return ['success', 'image changed (CSS background-image)'];
                    }
                    return ['no_action', 'image changed (CSS background-image)'];
                }
            },
            'image': {
                'content_change': function(element, elementData) {
                    let initialData = element.getAttribute('src');
                    if (initialData !== elementData) {
                        element.setAttribute('src', elementData);
                        return ['success', 'image changed (HTML img tag)'];
                    }
                    return ['no_action', 'image change (HTML img tag)'];
                }
            },
            'section': {
                'section_hide': function(element, elementData) {
                    let initialData = element.getAttribute('data-hidden');
                    if (initialData !== elementData) {
                        element.classList.add('hide-show-section');
                        element.setAttribute('data-hidden', elementData);
                        const isHidden = elementData === 'yes';
                        return ['success', `section changed: ${isHidden ? 'hidden' : 'shown'}`];
                    }
                    return ['no_action', 'section change'];
                }
            }
        }

        // Helper function to modify internal links as WCache does
        function appendDomainParamIfNeeded(str) {
            const origin = window.location.origin;
        
            // Check if the origin contains "website-editor" or "wcache"
            if (origin.includes("website-editor") || origin.includes("wcache")) {
                const urlParams = new URLSearchParams(window.location.search);
                const domainParam = urlParams.get('domain');
        
                // If the domain parameter exists, append it to the string
                if (domainParam) {
                    return `${str}?domain=${domainParam}`;
                }
            }
        
            // Return the original string if no conditions are met
            return str;
        }

        // Helper functions for text cleaning
        function extractTextContentFromHTML(htmlString) {
            // Create a temporary DOM element
            const tempElement = document.createElement('div');
            tempElement.innerHTML = htmlString;
        
            // Get the text content from the element
            return tempElement.textContent.replace(/\s{2,}/g, ' ').trim();
        }
        function extractUrlFromString(input) {
            return input.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        }

        function applyChangeToElement(element, elementType, actionType, elementData) {

            if (!element) {
                return ['not_found', ''];
            }
        
            try {
                const result = elementChangeResolver[elementType][actionType](element, elementData);
                return result;

            } catch (err) {
                return ['error', ''];
            }
        
        }

        function getElementByPath(js_path) {
            try {
                // Attempt to query the element using the js_path
                const element = document.querySelector(js_path);
                if (element) return element;
        
                // Handle the special case for elements with "a#"
                if (js_path.startsWith('a#')) {
                    const elementOrgID = js_path.substring(2);
                    return document.getElementById(elementOrgID);
                }
            } catch (error) {
                // Fallback in case of syntax error and "a#" pattern
                if (error.name === 'SyntaxError' && js_path.startsWith('a#')) {
                    const elementOrgID = js_path.substring(2);
                    return document.getElementById(elementOrgID);
                }
                // Rethrow if the error is not related to the special case
                throw error;
            }
            return null;
        }

        function getAdditionalChangeInfo(elementID, elementPath, elementType, elementTag) {
            if (elementType === 'section') {
                return `${elementTag} ${elementID}`;
            }

            if (elementPath.startsWith('a#')) {
                return `${elementTag} in ${elementPath}`;
            }

            const delimiterIndex = elementPath.indexOf(' >');
            if (delimiterIndex !== -1) {
                return `${elementTag} in ${elementPath.substring(0, delimiterIndex)}`;
            }

            return `${elementTag} ${elementPath}`;
        }

        
        function setEditorChanges() {

            if (interpreterOn) {
                console.log("<-------- Changes Log interpreter start -------->");
                console.log("Changes Log array:");
                console.log(changesLogSavedArray);
            }
    
            var interpreterPageBodyClass = document.body.classList.value.trim().replace(/\s+/g, '.');
    
            changesLogSavedArray.forEach((changeObj, index) => {
                const { id, js_path, action_type, element_type, tag_name, data_change, body_class, common_element } = changeObj;
    
                // Skip if element is not from that page and it's not common element (all pages el)
                if (!interpreterPageBodyClass.includes(body_class) && !common_element) return;
        
                let element, result;
                try {
                    element = getElementByPath(js_path);
                    result = applyChangeToElement(element, element_type, action_type, data_change);
                } catch (error) {
                    result = ['error', error.message];
                }
        
                if (!interpreterOn) return;

                let additionalInfo = getAdditionalChangeInfo(id, js_path, element_type, tag_name);
        
                const logMessage = `CL_${index} `;
                switch (result[0]) {
                    case 'success':
                        log.success(`${logMessage}Interpreter ${result[1]} ${additionalInfo}`);
                        break;
                    case 'no_action':
                        log.info(`${logMessage}No Action for ${result[1]} ${additionalInfo}`);
                        break;
                    case 'not_found':
                        log.error(`${logMessage}Element not found ${result[1]}\n JSpath: ${js_path}`);
                        break;
                    case 'error':
                    default:
                        log.error(`${logMessage}Error ${result[1]}`);
                        break;
                }
            });

            if (interpreterOn) {
                console.log("<-------- Changes Log interpreter end -------->");
            }
        }

        function reInitializeOwlCarousel(owlCarouselHolderID) {
            var owlElement = $(`${owlCarouselHolderID} .owl-carousel`);
            
            if(!owlElement) return;
            
            // Check if Owl Carousel is initialized
            if (owlElement.data('owl.carousel')) {
                // Retrieve the current options
                var currentOptions = owlElement.data('owl.carousel').options;
                
                // Destroy the existing carousel
                owlElement.trigger('destroy.owl.carousel');
                
                // Update the options for mouseDrag and touchDrag
                var newOptions = $.extend({}, currentOptions, {
                    loop: false,
                    dots: true,
                    dotsContainer: false
                });
                
                // Reinitialize the carousel with the updated options
                owlElement.owlCarousel(newOptions);
            }
        }
        function checkOwlCarousel(owlCarouselHolderID) {
            var owlElement = $(`${owlCarouselHolderID} .owl-carousel`);
            
            // Check if owlElement exists
            if (!owlElement.length) {
                return false;
            }
        
            // Check if any element in changesLogSavedArray has js_path that includes owlCarouselHolderID (e.g., 'div#reviews_v2')
            const hasItemChanges = changesLogSavedArray.some(changeObj =>
                changeObj.js_path.toLowerCase().includes(owlCarouselHolderID)
            );
        
            // Check if any element in changesLogSavedArray has id that includes owlCarouselHolderID substring (e.g., 'section_id_reviews_v2')
            const hasHolderChanges = changesLogSavedArray.some(changeObj =>
                changeObj.id.toLowerCase().includes(owlCarouselHolderID.substring(1))
            );
        
            // Return true if there are item changes or holder changes
            if (hasItemChanges || hasHolderChanges) {
                return true;
            } else {
                return false;
            }
        }        
        
        // ReInitialize Owl carousel if exist. Important so Change log could be applied properly
        var runOwlCarouselReviewsReInit = checkOwlCarousel('#reviews_v2');
        if (runOwlCarouselReviewsReInit) {
            reInitializeOwlCarousel('#reviews_v2');
        }

        setEditorChanges();

        if (changesLogSavedArray.length !== 0) {
            // Dispatch/Trigger/Fire the event
            document.dispatchEvent(eventEditor);
        } 
    }

    runChangesLogInterpreter();
    /////// Website Changes Log Interpreter END
});