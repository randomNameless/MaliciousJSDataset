var ip2LocationServiceCallInProgress=false;set_location_cookie=function(){var $=jQuery,cookieValue='',domainName=document.location.hostname,dt=new Date(),expDate=new Date(dt.getTime()+1000*60*60*24*30);var defer=$.Deferred();if(typeof geoip2!=='undefined'){if(!ip2LocationServiceCallInProgress){ip2LocationServiceCallInProgress=true;geoip2.city(function(data){var ipAddress=latitude=longitude=cityName=stateName=countryCode=countryName=stateCode=postal="";if(data!=undefined){ipAddress=data.traits.ip_address;longitude=data.location.longitude;latitude=data.location.latitude;cityName=data.city.names.en;stateName=data.subdivisions[0].names.en;stateCode=data.subdivisions[0].iso_code||'';countryCode=data.country.iso_code;countryName=data.country.names.en;postal=data.postal.code;}
cookieValue=format_Cookie(ipAddress,latitude,longitude,cityName,stateName,countryCode,countryName,stateCode,postal);if(cookieValue.length>0){CWS.cookies.setItem('loc',cookieValue,expDate.toGMTString(),"/",domainName);CWS.location.set(cookieValue);var ev={type:"maxmindLocation",loc:cookieValue};$(document).trigger(ev);$('body').trigger(ev);}
ip2LocationServiceCallInProgress=false;defer.resolve();},function(error){if(error&&error.code){if(error.code=='DOMAIN_REGISTRATION_REQUIRED'){CWS.log('This is not registered for IP detection.');}
else{CWS.log(error);}}
defer.resolve();});}}
else{CWS.log('GeoIP2 could not be loaded. Possibly blocked.');defer.reject();}
return defer.promise();};read_location_cookie=function(){var cookie=null;cookie=CWS.cookies.getItem('loc');return cookie;};var get_location_cookie_value=function(propertyName){var propertyValue="";var cookie=read_location_cookie();if(cookie&&cookie.length>0){var propertyValues=cookie.split('|');switch(propertyName.toLowerCase()){case'ipaddress':{propertyValue=propertyValues[0];break;}
case'latitude':{propertyValue=propertyValues[1];break;}
case'longitude':{propertyValue=propertyValues[2];break;}
case'cityname':{propertyValue=propertyValues[3];break;}
case'statename':{propertyValue=propertyValues[4];break;}
case'countrycode':{propertyValue=propertyValues[5];break;}
case'countryname':{propertyValue=propertyValues[6];break;}
case'statecode':{propertyValue=propertyValues.length>7?propertyValues[7]:'';break;}
case'postal':{propertyValue=propertyValues.length>8?propertyValues[8]:'';break;}}}
return propertyValue;};var isset_location_cookie=function(){var retVal=false,cookie=null;cookie=read_location_cookie();retVal=cookie!=null&&cookie!=="";if(retVal){if(cookie.indexOf("|")==-1){retVal=null;}}
return retVal;};var format_Cookie=function(ipAddress,latitude,longitude,cityName,stateName,countryCode,countryName,stateCode,postal){return ipAddress+"|"+latitude+"|"+longitude+"|"+cityName+"|"+stateName+"|"+countryCode+"|"+countryName+"|"+stateCode+"|"+postal;};;var CWS=CWS||{};CWS.locations=CWS.locations||{};CWS.locations.places=(function($){var cookies={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,n,o,t,c,r){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(o)switch(o.constructor){case Number:s=o===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+o;break;case String:s="; expires="+o;break;case Date:s="; expires="+o.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+s+(c?"; domain="+c:"")+(t?"; path="+t:"")+(r?"; secure":""),!0},removeItem:function(e,n,o){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:"")+(n?"; path="+n:""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=e.length,o=0;o<n;o++)e[o]=decodeURIComponent(e[o]);return e}};var session_id;var autocomplete_service;var geocode_service;var suggestions=[];var retrieving_data=false;var statewide_whitelist={'US':true,'CA':true};var clear_all=function(){$('#cws_quickjobsearch_latitude,#cws_quickjobsearch_longitude,#cws_quickjobsearch_country,#cws_quickjobsearch_state').val('');$('#cws_quickjobsearch_nationwide,#cws_quickjobsearch_statewide').val('');$('#cws_jobsearch_latitude').val('');$('#cws_jobsearch_longitude').val('');$('#cws_jobsearch_country').val('');$('#cws_jobsearch_state').val('');$('#cws_jobsearch_nationwide_country, #cws_jobsearch_statewide_state').val('');$('#cws_jobsearch_location').attr('aria-invalid','false').parent().removeClass('error');$('.location-wrapper .error-msg').remove();$('#cws_jobsearch__proximity').removeAttr('disabled');$('.location-wrapper.with_geo .geolocation-icon').show().parent().addClass('with_geo');};var initialize=function(el){autocomplete_service=new google.maps.places.AutocompleteService();geocode_service=new google.maps.Geocoder;statewide_whitelist=CWS.apply_filter('statewide_whitelist',statewide_whitelist);var target=typeof el==='undefined'?'.loc_auto':el;$(target).each(function(){var config=cws_opts.location_suggest_config;var el=$(this);el.keydown(function(e){$('.location_error').hide();if((e.keyCode===13||e.keyCode===9)){if($('.google-custom-autocomplete').length>0&&$('.google-custom-autocomplete').css('display')!=='none'){e.preventDefault();e.stopPropagation();$('.google-custom-autocomplete li:first').click();return false;}
else if($('#cws_jobsearch_latitude').val()===''&&!retrieving_data){clear_all();if(CWS.jobs){CWS.jobs.gather();}}}
else{clear_all();}});el.on('blur',function(e){if($(this).val()!==''&&!retrieving_data){var lat=$('#cws_jobsearch_latitude').val();if((lat===''||lat==='-1')&&$('#cws_jobsearch_country').val()===''){clear_all();if(CWS.jobs){CWS.jobs.gather();}}}});config.source=function(request,response){var result_types=cws_opts.google_place_search_type;result_types=typeof result_types==='string'?[result_types]:result_types;var zip_code=/^[0-9-]{5}\s*?$/;var address=/^\d{1,4}\s*^$/;var address2=/^[0-9-]{1,10}\s*^$/;if(request.term.match(zip_code)){result_types=['(regions)'];}
else if(request.term.match(address)){result_types=['address'];}
else if(request.term.match(address2)){result_types=['address'];}
var options={input:request.term,types:result_types};if(CWS.cookies.getItem('loc')&&typeof get_location_cookie_value==='function'){var latitude=parseFloat(get_location_cookie_value('latitude'));var longitude=parseFloat(get_location_cookie_value('longitude'));if(!isNaN(latitude)&&!isNaN(longitude)){options['location']=new google.maps.LatLng(latitude,longitude);options['radius']=100;}}
options=CWS.apply_filter('places_request_options',options);autocomplete_service.getPlacePredictions(options,function(results,status){if(status==='OK'){suggestions=results;response(results);}});};config.focus=function(event,ui){el.val(ui.item.description);return false;};config.select=function(event,ui){el.val(ui.item.description);$('.location_error').hide();var event_data={type:'custom_places_selected',location:ui.item};el.trigger('custom_places_selected',event_data);retrieving_data=true;geocode_service.geocode({'placeId':ui.item.place_id},function(results,status){retrieving_data=false;$('#cws_jobsearch_latitude').val('');$('#cws_jobsearch_longitude').val('');$('#cws_jobsearch_country').val('');$('#cws_jobsearch_state').val('');$('#cws-search-sortfield,#cws-search-direction').val('');if(status==='OK'&&results.length>0){var place=results[0];$('.location-wrapper.with_geo .geolocation-icon').show().parent().removeClass('with_geo');if(place.address_components[0]['types'][0]==='country'){jQuery('#cws_quickjobsearch_country,#cws_jobsearch_country').val(place.address_components[0]['short_name']);}
else if(place.address_components[0]['types'][0]==='administrative_area_level_1'&&place.address_components[1]['short_name']in statewide_whitelist){jQuery('#cws_quickjobsearch_state,#cws_jobsearch_state').val(place.address_components[0]['short_name']);if(place.address_components[1]['types'][0]==='country'){jQuery('#cws_quickjobsearch_country,#cws_jobsearch_country').val(place.address_components[1]['short_name']);}}
else{jQuery('#cws_quickjobsearch_latitude,#cws_jobsearch_latitude').val(place.geometry.location.lat());jQuery('#cws_quickjobsearch_longitude,#cws_jobsearch_longitude').val(place.geometry.location.lng());}
var state_country=CWS.get_state_country(place.address_components);if(state_country.country){jQuery('#cws_quickjobsearch_nationwide').val(state_country.country);}
if(state_country.state){jQuery('#cws_quickjobsearch_statewide').val(state_country.state);}
CWS.last_place=place;var event_data={type:'custom_places_details',place:place,status:status};el.trigger('custom_places_details',event_data);}
$('#cws_jobsearch_commute').val($('#cws_jobsearch_location').val());if(CWS.jobs&&$('#widget-jobsearch-results-pages').length&&el.attr('id').indexOf('quick')===-1){CWS.jobs.goto_page(0);}});return false;};var render_suggestions=function(ul,item){var highlighted=item.structured_formatting.main_text.split('');var start=item.structured_formatting.main_text_matched_substrings[0].offset;var end=item.structured_formatting.main_text_matched_substrings[0].length+start-1;highlighted[start]='<span class="highlighted">'+highlighted[start];highlighted[end]=highlighted[end]+'</span>';highlighted=highlighted.join('');if(item.structured_formatting.secondary_text){highlighted+=' <span class="here-vicinity">'+item.structured_formatting.secondary_text+'</span>';}
highlighted=CWS.apply_filter('google_places_suggestion_html',highlighted,item);var w=el.outerWidth()-21;ul.addClass('here-autocomplete');ul.addClass('google-custom-autocomplete');return $('<li>').append('<div class="here-suggestion" style="width: '+w+'px;">'+highlighted+'</div>').appendTo(ul);};$(this).autocomplete(config).autocomplete('instance')._renderItem=render_suggestions;$('.location-wrapper.with_geo .geolocation-icon').show().parent().addClass('with_geo');});};return{init:initialize}})(jQuery);