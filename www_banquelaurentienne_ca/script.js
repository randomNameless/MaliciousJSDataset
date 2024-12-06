//rollover	
function change(imgNm,gif)
{
	document.images[imgNm].src = "/images/uploads/" + gif;
}

function validatesearch()
{
    if (!document.lrecherche.SUCC.checked && !document.lrecherche.GAB.checked && !document.lrecherche.PSE.checked)
    {
        alert('Pour effectuer votre recherche, il vous faut au moins selectionner une case Succursale, Guichet ou Point de service d\'entreprises.');
        document.lrecherche.SUCC.focus();
        return false;
    }

    if (document.lrecherche.type_recherche[0].checked && !verifierCP(document.lrecherche.postal))
    {
        alert('Le code postal ne semble pas être valide, veuillez s\'il vous plaît vérifier son format.');
        document.lrecherche.postal.focus();
        return false;
    }

    if (document.lrecherche.type_recherche[2].checked && (document.getElementById("locality_0").value == ''))
    {
        alert('Pour effectuer votre recherche dans une ville, il est nécessaire de choisir d\'abord une province ou une région.');
        document.getElementById("locality_0").focus();
        return false;
    }
}

function verifierCP(cp)
{
        var codep = /[a-zA-Z]{1}\d{1}[a-zA-Z]{1}([\x20-])*\d{1}[a-zA-Z]{1}\d{1}/;

        if ((cp.value == "") || (!codep.test(cp.value)))
        {
                  return false;
        }
        return true;
}


function MM_jumpMenu(targ,selObj,restore)
{ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_openBrWindow(theURL,winName,features)
{ //v2.0
  newwin = window.open(theURL,winName,features);
  if (!newwin.opener) newwin.opener = self;
}

function checkradio(idradio)
{
    document.lrecherche.type_recherche[idradio].checked = true;
}

function disableoptions()
{
	/*DUMMY*/
}

function forcedisable()
{
	/*DUMMY*/
}

function validate(variable)
{
	/*DUMMY*/
}

function Get_citylist()
{
	/*DUMMY*/
}


function validInfoplus()
{
	document.ff.submit();
}

function ouvreSuite(layer)
{
	showhide(layer);
}

var state = 'block';

function showhide(layer_ref)
{
	if (state == 'block')
	{
		state = 'block';
	}
	else
	{
		state = 'block';
	}
	if (document.all)
	{ //IS IE 4 or 5 (or 6 beta)
		eval( "document.all." + layer_ref + ".style.display = state");
	}
	if (document.layers)
	{ //IS NETSCAPE 4 or below
		document.layers[layer_ref].display = state;
	}
	if (document.getElementById &&!document.all)
	{
		hza = document.getElementById(layer_ref);
		hza.style.display = state;
	}
}

function validCCfr()
{
	if (document.ff.copie.value == "oui")
	{
		if (document.ff.courriel.value == "")
		{
			alert("Pour vous envoyer une copie de ce courriel, le champs Courriel est obligatoire.");
			document.ff.courriel.focus();
		}
		else if(document.ff.codepostal.value == "")
		{
			alert("Le champs code postal est obligatoire.");
			document.ff.codepostal.focus();
		}
		else if (document.ff.courriel.value.indexOf ('@',0) == -1 || document.ff.courriel.value.indexOf ('.',0) == -1)
		{
			alert ("Pour vous envoyer une copie de ce courriel, une adresse de courriel valide est obligatoire.")
			document.ff.courriel.focus()
		}
		else
		{
			document.ff.submit();
		}
	}
	else
	{
		document.ff.submit();
	}
}

function validCCen()
{
	if (document.ff.copie.value == "oui")
	{
		if (document.ff.courriel.value == "")
		{
			alert("If you want to receive a copy of this mail, please enter your email address.");
			document.ff.courriel.focus();
		}
		else if(document.ff.codepostal.value == "")
		{
			alert("The postal code is mandatory.");
			document.ff.codepostal.focus();
		}
		else if (document.ff.courriel.value.indexOf ('@',0) == -1 || document.ff.courriel.value.indexOf ('.',0) == -1)
		{
			alert ("If you want to receive a copy of this mail, please enter a valid email address.")
			document.ff.courriel.focus()
		}
		else
		{
			document.ff.submit();
		}
	}
	else
	{
		document.ff.submit();
	}
}

function fermeRedict(url)
{
	opener.window.location= url;
	window.close();
}

function seturl(url)
{
  window.location=url;
}

function redirect_close(url)
{
  opener.window.seturl(url);
  window.close();
}

//-------------------------------------------------------------------------------------------
// Affiche un popup au centre de la page

function popup(url, name, popw, poph, parm)
{
  var w = screen.width;
  var h = screen.height;

  if (popw == undefined)
  {    
  	popw=640;
  }

  if (poph == undefined)
  {    
  	poph=480;
  }

  var l = (w-popw)/2, t = (h-poph)/2;

  if (name == undefined) 
  {    
  	name="";
  }

  if (parm == undefined) 
  {
  	var w = window.open(url, name, "left="+l+",top="+t+",width="+popw+"+,height="+poph+",fullscreen=no,scrollbars=yes,resizable=yes");
  }
  else
  {
  	var w = window.open(url, name, "left="+l+",top="+t+",width="+popw+"+,height="+poph+","+parm);
  }
}