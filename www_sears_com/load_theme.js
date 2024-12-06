let searsProp = {
    "--header-bg-primary-color": "#003980",
    "--header-bg-secondary-color": "#0948BB",
    "--header-menu-hover-bg-color":"#003980",
    "--breadcrumbs-bg-color":"#005ccc",
    "--theme-bg-color": "#005CCC",
    "--radio-button-selected-color": "#2196f3",
    "--checkbox-selected-color": "#409fd6",
    "--link-text-color": "#005CCC",
    "--theme-deafult": "#0948BB",
    "--search-button-color" :"#0948BB",
    "--slider-color": "#0db9f0",
    "--slider-color-selected": "#451aff",
    "--store-link-text-color": "#2196f3",
    "--add-to-cart-button-active": "#002857",
    "--order-link" : "#007bff"
    }
    let kmartProp = {
    "--header-bg-primary-color": "#a61111",
    "--header-bg-secondary-color": "#cc1414",
    "--header-menu-hover-bg-color":"#a61111",
    "--breadcrumbs-bg-color": "#B10017",
    "--theme-bg-color": "#B10017",
    "--radio-button-selected-color": "#B10017",
    "--checkbox-selected-color": "#B10017",
    "--link-text-color": "#B10017",
    "--theme-deafult": "#B10017",
    "--search-button-color" :"#B10017",
    "--slider-color": "#B10017",
    "--slider-color-selected": "#8B0000",
    "--store-link-text-color": "#B10017",
    "--add-to-cart-button-active": "#8D0000",
    "--order-link" : "#B10017"
    }
    let kenmoreProp = {
    "--header-bg-primary-color": "#424A4C",
    "--header-bg-secondary-color": "#535d5f",
    "--header-menu-hover-bg-color":"#424A4C",
    "--breadcrumbs-bg-color": "#2ba9e4",
    "--theme-bg-color": "#424A4C",
    "--radio-button-selected-color": "#424A4C",
    "--checkbox-selected-color": "#424A4C",
    "--link-text-color": "#2ba9e4",
    "--theme-deafult": "#424A4C",
    "--search-button-color" :"#424A4C",
    "--slider-color": "#424A4C",
    "--slider-color-selected": "#424A4C",
    "--store-link-text-color": "#424A4C",
    "--add-to-cart-button-active": "#424A4C",
    "--order-link" : "#424A4C"
    }
    if (location.hostname === "sears.com" || location.hostname.endsWith(".sears.com") || location.hostname === "searspr.com" || location.hostname.endsWith(".searspr.com")) {
        if(location.hostname === "sears.com.pr" || location.hostname.endsWith(".sears.com.pr") || location.hostname === "searspr.com" || location.hostname.endsWith(".searspr.com")){
            window.siteId = "searspr"
        }else {
            window.siteId = "searscom"
        }
        
        Object.keys(searsProp).forEach(property => {
        document.documentElement.style.setProperty(
            property,
            searsProp[property]
            );
        });
    }
    else if (location.hostname === "kmart.com" || location.hostname.endsWith(".kmart.com")) {
        window.siteId = "kmartcom"
        Object.keys(kmartProp).forEach(property => {
        document.documentElement.style.setProperty(
            property,
            kmartProp[property]
            );
        });
    } else if (location.hostname === "kenmore.com" || location.hostname.endsWith(".kenmore.com")) {
        window.siteId = "kenmorecom"
        Object.keys(kmartProp).forEach(property => {
        document.documentElement.style.setProperty(
            property,
            kenmoreProp[property]
            );
        });
    }