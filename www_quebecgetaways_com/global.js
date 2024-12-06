// JScript File

function hideDiv(Name) {
    if (document.getElementById) {
        var div = document.getElementById(Name);
        if (div) {
            div.style.display = 'none';
        }
    }
}                
function showDiv(Name) {
    if (document.getElementById) {
        var div = document.getElementById(Name);
        if (div) {
            div.style.display = 'block';
        }
    }
}    

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

// fonctions GLOBALES
function getLastPartIdToReplace(strCellId) {
    return (strCellId.substring(0, strCellId.lastIndexOf("_") + 1));
    
}


// fonctions pour section réservations


// fonctions recherche avancée
function takeCareOfPostalCodeAndDistance(oThis) {
    
    var objDistance;
    var objPostalCode;
    objDistance = document.getElementById(getLastPartIdToReplace(oThis.id) + 'txtDistance');
    objPostalCode = document.getElementById(getLastPartIdToReplace(oThis.id) + 'txtCodePostal');
    objRegion = document.getElementById(getLastPartIdToReplace(oThis.id) + 'ddlRegion');
    objVille = document.getElementById(getLastPartIdToReplace(oThis.id) + 'ddlVille');

    if (objDistance.value == '' && objPostalCode.value == '') { //Si les 2 sont vide, ville et region sont enabled
        objRegion.disabled = false;
        objVille.disabled = false;
    }
    else { // Si un des 2 est pas vide, on disable region et ville
        objRegion.value = 0;
        objRegion.disabled = true;
        objVille.value = 0;
        objVille.disabled = true;
    }
}


// obtient tout les checkbox cochés 
function getChecboxValues(chkListID) {
    var listItems = '';
    var obj= document.getElementById(chkListID);

    jQuery("#" + chkListID  + " input").each(function() {
        if (this.checked) {

            listItems += jQuery(this).val();
            listItems += ',';
        }
    });
    
    return listItems;

}

//n'est plus utiliser!  Vérifier et supprimer si le cas...
function closeModal() {
    document.getElementById('ctl00_navbar_btnCloseModal').click();
}

var blnOverAllValidForSummaryPopup = true;
function FireValidationAndShowErrorSummaryModalPopupIfNecessary(modalPopupErrorSummary, strValidationGroup) {
    try {
        blnOverAllValidForSummaryPopup = true;
        //OK ici attention, on va valider chacun de nos validators pour ne pas scroller UP
        
        var strErrorMessageString = '';
        var objSummary;
        
        //ON va chercher le bon summary 
        for (i=0;i<Page_ValidationSummaries.length;i++)
        {
            if (Page_ValidationSummaries[i].validationGroup == strValidationGroup)
                objSummary = Page_ValidationSummaries[i];
        }
        for (i=0;i<Page_Validators.length;i++) {
            if (Page_Validators[i].validationGroup == strValidationGroup)
            {
                ValidatorValidate(Page_Validators[i]);
                if (! Page_Validators[i].isvalid)
                {
                    strErrorMessageString += Page_Validators[i].errormessage + '<br>';
                    blnOverAllValidForSummaryPopup = false;
                }
                if (i == 500) i = 99999;
            }
        }
        if (!blnOverAllValidForSummaryPopup) 
        {
            objSummary.style.display = "";
            document.getElementById(objSummary.id.toString()).innerHTML = strErrorMessageString; 
            ShowErrorSummaryModalPopupIfNecessary(modalPopupErrorSummary);
        }
        
        return blnOverAllValidForSummaryPopup;
    }
    catch(e)
    {
        alert (e);
        return false;
    }
}

function ShowErrorSummaryModalPopupIfNecessary(modalPopupErrorSummary) {
    var x = $find(modalPopupErrorSummary);
    x.show();
}

