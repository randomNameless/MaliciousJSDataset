/*Javascript document*/
function vpv(url, openPg)
{
 ga('send', 'pageview', url);
 if(openPg!=false)
 {
   window.open(url);
 }
 return true;
}
