function VideoUnderlay(e){var t=this;t.scrolling=!1,t.underlayVideo=e;t.scroll=function(){t.scrolling||(t.scrolling=!0,setTimeout(t.scrolled,1e3))};t.scrolled=function(){t.scrolling=!1,window.scrollY>1e3&&t.underlayVideo.paused&&t.underlayVideo.play()},t.prevY=0,t.checkInactive=function(){t.underlayVideo.paused||"visible"==document.visibilityState||t.underlayVideo.pause()},t.init=function(){window.scrollY>1e3&&t.underlayVideo.paused&&t.underlayVideo.play(),setInterval(t.checkInactive,3e5),document.addEventListener("scroll",t.scroll)}}function MoreFeatures(e){var t=this;t.moreFeatures=e,t.toggleExpanded=function(e){this.classList.toggle("expanded")},t.init=function(){t.moreFeatures.querySelectorAll("ul.corp-text li").forEach((function(e){e.addEventListener("click",t.toggleExpanded)}))}}var Ident=function(){var e=document.currentScript.dataset.userId;return e?{userId:e}:{}}();document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("click",(function(e){"A"===e.target.tagName&&e.target.hasAttribute("aria-disabled")&&"true"==e.target.getAttribute("aria-disabled")&&e.preventDefault()}));var e=document.querySelector("#menubar-signup");if(e){var t=document.querySelector("body > header");t.classList.contains("artists")?e.href="/signup":t.classList.contains("labels")&&(e.href="/label_signup")}}));var DebugOptions={enableExperiments:function(){var e=window.location.href&&new URL(window.location.href),t=document.querySelector("body");e&&e.searchParams.has("default_font_smoothing")&&t.classList.add("experiment-font-smoothing")},getURLParamOrUseDefault:function(e,t){var a=t,r=window.location.href&&new URL(window.location.href);return r&&r.searchParams.has(e)&&(a=parseInt(r.searchParams.get(e))),a}},CarouselData=JSON.parse(document.currentScript.dataset.artistsCarousel),Carousel=function(e,t){var a=this;a.carouselEl=e,a.cycleInterval=t;var r="https://f4.bcbits.com";function l(e,t){return r+"/img/a"+e+"_"+t+".jpg"}a.imgBase=null;var n="/static/0.gif";a.makeLabelBio=function(e,t){var l=document.createElement("li");l.className="label-bio";var s=document.createElement("a");s.target="_blank",s.href="https://"+e.subdomain+".bandcamp.com";var i,o,c,u=document.createElement("img"),d=(i=e.img,o=23,c=("000000000"+i).slice(-10),r+"/img/"+c+"_"+o+".jpg");t?(u.src=a.imgBase+n,u.dataset.src=d,u.dataset.lazy="true"):u.src=d,u.alt=e.name,s.appendChild(u);var m=document.createElement("h5");m.textContent=e.name,s.appendChild(m);var f=document.createElement("p");return f.textContent=e.loc,s.appendChild(f),l.appendChild(s),l};var s=[{format:8,width:124},{format:7,width:150},{format:9,width:210},{format:14,width:368}];a.makeLabelRelease=function(e,t){var r=document.createElement("li");r.className="label-release";var i=document.createElement("a");i.target="_blank",i.href=e.url;var o=document.createElement("img"),c=l(e.art,9),u="(min-width: 741px) 10vw, 18.5vw",d=[];s.forEach((function(t){var a=l(e.art,t.format);d.push(a+" "+t.width+"w")}));var m=d.join(", ");t?(o.src=a.imgBase+n,o.dataset.src=c,o.dataset.sizes=u,o.dataset.srcset=m,o.dataset.lazy="true"):(o.src=c,o.sizes=u,o.srcset=m),o.alt=e.title,i.appendChild(o);var f=document.createElement("h5"),p=document.createElement("cite");p.textContent=e.title,f.appendChild(p),i.appendChild(f);var v=document.createElement("p");return v.textContent=e.artist,i.appendChild(v),r.appendChild(i),r};var i=[{media:"(min-width: 741px)",ext:"avif",type:"image/avif"},{media:"(min-width: 741px)",ext:"webp",type:"image/webp"},{media:"(min-width: 741px)",ext:"jpg",type:"image/jpeg"},{suffix:"-mobile",ext:"webp",type:"image/webp"},{suffix:"-mobile",ext:"jpg",type:"image/jpeg"}];a.makeArtistSources=function(e){var t=[];return i.forEach((function(r){var l=document.createElement("source");l.srcset=a.imgBase+"/static/artistscarousel/"+e+(r.suffix?r.suffix:"")+"."+r.ext,l.type=r.type,r.media&&(l.media=r.media),t.push(l)})),t},a.addArtistSources=function(e){var t=e.dataset.subdomain,r=e.querySelector("img");a.makeArtistSources(t).forEach((function(t){e.insertBefore(t,r)})),r.src=a.imgBase+"/static/artistscarousel/"+t+".jpg"},a.buildArtistImage=function(e,t,r){var l=document.createElement("picture");l.dataset.subdomain=e;var s=document.createElement("img");(s.alt=t,r)?(l.dataset.lazy="true",s.src=a.imgBase+n):(a.makeArtistSources(e).forEach((function(e){l.appendChild(e)})),s.src=a.imgBase+"/static/artistscarousel/"+e+".jpg");return l.append(s),l};a.buildCarousel=function(e){var t=a.carouselEl.querySelector("ul.carousel-image-list"),r=!0,s=3;e.artists.forEach((function(e){var i=s<=0;s--;var o=document.createElement("li");r?(o.className="current carousel-artist",r=!1):o.className="carousel-artist",o.dataset.alt=e.name;var c=a.buildArtistImage(e.subdomain,e.name,i);o.appendChild(c);var u=document.createElement("a");u.className="inset light-on-dark",u.target="_blank",u.href="https://"+e.subdomain+".bandcamp.com"+e.url;var d=document.createElement("img");i?(d.dataset.lazy="true",d.dataset.src=l(e.art,14),d.src=a.imgBase+n):d.src=l(e.art,14),u.appendChild(d);var m=document.createElement("h5"),f=document.createElement("cite");f.textContent=e.title,m.appendChild(f),u.appendChild(m);var p=document.createElement("p");p.textContent=e.name,u.appendChild(p),o.appendChild(u),t.appendChild(o)})),e.labels.forEach((function(r){var l=document.createElement("li");l.className="carousel-label",l.dataset.alt=r.name;var n=document.createElement("ul");n.className="label-grid",n.appendChild(a.makeLabelBio(r,true)),e.label_artists[r.band_id].forEach((function(e){n.appendChild(a.makeLabelRelease(e,true))})),l.appendChild(n),t.appendChild(l)})),a.carouselEl.classList.add("current-artist"),a.startLazyLoader()};a.lazyLoadQueue=[],a.startLazyLoader=function(){a.carouselEl.querySelectorAll("picture[data-lazy='true']").forEach((function(e){a.lazyLoadQueue.push(e.parentElement)})),a.carouselEl.querySelectorAll("li.carousel-label").forEach((function(e){a.lazyLoadQueue.push(e)})),setTimeout(a.lazyLoadNext,2e3)},a.lazyLoadNext=function(){var e=a.lazyLoadQueue.shift();e&&(e.classList.contains("carousel-artist")?a.lazyLoadArtist(e):a.lazyLoadLabel(e),setTimeout(a.lazyLoadNext,1e3))},a.lazyLoadAll=function(){for(var e;e=a.lazyLoadQueue.shift();)e.classList.contains("carousel-artist")?a.lazyLoadArtist(e):a.lazyLoadLabel(e)},a.lazyLoadArtist=function(e){var t=e.querySelector("picture[data-lazy='true']");a.addArtistSources(t),e.querySelectorAll("img[data-lazy='true']").forEach((function(e){e.src=e.dataset.src,delete e.dataset.lazy})),delete t.dataset.lazy},a.lazyLoadLabel=function(e){e.querySelectorAll("img[data-lazy='true']").forEach((function(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset),e.dataset.sizes&&(e.sizes=e.dataset.sizes),e.src=e.dataset.src,delete e.dataset.lazy}))},a.toggleCycle=function(e){a.carouselEl.classList.toggle("no-cycle")},a.initTextLinks=function(){var e=a.carouselEl.querySelector("p.artist-list");e.querySelectorAll("a").forEach((function(e){e.addEventListener("mouseenter",a.linkMouseEnter),e.addEventListener("mouseleave",a.linkMouseExit)})),e.addEventListener("mouseenter",a.toggleCycle),e.addEventListener("mouseleave",a.toggleCycle),e.querySelectorAll("span.carousel-jump").forEach((function(e){var t=e.innerText.slice(0,-1);e.addEventListener("click",(function(){a.setArtistOrLabel("current-"+t),a.carouselJump()}))}))},a.setCurrentImage=function(e){a.carouselEl.querySelectorAll("ul.carousel-image-list > li").forEach((function(t){t.classList.contains("current")?(t.classList.remove("current"),t.classList.add("previous")):t.classList.remove("previous"),t.querySelector("img").attributes.alt.value==e&&t.classList.add("current")}))};a.switchTimeout=null,a.hoverWait=DebugOptions.getURLParamOrUseDefault("car_hover_delay",300),a.switch=function(e){a.carouselEl.querySelector("p.artist-list a.current").classList.remove("current"),e.classList.add("current");var t=e.textContent.replaceAll(",","");a.setCurrentImage(t)},a.linkMouseEnter=function(e){var t=e.target;a.switchTimeout&&clearTimeout(a.switchTimeout),a.switchTimeout=setTimeout((function(){a.switch(t),a.switchTimeout=null}),a.hoverWait)},a.linkMouseExit=function(e){a.switchTimeout&&clearTimeout(a.switchTimeout)},a.mouseMovingInImage=!1,a.cycle=function(){if(!a.carouselEl.classList.contains("no-cycle")&&(!a.mouseMovingInImage&&!JSON.parse(window.getComputedStyle(a.carouselEl).getPropertyValue("--mobile-view")))){var e=a.carouselEl.getBoundingClientRect(),t=window.innerHeight;if(!(e.y>.66*t||e.y+e.height<.33*t)){var r=a.carouselEl.querySelector("p.artist-list"),l=r.querySelector("a.current ~ a")||r.querySelector("a");a.switch(l)}}};a.mouseMoveTimeout=null,a.initCycle=function(){a.carouselEl.querySelector("ul.carousel-image-list").addEventListener("mousemove",(function(){a.mouseMovingInImage=!0,a.mouseMoveTimeout&&clearTimeout(a.mouseMoveTimeout),a.mouseMoveTimeout=setTimeout((function(){a.mouseMovingInImage=!1}),1e3)})),a.cycleTimer=setInterval(a.cycle,a.cycleInterval)},a.scrolling=!1;a.scroll=function(e){a.scrolling||(a.scrolling=!0,setTimeout((function(){a.scrolling=!1,a.scrolled()}),100))},a.artistOrLabel=function(e){return e.classList.contains("carousel-artist")?"current-artist":"current-label"},a.setArtistOrLabel=function(e){a.carouselEl.classList.contains(e)||(a.carouselEl.classList.toggle("current-artist"),a.carouselEl.classList.toggle("current-label"))},a.carouselJump=function(){var e=a.carouselEl.querySelector("ul.carousel-image-list");if(a.carouselEl.classList.contains("current-label")){var t=e.querySelector("li.carousel-label");t&&(e.scrollLeft=t.offsetLeft)}else e.scrollLeft=0};a.findCurrentItem=function(){for(var e=a.carouselEl.querySelector("ul.carousel-image-list"),t=e.scrollLeft-2,r=e.children.length,l=0;l<r;l++){var n=e.children[l];if(n.offsetLeft>=t)return n}return e.children[r-1]},a.nextItem=function(e){a.lazyLoadAll();var t=a.carouselEl.querySelector("ul.carousel-image-list"),r=a.findCurrentItem().nextElementSibling;r&&(t.scrollLeft=r.offsetLeft)},a.prevItem=function(e){a.lazyLoadAll();var t=a.carouselEl.querySelector("ul.carousel-image-list"),r=a.findCurrentItem().previousElementSibling;r&&(t.scrollLeft=r.offsetLeft)},a.scrolled=function(){var e=a.carouselEl.querySelector("ul.carousel-image-list"),t=e.scrollLeft-2;a.lazyLoadAll();for(var r=null,l=!1,n=!1,s=null,i=e.children.length,o=0;o<i;o++){let c=e.children[o];if(c.offsetLeft>=t){r=c.dataset.alt,0==o&&(l=!0),o==i-1&&(n=!0),s=a.artistOrLabel(c);break}}if(!r){let t=e.children[i-1];r=t.dataset.alt,n=!0,s=a.artistOrLabel(t)}var c=a.carouselEl.querySelector("p.mobile-controls");l?(c.classList.add("first"),c.classList.remove("last")):n?(c.classList.remove("first"),c.classList.add("last")):(c.classList.remove("first"),c.classList.remove("last"));var u=a.carouselEl.querySelector("p.mobile-controls .current-name");u.textContent!=r&&(u.textContent=r),a.setArtistOrLabel(s)},a.initScroll=function(){a.carouselEl.querySelector("ul.carousel-image-list").addEventListener("scroll",a.scroll),a.carouselEl.querySelector("p.mobile-controls .forwards").addEventListener("mousedown",a.nextItem),a.carouselEl.querySelector("p.mobile-controls .backwards").addEventListener("mousedown",a.prevItem)},a.bindLearnMoreListener=function(){var e,t=document.querySelector("#learnmore"),a=document.querySelector("#fans-bought"),r=window.scrollY,l=window.scrollX,n=a.offsetTop,s=function(){var t=(new Date).getTime(),a=t-(e||t);e=t,r>n&&(r-=r-n),window.scrollTo(l,r),r<n&&(r+=3*a,requestAnimationFrame(s))};t.addEventListener("click",(function(){r=window.scrollY,requestAnimationFrame(s),e=!1}))},a.init=function(){var e=document.querySelector("main");a.imgBase=e.dataset.imgBase,a.buildCarousel(CarouselData),a.initTextLinks(),a.initCycle(),a.initScroll(),a.bindLearnMoreListener(),a.carouselEl.addEventListener("mouseenter",a.lazyLoadAll)}},CAROUSEL_CYCLE_INTERVAL=3e3;document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("artist-carousel"),t=DebugOptions.getURLParamOrUseDefault("car_cycle",CAROUSEL_CYCLE_INTERVAL),a=new Carousel(e,t);a.init(),window.carousel=a,new VideoUnderlay(document.getElementById("artist-footer").querySelector("video")).init(),new MoreFeatures(document.getElementById("more-features")).init(),DebugOptions.enableExperiments()}));