function getComputedHeight(theElt) {
    var browserName = navigator.appName;
    if (browserName == "Microsoft Internet Explorer") {
        var is_ie = true;
    } else {
        var is_ie = false;
    }
    if (is_ie) {
        tmphght = document.getElementById(theElt).offsetHeight;
    }
    else {
        docObj = document.getElementById(theElt);
        var tmphght1 = document.defaultView.getComputedStyle(docObj, "").getPropertyValue("height");
        tmphght = tmphght1.split('px');
        tmphght = tmphght[0];
    }
    return tmphght;

}


///////////* Functions pour les cartes google (Affichage du DIV over) */
//////////        var timeoutHide, timeoutShow, intMarkerId, strMarkerGlobalGroup;
//////////        function findAbsolutePosition(obj) {
//////////            var curleft = curtop = 0;
//////////            if (obj.offsetParent) {
//////////                do {
//////////                    curleft += obj.offsetLeft;
//////////                    curtop += obj.offsetTop;
//////////                } while (obj = obj.offsetParent);
//////////            }
//////////            return [curleft, curtop];

//////////            //returns an array
//////////        }
//////////        function mouseOutMarkerGo(strMarkerGroup, i) {
//////////            document.getElementById("divClientDetail").style.display = 'none';
//////////        }
//////////        function mouseOutMarker(strMarkerGroup, i) {
//////////            markerGroups[strMarkerGroup][i].setImage("/images/google_markers/gros/" + (i + 1) + ".gif");
//////////            if (document.getElementById("divClientDetail") != null) {
//////////                //clearTimeout(timeoutShow)
//////////                timeoutHide = setTimeout(function () { mouseOutMarkerGo(strMarkerGroup, i) }, 250);
//////////            }
//////////        }
//////////        function mouseOutDiv() {
//////////            mouseOutMarker(strMarkerGlobalGroup, intMarkerId)
//////////        }

//////////        function mouseOverDiv() {
//////////            clearTimeout(timeoutHide)
//////////            clearTimeout(timeoutShow)
//////////        }

//////////        function mouseOnMarkerGo(strMarkerGroup, i, idClient) {
//////////            var marker = markerGroups[strMarkerGroup][i];
//////////            var bigMapPosition = findAbsolutePosition(document.getElementById('big_map'));
//////////            var bigMapLeft = bigMapPosition[0];
//////////            var bigMapTop = bigMapPosition[1];

//////////            var markerPosition = map.fromLatLngToContainerPixel(marker.getLatLng(), map.getZoom());
//////////            var markerLeft = markerPosition.x;
//////////            var markerTop = markerPosition.y;

//////////            document.getElementById("divDetailPopupClient").innerHTML = document.getElementById("divClientInfoDetail" + idClient).innerHTML
//////////            document.getElementById("divClientDetail").style.display = 'block';

//////////            if (markerTop >= document.getElementById('big_map').offsetHeight / 2) {
//////////                markerTop = markerTop - getComputedHeight("divClientDetail");
//////////            }

