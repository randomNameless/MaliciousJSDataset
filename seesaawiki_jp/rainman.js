// rainman is nice movie, you should watch it.
if(!Rainman){
    var Rainman = function(path,id,img_url,category_id,subcategory_id){
        this.path = path;
        this.id   = id;
        this.img_url = img_url;
        this.category_id = category_id;
        this.subcategory_id = subcategory_id;
    };
    Rainman.prototype = {
        customCount : function(custom_id) {
            var ukey = "rainman_u"; // using apache mod_usertrac to set this cookie>_<
            var w = window;
            if (w.self != w.parent) return;

            var r = this.getR();
            var revisit = this.isRevisit();
            
            var ftime = this.isFirstVisit();
            var vInterval;
            var t = this;
            if (!ftime && !revisit) {
                t.setInterval(0); // first time comer
            } else if ( ftime && !revisit ) {
                vInterval = t.resetInterval(); // regular user
            } else if ( ftime && revisit ) {
                vInterval = t.getInterval(); // visiting many times within one day
            }
            if (!vInterval) vInterval = 0;

            this.setLastVisit();

            var visitCount = this.getVisitCount();

            var rainman_url = this.img_url + '?';
            rainman_url += 'u_id=' + this.id ;
            rainman_url += '&sid=' + this.getCookie( ukey );
            rainman_url += '&revisit=' + revisit;
            rainman_url += '&target=custom';
            rainman_url += '&custom_id=' + custom_id;
            rainman_url += '&no_cache=' + (Math.floor(Math.random() * 1000000));
            rainman_url += '&vinterval=' + vInterval;
            rainman_url += '&vcount=' + visitCount;
            rainman_url += '&cid=' + this.category_id;
            rainman_url += '&scid=' + this.subcategory_id;
            rainman_url += '&r=' +  encodeURIComponent(r) ;
            document.writeln("<img src=" + '"' + rainman_url + '" />' );

        },
        articleCount : function(article_id){
            var ukey = "rainman_u"; // using apache mod_usertrac to set this cookie>_<
            var w = window;
            if (w.self != w.parent) return;

            var r = this.getR();
            var revisit = this.isRevisit();

            var ftime = this.isFirstVisit();
            var vInterval;
            var t = this;
            if (!ftime && !revisit) {
                t.setInterval(0); // first time comer
            } else if ( ftime && !revisit ) {
                vInterval = t.resetInterval(); // regular user
            } else if ( ftime && revisit ) {
                vInterval = t.getInterval(); // visiting many times within one day
            }
            if (!vInterval) vInterval = 0;

            this.setLastVisit();
            
            var visitCount = this.getVisitCount();

            var rainman_url = this.img_url + '?';
            rainman_url += 'u_id=' + this.id ;
            rainman_url += '&sid=' + this.getCookie( ukey );
            rainman_url += '&revisit=' + revisit;
            rainman_url += '&target=doc';
            rainman_url += '&article_id=' + article_id;
            rainman_url += '&cid=' + this.category_id;
            rainman_url += '&scid=' + this.subcategory_id;
            rainman_url += '&no_cache=' + (Math.floor(Math.random() * 1000000));
            rainman_url += '&vinterval=' + vInterval;
            rainman_url += '&vcount=' + visitCount;
            rainman_url += '&r=' +  encodeURIComponent(r) ;
            document.writeln("<img src=" + '"' + rainman_url + '" />' );
        },
        isRevisit : function(){
            var vkey = "rainman_v";
            var revisit = this.getCookie(vkey) ? 1:0;
            if ( revisit > 0 ) return revisit; // already visited this day

            // first visit of the day
            this.setCookie('rainman_vc', 0, this.getFutureTimeByDays(365)); // reset visit count for daily report

            var dt = new Date();
            var now = dt.getTime();
            dt.setDate( dt.getDate() + 1 ); dt.setSeconds(0); dt.setMinutes(0); dt.setHours(0); // tommorrow 0:00
            var timeOffsetFromJP = -540 - dt.getTimezoneOffset();
            dt.setMinutes( dt.getMinutes() + timeOffsetFromJP ); // fix YYYY/MM/DD 00:00 JST each PC's local timezone
            if ( dt.getTime() < now ) { dt.setDate( dt.getDate() + 1 ) }; // when date is already past because of date line
 
            this.setCookie(vkey, 1, dt);

            return revisit;
        },
        isFirstVisit : function() {
            var fkey = "rainman_f";
            var ftime = this.getCookie(fkey);

            if (ftime) return ftime; 

            var dt = new Date();
            this.setCookie(fkey, dt.getTime(), this.getFutureTimeByDays(365));
            return 0;
        },
        resetInterval : function() {
            var lastVisitTime = this.getCookie("rainman_lv");
            var dt = new Date();
            var now = dt.getTime();

            if ( lastVisitTime == null ) lastVisitTime = now;

            var interval = now - lastVisitTime;
            var intervalDays = Math.ceil( interval / 1000 / 60 / 60 / 24 );
            this.setInterval(intervalDays);
            return intervalDays;
        },
        setInterval : function(interval) {
            this.setCookie("rainman_i", interval, this.getFutureTimeByDays(365));
        },
        setLastVisit : function() {
            var dt = new Date();
            this.setCookie("rainman_lv", dt.getTime(), this.getFutureTimeByDays(365)); // lv stands for last visit. use this when computing interval
        },
        getFutureTimeByDays : function(days) {
            var dt = new Date();
            dt.setTime(dt.getTime() + 1000 * 60 * 60 * 24 * days);
            return dt;
        },
        getInterval : function() {
            var interval = this.getCookie("rainman_i");
            if (!interval) interval = 0;
            return interval;
        },
        getVisitCount : function() {
            var ckey = "rainman_vc";
            var count = this.getCookie(ckey);
            var newCount = count ? parseInt(count) + 1 : 1 ;
            this.setCookie(ckey, newCount, this.getFutureTimeByDays(365));
            return newCount;
        },
        getR : function(){
            var d = document; 
            var r = d.referrer;
            if(d.parent && d.parent != undefined) r = d.parent.referrer;
            if(r.match(/^(undefined|unknown|bookmark)$/i)) r = "";
            return r;
        },
        getCookie : function(key) {
            var value = document.cookie.match(new RegExp("(?:^|;) *" + key + "=([^;]*)"));
            return (value ? value[1] : null);
        },
        setCookie : function(key, value, expires) {
            if (this.path === '/') {
                document.cookie = key + "=" + value + "; expires=" + expires.toGMTString() + "; path=/;";
            }else{
                document.cookie = key + "=" + value + "; expires=" + expires.toGMTString() + "; path=/" + this.path + "/;";
            }
        },
        adClick : function(template, adType, div) {
            var adPos;
            var name = div.split("-");
            
            adPos = (template == 1) ? this.legacyAdPos( name[3] ) : this.secondAdPos( name[2] );
            if (!adPos) return;

            var rainman_url = this.img_url + '?target=ads&u_id=' + this.id + '&ad_type=' + adType + '&ad_pos=' + adPos;
            var img = document.createElement('img');
            img.setAttribute('src', rainman_url);
            img.style.height = '1px';
            img.style.width = '1px';
            document.getElementsByTagName('body')[0].appendChild(img);
        },
        legacyAdPos : function( name ) {
            var pos = (name == "top") ? 1 : 2 ;
            return pos;
        },
        secondAdPos : function( name ) {
            var pos;
            //if ( name == "top" ) {
            if ( name == "top2" ) {
                pos = 11;
            } else if ( name == "inner" ) {
                pos = 12;
            } else if ( name == "bottom") {
                pos = 13;
            } else if ( name == "extra" ) {
                pos = 14;
            }
            return pos;
        }
    };
}
