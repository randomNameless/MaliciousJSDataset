// Connect to SmartSearch
const host = "https://e-spirit-search-api.e-spirit.cloud";
const preparedSearch = "FS_crownpeakcom_prod";

// SmartSearch options
const smartSearchOptions = {
    autocompleteOptions: {
        highlight: true,
        language: "en",
        prefixThreshold: 1
    },
    customParams: [
        { "language": "en" }
    ]
};


function loadSmartSearch(searchForm, searchInput, searchButton, autocompleteDropdown, announce) {

    // SmartSearch instance
    const fsss = new SmartSearch(host, preparedSearch, smartSearchOptions)

    // search UI
    const timeout = 250;

    /**
     * Sets a global event listener.
     * 
     * @param {String} selector css selector
     * @param {String} eventType event type e.g. click
     * @param {*} callback function
     */
    function on(selector, eventType, callback) {
        document.addEventListener(eventType, (event) => {
            let element = event.target;

            while (element) {
                if (element.matches(selector)) {
                    return callback({
                        hanleObj: element,
                        originalEvent: event
                    });
                }
                element = element.parentElement;
            }
        })
    }
   
    const smartSearchHandler = {
        currentPage: null,
        searchTerm: null,
        facets: {},
        search: function () {
            try {
                for (const prop of Object.getOwnPropertyNames(this.facets)) {
                    delete this.facets[prop];
                }
                searchBar.clear();
                searchResult.clear();
                searchLoader.show();
                fsss.search(this.searchTerm).then((response, reject) => {
                    console.log("Response", response);
                    setTimeout(() => {
                        searchLoader.hide();
                        this.currentPage = response;
                        searchResult.renderPage();
                        if (response.facets) {
                            //searchBar.showFacets();
                        }
                    }, timeout);
                });
            } catch (error) {
                console.log(error)
            }
        },
        autoComplete: function () {
            queryString = searchBar.getQuery();
            fsss.fetchAutocompleteList(queryString).then((response, reject) => {
                searchBar.renderAutocompleteList(response);
            });
        },
        nextPage: function () {
            searchLoader.show();
            this.currentPage.next().then((response, reject) => {
                setTimeout(() => {
                    this.currentPage = response;
                    searchLoader.hide();
                    searchResult.renderResult();
                }, timeout);
            });
        },
        facetSearch: function (facetValue, facetType) {
            this.facets[facetType] = facetValue;
            switch (facetType) {
                case "all":
                    delete this.facets["additional_multiple"];
                    delete this.facets["meta_type"];
                    searchLoader.show();
                    searchResult.clear();
                    this.currentPage.resetFacets().then((response, reject) => {
                        setTimeout(() => {
                            searchLoader.hide();
                            this.currentPage = response;
                            //searchBar.showFacets();
                            searchResult.renderPage();
                        }, timeout);
                    });
                    break;
                case "meta_type":
                    delete this.facets["additional_multiple"];
                    searchLoader.show();
                    searchResult.clear();
                    this.currentPage.resetFacets().then((response, reject) => {
                        this.currentPage = response;
                        return this.currentPage.getFacet(facetType).filter(facetValue);
                    }).then((response, reject) => {
                        setTimeout(() => {
                            searchLoader.hide();
                            this.currentPage = response;
                            searchBar.renderMetaFacets();
                            searchBar.renderAdditionalFacets();
                            searchResult.renderPage();
                        }, timeout);
                    });
                    break;
                case "additional_multiple":
                    searchLoader.show();
                    searchResult.clear();
                    this.currentPage.getFacet(facetType).filter(facetValue).then((response, reject) => {
                        setTimeout(() => {
                            searchLoader.hide();
                            this.currentPage = response;
                            searchBar.renderAdditionalFacets();
                            searchResult.renderPage();
                        }, timeout);

                    })
            }
        }
    }

    const searchLoader = {
        searchLoader: document.getElementById("fsss-loader"),
        /**
         * Display the search loading animation.
         * 
         * @returns 
         */
        show: function () {
            this.searchLoader.style.display = "block";
        },
        /**
         * Hide the search loading animation.
         * 
         * @returns 
         */
        hide: function () {
            this.searchLoader.style.display = "none";
        }
    }

    const searchResult = {
        searchResultWrapper: document.getElementById("search-results"),
        currentPage: null,
        init: function () {
            /**
             *  Add the required event listener
             */
            window.addEventListener('scroll', () => {
                const {
                    scrollTop,
                    scrollHeight,
                    clientHeight
                } = document.documentElement;
                if (scrollTop + clientHeight >= scrollHeight - 5 &&
                    smartSearchHandler.currentPage &&
                    smartSearchHandler.currentPage.hasNext()) {
                    smartSearchHandler.nextPage();
                }
            }, {
                passive: true
            });
        },
        renderResult: function () {
		
			var resultInfo = document.getElementById('result-info');
			
            if (smartSearchHandler.currentPage && smartSearchHandler.currentPage.numberOfResults > 0) 
			{
				var query = searchBar.getQuery();
			
				
				resultInfo.innerHTML = smartSearchHandler.currentPage.numberOfResults + " results for <strong>" + query + "</strong>";
			
                let pageRenderer = fsss.getPageRenderer(smartSearchHandler.currentPage);
                pageRenderer.searchResultTemplate.templateFunction = (data, highlights) => {
					const values = {
						link: data.link || "#",
						title: data.title || "Default title",
						content: highlights.content || ""
					}
					
					const template = `<a href="${values.link}"><div class="search-item bg-gray-900 rounded px-2 lg:px-12 py-4 mb-4"><h2 class="search-header mb-0 px-5 lg:text-head-sm">${values.title}</h2><div class="border-0 collapse show"><div class="search-body pt-2 pb-7 px-5 text-base">${values.content}</div></div></div></a>`;		
										
					return template;
                }
                pageRenderer.renderSearchResultsToHTMLElement(this.searchResultWrapper);
				
            } 
			else 
			{
				// no results
				
				resultInfo.innerHTML = "0 results";
				
				let noResultsHtml = '<div class="search-item-no-results bg-gray-900 rounded px-2 lg:px-12 py-4 mb-4"><div class="border-0 collapse show"><div class="search-body pt-2 pb-7 px-5 text-base">Sorry, there were no results found.</div></div></div>'
				
				/*
				
                let noResultWrapper = document.createElement("DIV");
                noResultWrapper.classList.add("jumbotron");
                let noResultParagraph = document.createElement("P");
                noResultParagraph.textContent += this.searchResultWrapper.getAttribute("data-search-no-result");
                noResultWrapper.appendChild(noResultParagraph);
                if (smartSearchHandler.currentPage && smartSearchHandler.currentPage.didYouMean.length > 0) {
                    let didYouMeanParagraph = document.createElement("P");
                    didYouMeanText = this.searchResultWrapper.getAttribute("data-search-did-you-mean");
                    didYouMeanParagraph.insertAdjacentHTML(
                        'beforeend',
                        `${(didYouMeanText)}<br>`,
                    );
                    for (const youMean of smartSearchHandler.currentPage.didYouMean) {
                        didYouMeanParagraph.insertAdjacentHTML(
                            'beforeend',
                            `<a class="text-light-blue" href="?query=${(youMean)}"> ${(youMean)}</a><br>`,
                        );
                    }
                    noResultWrapper.appendChild(didYouMeanParagraph);

                }
				*/
                this.searchResultWrapper.innerHTML = noResultsHtml;
				
            }
        },
        renderPage: function () {
            this.searchResultWrapper.replaceChildren();
            this.renderResult();
        },
        clear: function () {
		
			if(this.searchResultWrapper.hasChildNodes())
				this.searchResultWrapper.replaceChildren();
        }
    }

    const searchBar = {
        elements: {
            /*// Get all input forms for the search bar
            searchForm: document.getElementById('search-form'),
            searchInput: document.getElementById('search-input'),
            //discardButton: document.getElementById('fsss-btn-discard'),
            searchButton: document.getElementById('search-btn'),
            // Get the containers for the facets
            searchFacets: document.getElementById('fsss-facets'),
            searchAdditionalFacets: document.getElementById('fsss-additional-facets'),
            // Get the dropdown container for the autocomplete list
            autocompleteDropdown: document.getElementById('search-auto-complete'),
			searchResults: document.getElementById('search-results'),*/
            
            searchForm: null,
            searchInput: null,
            searchButton: null,
            autocompleteDropdown: null,
            announce: null,
            highlighted: null
        },
        /**
         *  Add the required event listener
         */
        init: function (searchForm, searchInput, searchButton, autocompleteDropdown, announce) {
            this.elements.searchForm = searchForm ? searchForm : this.elements.searchForm;
            this.elements.searchInput = searchInput ? searchInput : this.elements.searchInput;
            this.elements.searchButton = searchButton ? searchButton : this.elements.searchButton;
            this.elements.autocompleteDropdown = autocompleteDropdown ? autocompleteDropdown : this.elements.autocompleteDropdown;
            this.elements.announce = announce ? announce : this.elements.announce;
            
            this.elements.searchButton.addEventListener("click", () => {
                
				if("../../../technical/search-results/" === window.location.pathname){
					smartSearchHandler.searchTerm = this.getQuery();
        	        smartSearchHandler.search();
					this.elements.searchForm.classList.remove("open");

					let el = document.querySelector( ':focus' );
					if( el ) el.blur();
				} else {
					window.location = "../../../technical/search-results/" + "?query=" + this.getQuery();
				}
            });
			
			
            this.elements.searchInput.addEventListener("focus", () => {
				
				if(this.elements.autocompleteDropdown.hasChildNodes() && this.elements.autocompleteDropdown.childNodes[0].innerHTML.length > 0)
				{				
					this.elements.searchForm.classList.add("open");					
				}
            });		
			
			
            this.elements.searchInput.addEventListener("focusout", (event) => {
			
				
				if(event.relatedTarget == null || event.relatedTarget.className != "auto-complete-item")
					this.elements.searchForm.classList.remove("open");					
            });
			
						
			
			/*
            this.elements.discardButton.addEventListener("click", () => {
                this.elements.searchInput.value = "";
            });
			*/
			
            // Override the default submit event
            this.elements.searchForm.addEventListener('submit', (event) => {
                event.preventDefault();
                this.elements.searchButton.click();				
				this.elements.searchForm.classList.remove("open");
            });
			
            // Event listener for displaying and selecting the search suggestion when a key is pressed
            this.elements.searchInput.addEventListener('keyup', (event) => {
							
                if (this.elements.searchInput.value.length > 2) 
				{
                    if (["ArrowDown","ArrowUp","ArrowRight","Enter"].includes(event.key) && this.elements.autocompleteDropdown.children.length > 0) 
					{
                        this.keyPressed(event);
                    } 
					else 
					{
                        smartSearchHandler.autoComplete();
                    }
                } else {
                    this.elements.searchForm.classList.remove("open");
                }
            });
        },
        /**
         * Handles the key events on the search suggestions
         */
        keyPressed: function (event) {
            event.stopPropagation();
            event.preventDefault();
            switch (event.key) {
                case "Enter":
                    if (this.elements.highlighted){
                        this.setQuery(this.elements.highlighted.innerText);
                    }
                    this.elements.searchButton.click();
                    break;
                case "ArrowRight":
                    if (this.elements.highlighted){
                        this.setQuery(this.elements.highlighted.innerText);
                        smartSearchHandler.autoComplete();
                    }
                    break;
                case "ArrowUp":
                    if (!this.elements.highlighted){
                        this.highlightElement(this.elements.autocompleteDropdown.lastChild)
                    } else if (this.elements.highlighted === this.elements.autocompleteDropdown.firstChild) {
                        this.highlightElement(null);
                    } else {
                        this.highlightElement(this.elements.highlighted.previousElementSibling)
                    }
                    break;
                case "ArrowDown":
                    if (!this.elements.highlighted){
                        this.highlightElement(this.elements.autocompleteDropdown.firstChild)
                    } else if (this.elements.highlighted === this.elements.autocompleteDropdown.lastChild) {
                        this.highlightElement(null);
                    } else {
                        this.highlightElement(this.elements.highlighted.nextElementSibling)
                    }
                    break;
            }
        },
        highlightElement: function (element) {
            this.elements.highlighted = element;
            this.elements.autocompleteDropdown.childNodes.forEach(function(el){el.classList.remove('highlight')});
            if (element) {
                element.classList.add('highlight');
                this.elements.searchInput.setAttribute("aria-activedescendant", element.id);
            } else {
                this.elements.searchInput.removeAttribute("aria-activedescendant");
            }
        },
        /**
         * Displays the list of search suggestions.
         * 
         * @param {*} autocompleteList 
         */
        renderAutocompleteList: function (autocompleteList) {
            this.elements.autocompleteDropdown.replaceChildren();
            this.elements.highlighted = null;
            this.elements.searchInput.removeAttribute("aria-activedescendant");
            // Trigger the click event on the search input form to ensure that the autocomplete list is displayed
            /*if (this.elements.searchInput.getAttribute("aria-expanded") !== "true") {
                this.elements.searchInput.click('open');
            }*/
			
            for (let [index, suggestion] of autocompleteList.entries()) 
			{
                let li = document.createElement("li");
                li.innerHTML = suggestion;
                li.setAttribute("id", this.elements.searchForm.id + "-suggestion-" + index);
                li.setAttribute("tabindex", -1);
                li.setAttribute("role", "option");
                li.setAttribute("tabindex", "-1");
                
                li.classList.add("auto-complete-item");
                li.classList.add("dropdown-item");

				li.addEventListener("focusout", (event) => {
					if(event.relatedTarget == null || event.relatedTarget.className != "auto-complete-item")
						this.elements.searchForm.classList.remove("open");
                        this.elements.announce.innerText = null;
                        this.elements.searchInput.removeAttribute("aria-activedescendant");
				});

                li.addEventListener("click", (event) => {
                    this.setQuery(event.target.innerText);
                    this.elements.searchButton.click();				
                    this.elements.searchForm.classList.remove("open");
                    this.elements.announce.innerText = null;
                    this.elements.searchInput.removeAttribute("aria-activedescendant");
                })
                li.addEventListener("keyup", (event) => {
                    event.stopPropagation();
                    event.preventDefault();
                    this.keyPressed(event);
                })
                li.addEventListener("keydown", (event) => {
                    event.stopPropagation();
                    event.preventDefault();
                })
								
                this.elements.autocompleteDropdown.appendChild(li);
            }
			
			if(this.elements.autocompleteDropdown.hasChildNodes() && this.elements.autocompleteDropdown.childNodes[0].innerHTML.length > 0 && this.elements.searchInput == document.activeElement)
			{			
				this.elements.searchForm.classList.add("open");
                this.elements.announce.innerText = null;
                this.elements.announce.innerText = this.elements.autocompleteDropdown.childElementCount + " suggestions found" + ", to navigate use up and down arrows";
			} else {
                this.elements.searchForm.classList.remove("open");
                this.elements.announce.innerText = null;
                this.elements.searchInput.removeAttribute("aria-activedescendant");
            }
			
			
        },
        /**
         * Creates a new facet button.
         * 
         * @param {String} name
         * @param {String} count 
         * @param {callback} action 
         * @returns a html button
         */
        createFacetButton: function (name, count, facetType) {
            let button = document.createElement("BUTTON");
            button.setAttribute("type", "button");
            button.setAttribute("data-facet-value", name);
            button.setAttribute("data-facet-type", facetType);
            button.classList.add("btn", "btn-default");
            if (smartSearchHandler.facets.hasOwnProperty(facetType) && smartSearchHandler.facets[facetType] === name) {
                button.classList.add("active");
            }
            button.innerHTML = `${name} <span class="badge">${count}</span>`;
            button.addEventListener("click", (event) => {
                event.target.classList.add("active");
                let targetFacetValue = event.target.getAttribute("data-facet-value");
                let targetFacetType = event.target.getAttribute("data-facet-type");
                smartSearchHandler.facetSearch(targetFacetValue, targetFacetType);
            });
            return button;
        },
        /**
         * Creates facte buttons.
         */
        renderFacets: function (facetType, facetContainer) {
            // Render the main facets (meta_type)
            let facets = smartSearchHandler.currentPage.getFacet(facetType);
            facets.counts.forEach(facet => {
                let button = this.createFacetButton(facet.value, facet.count, facetType);
                facetContainer.appendChild(button);
            })
        },
        /**
         * Render the main facets (meta_type)
         */
        renderMetaFacets: function () {
            this.elements.searchFacets.replaceChildren(this.elements.searchFacets.firstChild);
            if (smartSearchHandler.facets.hasOwnProperty("meta_type")) {
                this.elements.searchFacets.firstChild.classList.remove("active");
            }
            this.elements.searchAdditionalFacets.replaceChildren();
            this.renderFacets("meta_type", this.elements.searchFacets);
        },
        /**
         * Render the additional facets (additional_multiple)
         */
        renderAdditionalFacets: function () {
            this.elements.searchAdditionalFacets.replaceChildren();
            this.renderFacets("additional_multiple", this.elements.searchAdditionalFacets);
        },
        /**
         * Gets the search term.
         * 
         * @returns 
         */
        getQuery: function () {
            return this.elements.searchInput.value;
        },
        /**
         * Sets the search term.
         * 
         * @param {String} value 
         */
        setQuery: function (value) {
            this.elements.searchInput.value = value;
        },
        showFacets: function () {
            this.elements.searchFacets.replaceChildren();
            // Create 'all' button to reset facets
            let button = this.createFacetButton("All", smartSearchHandler.currentPage.responseData.numRows, "all");
            button.classList.add("active");
            this.elements.searchFacets.appendChild(button);
            this.renderMetaFacets();
        },
        clear: function () {
			/*
            this.elements.searchFacets.replaceChildren();
            this.elements.searchAdditionalFacets.replaceChildren();
			*/
        }
    }

    searchBar.init(searchForm, searchInput, searchButton, autocompleteDropdown, announce);
    searchResult.init();

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let queryTerm = urlParams.get("query");
    if (queryTerm) {
        searchBar.setQuery(queryTerm);
        smartSearchHandler.searchTerm = queryTerm;
        smartSearchHandler.search();
    }
};

loadSmartSearch(document.getElementById('search-form-desktop'), document.getElementById('search-input-desktop'), document.getElementById('search-btn-desktop'), document.getElementById('search-auto-complete-desktop'), document.getElementById('announce-search-desktop'));
loadSmartSearch(document.getElementById('search-form-mobile-nav'), document.getElementById('search-input-mobile-nav'), document.getElementById('search-btn-mobile-nav'), document.getElementById('search-auto-complete-mobile-nav'), document.getElementById('announce-search-mobile-nav'));
if (document.getElementById('search-form-mobile-result')){
    loadSmartSearch(document.getElementById('search-form-mobile-result'), document.getElementById('search-input-mobile-result'), document.getElementById('search-btn-mobile-result'), document.getElementById('search-auto-complete-mobile-result'), document.getElementById('announce-search-mobile-result'));
}