//////////            document.getElementById("divClientDetail").style.left = parseInt(markerLeft + 20) + "px";
//////////            document.getElementById("divClientDetail").style.top = parseInt(document.getElementById('big_map').offsetHeight * -1 + markerTop - 25) + "px";
//////////        }
//////////        function mouseOnMarker(strMarkerGroup, i, idClient) {
//////////            if (document.getElementById("divClientDetail") != null) {
//////////                clearTimeout(timeoutHide)
//////////                //if (intMarkerId > 0) mouseOutMarker(strMarkerGlobalGroup, intMarkerId)
//////////                intMarkerId = i;
//////////                strMarkerGlobalGroup = strMarkerGroup;
//////////                markerGroups[strMarkerGlobalGroup][intMarkerId].setImage("/images/google_markers/gros/" + (i + 1) + "on.gif");
//////////                clearTimeout(timeoutShow)
//////////                timeoutShow = setTimeout(function () { mouseOnMarkerGo(strMarkerGlobalGroup, intMarkerId, idClient) }, 250);
//////////                //timeoutShow = setTimeout(function () { mouseOnMarkerGo(strMarkerGlobalGroup, intMarkerId, idClient) }, 500);
//////////            }
//////////        }


        //Fonction qui montre ou enleve les markers ou les directions selon le cas.
        function showOrHideProxiDirection(intPanel) {
            if (intPanel == 1) {
            }
            else {
                markerGroups[Attractions][1].setMap(null);
            }
        }
 
    function openFacebookLogin(strUrl){
            var  screenX    = typeof window.screenX != 'undefined' ? window.screenX : window.screenLeft,
                 screenY    = typeof window.screenY != 'undefined' ? window.screenY : window.screenTop,
                 outerWidth = typeof window.outerWidth != 'undefined' ? window.outerWidth : document.body.clientWidth,
                 outerHeight = typeof window.outerHeight != 'undefined' ? window.outerHeight : (document.body.clientHeight - 22),
                 width    = 500,
                 height   = 270,
                 left     = parseInt(screenX + ((outerWidth - width) / 2), 10),
                 top      = parseInt(screenY + ((outerHeight - height) / 2.5), 10),
                 features = (
                    'width=' + width +
                    ',height=' + height +
                    ',left=' + left +
                    ',top=' + top
                  );
            newwindow=window.open(strUrl,'Login_by_facebook',features);
 
           if (window.focus) {newwindow.focus()}
          return false;
        }
        
    //Ouverture des modal iframes
    ouvrirModalMonProfil = function (strTitle){
    setGlobalIframeUrlAndParams('/monquebecvacances/monprofil.aspx',560, 500, strTitle);}
    
    ouvrirModalMesAbonnements = function (strTitle){
    setGlobalIframeUrlAndParams('/monquebecvacances/mesabonnements.aspx',500, 500, strTitle);}

    ouvrirModalMonJournal = function(strTitle) {
        setGlobalIframeUrlAndParams('/monquebecvacances/monjournal.aspx', 800, 550, strTitle, 'iframeGlobalWithScroll');
        $find("ModalPopupJournal").show();
    }

    ouvrirModalInscription = function(strTitle, iframeId) {
        setGlobalIframeUrlAndParams('/monquebecvacances/inscription.aspx', 700, 550, strTitle, iframeId);
    }

    ouvrirModalInscriptionShow = function() {
    $find("ModalPopupInscription1erNiveau").show();
    }

    ouvrirModalMotdePassePerdu = function(strTitle, iframeId) {
    setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/internaute/motdepasseperdu.ascx', 500, 250, strTitle, iframeId);
    }

    ouvrirModalConnecter = function(strTitle, returnUrl) {
        if (returnUrl == undefined) {
            returnUrl = '';
        }
        setGlobalIframeUrlAndParams('/monquebecvacances/ouvrirsession.aspx?returnurl=' + returnUrl, 515, 400, strTitle);
    }
    ouvrirModalLogout = function(strTitle) {
        setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/internaute/logout.ascx', 515, 400, strTitle);
    }

    /* Recherche */
    ouvrirModalRechercheAvancee = function (strTitle, intRepertoireID) {
        setGlobalIframeUrlAndParams('/gabarits/rechercheavancee.aspx?RepertoireID=' + intRepertoireID, 825, 450, strTitle);
        ouvrirModalRechercheAvanceePageRecherche();
    }

    /* Modifier ma recherche */
    initModalRechercheAvanceePageRecherche = function(strTitle, querystring, intRepertoireID) {
        if (intRepertoireID == 3) {
            setGlobalIframeUrlAndParams('/gabarits/rechercheavancee.aspx?' + querystring, 825, 450, strTitle);
        } else {
            setGlobalIframeUrlAndParams('/gabarits/rechercheavancee.aspx?' + querystring, 825, 450, strTitle);
        }
        ouvrirModalRechercheAvanceePageRecherche();
    }

    ouvrirModalRechercheAvanceePageRecherche = function() {
        $find("ModalPopupModifierRecherche").show();
    }


    
    /* Modifier ma recherche Idee */
    initModalrechercheAvanceeIdeePageRecherche = function(strTitle, querystring) {
        setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceeIdee.ascx&' + querystring, 840, 450, strTitle);
    }
    ouvrirModalrechercheAvanceeIdeePageRecherche = function() {
        $find("ModalPopupModifierRechercheIdee").show();
    }



    /* Ouvrir recherche Idee */
    ouvrirModalRechercheAvanceeIdee = function(strTitle) {
        setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceeIdee.ascx', 825, 450, strTitle);
    }

    popupModalRechercheAvanceeIdee = function() {

        $find("modalPopupRechercheAvanceeIdee").show();
    }

    
    
    
   /*Ouvrir recherche Forfait*/

    ouvrirModalRechercheAvanceeForfait = function(strTitle) {

        setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceeForfait.ascx', 825, 450, strTitle);
    }

    popupModalrechercheAvanceeForfait = function() {

       $find("modalPopupRechercheAvanceeForfait").show();
   }

   /* Modifier ma recherche Forfait*/
   initModalRechercheAvanceeForfait = function(strTitle, querystring, intRepertoireID) {
       setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceeForfait.ascx&' + querystring , 840, 450, strTitle);
   }


   /*Ouvrir recherche Sortie*/

   ouvrirModalRechercheAvanceeSortie = function (strTitle) {
       setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceeSorties.ascx', 825, 450, strTitle);
   }
  
   popupModalrechercheAvanceeSortie = function () {
       $find("modalPopupRechercheAvanceeForfait").show();
   }

   /* Modifier ma recherche Sortie*/
   initModalRechercheAvanceeSortie = function (strTitle, querystring, intRepertoireID) {
       setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceeSorties.ascx&' + querystring, 840, 450, strTitle);
   }


   /*Ouvrir recherche Promotion*/

   ouvrirModalRechercheAvanceePromotion = function(strTitle) {

       setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceePromotion.ascx', 825, 450, strTitle);
   }

   popupModalrechercheAvanceePromotion = function() {
       $find("modalPopupRechercheAvanceePromotion").show();
   }

   /* Modifier ma recherche Promotion*/
   initModalRechercheAvanceePromotion = function(strTitle, querystring, intRepertoireID) {
       setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceePromotion.ascx&' + querystring, 840, 450, strTitle);
   }




   /*Contenu */
    ouvrirModalRechercheContenuIdee = function(strTitle) {

    setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceeContenu.ascx', 825, 450, strTitle);
    }

    popupModalRechercheContenuIdee = function() {

       $find("modalPopupRechercheContenuIdee").show();
    }


    ouvrirModalRepertoireChoixCarte = function(strTitle, intRepertoire, intProduitTypeId) {
    setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/global/RepertoireParRegionChoixSurCarte.ascx&repertoireid=' + intRepertoire + '&produitTypeId=' + intProduitTypeId, 669, 555, strTitle);
        $find("ModalPopuprepertoireChoixCarte").show();
    }

    initModalRechercheContenuIdee = function(strTitle, querystring) {
         setGlobalIframeUrlAndParams('/gabarits/iframeController1erNiveau.aspx?C=/controls/recherche/rechercheAvanceeContenu.ascx&' + querystring, 840, 450, strTitle);
     }


     function setGlobalIframeUrlAndParams(strUrl, divWidth, divHeight, strTitle, iframeId) {
            //Si pas de iframe passé, on prétend le défaut
        if (iframeId == undefined) {
            iframeId = 'iframeGlobal';
        }

        try {

            document.getElementById('iframeGlobal').style.display = 'none';
            document.getElementById('iframeGlobalWithScroll').style.display = 'none';
            document.getElementById('iframeglobal2eniveau').style.display = 'none';

            document.getElementById('masterFormulaireDiv').style.width = divWidth + 'px';
            document.getElementById('masterFormulaireDiv').style.height = divHeight + 'px';
            document.getElementById(iframeId).style.width = divWidth + 'px';
            document.getElementById(iframeId).style.height = divHeight - 40 + 'px'; ;
            document.getElementById('divTitle').innerHTML = strTitle;
            document.getElementById(iframeId).src = strUrl;
            document.getElementById(iframeId).style.display = 'block';
        }
        catch (e)
        { alert(e) }

    }
        
    selectAvatar = function(oThis) {
        document.getElementById(oThis.id.substring(0, oThis.id.lastIndexOf('_')) + '_imgAvatar').src = oThis.src;
        document.getElementById(oThis.id.substring(0, oThis.id.lastIndexOf('_')) + '_txtAvatar').value = oThis.src.substring(oThis.src.indexOf('/images/'));
    }
    
    validerFichierUpload = function(args, strExtention, intGrosseur) {
       try {
            var fileExtension = args.get_fileName();
            var mp3 = fileExtension.indexOf('.jpg');
            var filesizeuploaded = parseInt(args.get_length());
            if (mp3 > 0 && (filesizeuploaded < 5000000)) {
                return true
            }
            else {
                return false;
            }
        }
        catch (e) {
            alert(e.message);
            return false;
        }
    }
    
    //Functions pour le spinnner....
     var opts = {
        lines: 12, // The number of lines to draw
        length: 7, // The length of each line
        width: 4, // The line thickness
        radius: 10, // The radius of the inner circle
        color: '#000', // #rgb or #rrggbb
        speed: 1, // Rounds per secondd
        trail: 60, // Afterglow percentage
        shadow: false // Whether to render a shadow
    };
    var target;
    var spinner;

    initSpinner = function(strContentId){
        target = document.getElementById(strContentId);
        spinner = new Spinner(opts).spin(target);
        stopSpinner();
    }
    
    startSpinner = function(options) {
        if (options == undefined) {options = opts}
        spinner = new Spinner(options).spin(target);
    }
    
    stopSpinner = function() {
        spinner.stop();
    }


    //Functions pour le spinnner recherche avancee....
    var optsRA = {
        lines: 12, // The number of lines to draw
        length: 3, // The length of each line
        width: 2, // The line thickness
        radius: 4, // The radius of the inner circle
        color: '#000', // #rgb or #rrggbb
        speed: 2, // Rounds per secondd
        trail: 60, // Afterglow percentage
        shadow: false // Whether to render a shadow
    };
    var targetRA;
    var spinnerRA;

    initSpinnerRA = function(strContentId) {
        targetRA = document.getElementById(strContentId);
        spinnerRA = new Spinner(optsRA).spin(targetRA);
        stopSpinnerRA();
    }
    startSpinnerRA = function() {
        spinnerRA = new Spinner(optsRA).spin(targetRA);
    }
    stopSpinnerRA = function() {
        spinnerRA.stop();
    }


    //Functions pour le spinnner recherche avancee....
    var optsReservation = {
        lines: 12, // The number of lines to draw
        length: 3, // The length of each line
        width: 2, // The line thickness
        radius: 4, // The radius of the inner circle
        color: '#000', // #rgb or #rrggbb
        speed: 2, // Rounds per secondd
        trail: 60, // Afterglow percentage
        shadow: false // Whether to render a shadow
    };
    var targetReservation;
    var spinnerReservation;

    initSpinnerReservation = function(strContentId) {
        targetReservation = document.getElementById(strContentId);
        spinnerReservation = new Spinner(optsReservation).spin(targetReservation);
        stopSpinnerReservation();
    }
    startSpinnerReservation = function() {
        spinnerReservation = new Spinner(optsReservation).spin(targetReservation);
    }
    stopSpinnerReservation = function() {
        spinnerReservation.stop();
    }
    
    function expandCollapseNewBox(strBoxId) {
        
        //ON va voir si on en a un qui était ouvert...
        //Si oui on doit retarder l'ouverture pour permettre de voir la fermeture
        var intTimer = 0;
        var blnDoWeHaveAnOpenPanel = false;
       var blnStateBefore = $find(strBoxId).get_Collapsed();

        //Est-ce qu'on a le region?
        if (! ($find('colRegion') == null))
        {
            blnDoWeHaveAnOpenPanel = (blnDoWeHaveAnOpenPanel || !($find('colRegion').get_Collapsed()));
            $find('colRegion')._doClose();
        }
        //Est-ce qu'on a le catProduit?
        if (! ($find('colCatProduit') == null))
        {
            blnDoWeHaveAnOpenPanel = (blnDoWeHaveAnOpenPanel || !($find('colCatProduit').get_Collapsed()));
            $find('colCatProduit')._doClose();
        }
        //Est-ce qu'on a le activite Produit?
        if (!($find('colActProduit') == null)) {
            blnDoWeHaveAnOpenPanel = (blnDoWeHaveAnOpenPanel || !($find('colActProduit').get_Collapsed()));
            $find('colActProduit')._doClose();
        }
        //Est-ce qu'on a le colMunicipalite?
        if (! ($find('colMunicipalite') == null))
        {
            blnDoWeHaveAnOpenPanel = (blnDoWeHaveAnOpenPanel || !($find('colMunicipalite').get_Collapsed()));
            $find('colMunicipalite')._doClose();
        }

        //Est-ce qu'on a le colCategorieClient?
        if (!($find('colCategorieClient') == null)) {
            blnDoWeHaveAnOpenPanel = (blnDoWeHaveAnOpenPanel || !($find('colCategorieClient').get_Collapsed()));
            $find('colCategorieClient')._doClose();
        }

        if (blnDoWeHaveAnOpenPanel) intTimer = 500;
        if (blnStateBefore == true) setTimeout(function () { $find(strBoxId)._doOpen() }, intTimer);
    }

    function collapseBox(strBoxId) {

    $find(strBoxId)._doClose();
    }


    function showListCategorie(divid , objid) {

        jQuery('div.divCategorie').hide();
        jQuery('#' + divid).show();

        jQuery('#CategorieMenu a.linkCategorie').removeClass("selected");
        
         jQuery('.' + objid).addClass("selected");


    }
    
            function resizeBrowser (intWidth, intHeight)
        {
            if (document.body && document.body.offsetWidth) {
             winW = document.body.offsetWidth;
             winH = document.body.offsetHeight;
            }
            if (document.compatMode=='CSS1Compat' &&
                document.documentElement &&
                document.documentElement.offsetWidth ) {
             winW = document.documentElement.offsetWidth;
             winH = document.documentElement.offsetHeight;
            }
            if (window.innerWidth && window.innerHeight) {
             winW = window.innerWidth;
             winH = window.innerHeight;
            }

            var blnResize;
            if (intWidth > winW)
            {
                blnResize = true;
            }
            else{intWidth = winW}
            
            if (intHeight > winH)
            {
                blnResize = true;
            }
            else{intHeight = winH;}
                
            if (blnResize) top.window.resizeTo(intWidth,intHeight);
        }
     
        function findPos(obj) {
            var curleft = curtop = 0;
            if (obj.offsetParent) {
                curleft = obj.offsetLeft
                curtop = obj.offsetTop
                while (obj = obj.offsetParent) {
                    curleft += obj.offsetLeft
                    curtop += obj.offsetTop
                }
            }
            return [curleft, curtop];
        }


        function addStatistique(intEventId, intClientId, intProduitId, intContenuId) {
            //On bati la querystring
            var strQuerystring = 'eventid=' + intEventId
            if (!isNaN(intClientId)) strQuerystring = strQuerystring + '&ClientId=' + intClientId
            if (!isNaN(intProduitId)) strQuerystring = strQuerystring + '&ProduitId=' + intProduitId
            if (!isNaN(intContenuId)) strQuerystring = strQuerystring + '&ContenuId=' + intContenuId
            jQuery.ajax({
                type: "GET",
                url: "/outils/addStatistique.aspx?" + strQuerystring,
                cache: false,
                success: function(data) {
                    return true;
                },
                error: function(xhr, status, error) {
                    //alert(xhr.responseText);
                    //var err = eval("(" + xhr.responseText + ")");
                    //alert(err.Message);
                }
            });
        }
        
        
    function getRegionIdSaufToutleQuebec(regionId) {
        if (regionId == '22')
            return '';
        else
            return regionId;
}

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}
