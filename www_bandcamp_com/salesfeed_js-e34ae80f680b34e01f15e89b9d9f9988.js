function SalesfeedReader(){const e=this;e.initial=!0,e.interval=32e3,e.dataDelay=120,e.start=0,e.itemQueue={utc_date_max:0,items:[]};const t="https://bandcamp.com/api/salesfeed/1/get";e.fetch=function(){const a=e.start;let n=a?t+"?start_date="+a:t;e.initial&&(n="https://bandcamp.com/api/salesfeed/1/get_initial",e.initial=!1),fetch(n).then((function(t){200===t.status?t.json().then((function(t){const a=t.feed_data||t;window.salesfeed_debug&&console.log("fetch",a.end_date,a.events&&a.events.map((function(e){return~~e.utc_date}))),e.enqueue(a)})):window.salesfeed_debug&&console.log("problem fetching salesfeed data. status: "+t.status)}))},e.enqueue=function(t){if(!t.end_date||!t.events||t.end_date<=e.start)return;t.data_delay_sec&&(e.dataDelay=t.data_delay_sec);const a=e.itemQueue.utc_date_max;t.events.forEach((function(t){"sale"==t.event_type&&t.items.forEach((function(t){t.utc_date>a&&(t.art_id||t.package_image_id)&&(e.itemQueue.items.push(t),e.itemQueue.utc_date_max=t.utc_date,e.preload(t))}))})),e.start=t.end_date},e.dequeue=function(t){const a=[],n=e.server_now();for(;(!t||a.length<t)&&0!=e.itemQueue.items.length;){if(!t){if(new Date(1e3*(e.itemQueue.items[0].utc_date+e.dataDelay))>n)break}a.push(e.itemQueue.items.shift())}return a},e.server_now=function(){return new Date(Date.now()+(e.serverDelay||0))},e.nextItemDelay=function(){const t=e.itemQueue.items[0];let a;if(t){a=new Date(1e3*(t.utc_date+e.dataDelay)).valueOf()-e.server_now().valueOf(),a<0&&(a=1e3)}else a=1e3;return a},e.init=function(t,a){e.preload=a,t&&(e.serverDelay=1e3*t.server_time-(new Date).valueOf(),e.enqueue(t)),e.fetch(),e.fetcher=setInterval(e.fetch,e.interval)}}function Salesfeed(){const e=this;e.feedReader=new SalesfeedReader,e.paused=!1,e.showHumourTimer=null,e.debugClass=!1;e.pause=function(t){if(e.paused=!e.paused,e.paused)e.salesfeedHeading.classList.add("paused"),e.trim(!1),e.showHumourTimer=setTimeout((function(){e.salesfeedHeading.classList.add("humour")}),3500);else{if(e.salesfeedHeading.classList.remove("paused"),e.salesfeedHeading.classList.contains("humour")){e.salesfeedHeading.querySelector(".sassy-quip").classList.toggle("alt")}e.salesfeedHeading.classList.remove("humour"),e.showHumourTimer&&(clearTimeout(e.showHumourTimer),e.showHumourTimer=null)}},e.feed_now=function(){return~~(new Date/1e3)-e.feedReader.dataDelay};const t="https://f4.bcbits.com";function a(e,a){return t+"/img/a"+e+"_"+a+".jpg"}e.coverURL=function(n){return e.artFormat&&n.art_id?a(n.art_id,e.artFormat):e.packageFormat&&n.package_image_id?function(e,a){const n=("000000000"+e).slice(-10);return t+"/img/"+n+"_"+a+".jpg"}(n.package_image_id,e.packageFormat):window.innerWidth>=1200&&n.art_id&&devicePixelRatio>1.5?a(n.art_id,9):n.art_url},e.makeItem=function(t){const a=e.itemTemplate.content.cloneNode(!0),n="b"==t.item_type,s=n?TM("Full Discography","pre"):t.item_description,r=a.querySelector("li");if(a.querySelector("li > a").href="https:"+t.url,n){r.classList.add("bundle");const e=a.querySelector(".bundle-badge"),n=t.releases;e.innerHTML="<div class='count'>"+n+"</div>"+TM("releases","pre")}const i=a.querySelector(".item-img img");i.src=e.coverURL(t),i.alt=s;a.querySelector("h5 cite").innerHTML=s;a.querySelector(".item-artist").innerHTML=TM("by {{artist_name}}","pre",{artist_name:t.artist_name});a.querySelector(".item-price strong").innerHTML=TM("Sold for {{amount}}","pre",{amount:t.amount_paid_fmt});const o=a.querySelector(".item-over strong");t.amount_over_fmt&&(o.innerHTML=TM("{{amount_paid_more}} more than the min","pre",{amount_paid_more:t.amount_over_fmt}));const d=a.querySelector(".item-loc"),l=t.country_code,u=window.Country&&Country.name(l)||t.country;d.innerHTML=TM("in {{country_abbreviation}}","pre",{country_abbreviation:"<span class='flag-icon flag-"+l+"'></span> "+u});return a.querySelector("time").dataset.utc=~~t.utc_date,e.debugClass&&r.classList.add(e.debugClass),a},e.insert=function(t){t.forEach((function(t){const a=t.cloneNode(!0);e.slider1.insertBefore(t,e.slider1.firstChild),e.slider2.insertBefore(a,e.slider2.firstChild)}))},e.adjust=function(){const t=e.element.querySelectorAll(".item time"),a=e.feed_now();t.forEach((function(e){const t=a-parseInt(e.dataset.utc);e.innerHTML=t<2?TM("1 second ago","pre"):TM("{{seconds}} seconds ago","pre",{seconds:t.toString()})}))},e.add=function(t){const a=t.map((function(t){return e.makeItem(t)})).filter(Boolean);e.insert(a),e.trim()},e.trim=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=parseInt(getComputedStyle(e.element).getPropertyValue("--max-items-per-row"));t&&(a*=2),[e.slider1,e.slider2].forEach((function(e){for(;e.children.length>a;)e.removeChild(e.lastChild)}))},e.render=function(){if(e.renderer=null,!e.paused){const t=e.feedReader.dequeue();t.length&&(e.add(t),e.adjust())}e.renderer=setTimeout(e.render,e.feedReader.nextItemDelay())},e.init=function(){e.element=document.querySelector("#sales-feed .salesfeed"),e.slider1=e.element.querySelector(".feedrow .slider"),e.slider2=e.element.querySelector(".feedrow:nth-child(2) .slider"),e.itemTemplate=document.getElementById("salesfeed-item"),e.salesfeedHeading=document.querySelector("#sales-feed > div.salesfeed-messages");const t=document.querySelector("#sales-feed"),a=t&&t.dataset.initialFeed&&JSON.parse(t.dataset.initialFeed);if(e.artFormat=t.dataset.artFormat,e.packageFormat=t.dataset.packageFormat,1==Math.floor(2*Math.random())){e.salesfeedHeading.querySelector(".sassy-quip").classList.toggle("alt")}window.addEventListener("resize",(function(t){e.element.querySelectorAll(".salesfeed li.item").forEach((function(e){e.style.animation="none"}))})),e.element.addEventListener("mouseenter",e.pause),e.element.addEventListener("mouseleave",e.pause),e.feedReader.init(a,e.preload),e.render(),document.addEventListener("keypress",(function(t){if(window.salesfeed_debug)if(" "==t.key)e.pause(),t.preventDefault();else if(t.key>="1"&&t.key<="9"){const a=parseInt(t.key);console.log("adding:",a),e.add(e.feedReader.dequeue(a)),t.preventDefault()}else if("s"==t.key){e.debugClass?e.debugClass=!1:e.debugClass="slow";document.querySelectorAll("li.item").forEach((e=>e.classList.toggle("slow"))),console.log("slow mode:",e.debugClass),t.preventDefault()}})),setInterval(e.adjust,1e3)},e.preload=function(t){(new Image).src=e.coverURL(t)}}window.salesfeed_debug=!1,document.addEventListener("DOMContentLoaded",(function(){window.salesfeed=new Salesfeed,window.salesfeed.init()}));