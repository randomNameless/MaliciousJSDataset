(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._castAndCrewItems={root:function(e,t,o,a,r){var n="";try{o=o.push();var s=a.contextOrFrameLookup(t,o,"people");if(s)for(var p=(s=a.fromIterator(s)).length,i=0;i<s.length;i++){var c=s[i];o.set("person",c),o.set("loop.index",i+1),o.set("loop.index0",i),o.set("loop.revindex",p-i),o.set("loop.revindex0",p-i-1),o.set("loop.first",0===i),o.set("loop.last",i===p-1),o.set("loop.length",p),n=(n=(n=(n=(n=(n=(n=(n+='\n    <a href="')+a.suppressValue(a.memberLookup(c,"celebrityUrl"),e.opts.autoescape)+'" data-qa="person-item">\n        <tile-dynamic skeleton="panel">\n            <rt-img \n                alt="')+a.suppressValue(a.memberLookup(c,"name"),e.opts.autoescape)+' thumbnail image" \n                aria-hidden="true"\n                loading="lazy" \n                slot="image" \n                src="')+a.suppressValue(a.memberLookup(c,"primaryImageUrl"),e.opts.autoescape)+'"\n            ></rt-img>\n            <div slot="insetText" aria-label="')+a.suppressValue(a.memberLookup(c,"name"),e.opts.autoescape)+", ")+a.suppressValue(a.memberLookup(c,"role"),e.opts.autoescape)+'">\n                <p class="name" data-qa="person-name">')+a.suppressValue(a.memberLookup(c,"name"),e.opts.autoescape)+'</p>\n                <p class="role" data-qa="person-role">')+a.suppressValue(a.memberLookup(c,"role"),e.opts.autoescape)+"</p>\n            </div>\n        </tile-dynamic>\n    </a>\n"}o=o.pop(),r(null,n)}catch(e){r(a.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._discoverySidebar={root:function(e,t,o,a,r){var n="";try{n+='<rt-text slot="title" context="label" size="1.25">What to Watch</rt-text>\n\n',o=o.push();var s=a.memberLookup(a.contextOrFrameLookup(t,o,"contentData"),"tabs");if(s)for(var p=(s=a.fromIterator(s)).length,i=0;i<s.length;i++){var c=s[i],u=(o.set("tab",c),o.set("loop.index",i+1),o.set("loop.index0",i),o.set("loop.revindex",p-i),o.set("loop.revindex0",p-i-1),o.set("loop.first",0===i),o.set("loop.last",i===p-1),o.set("loop.length",p),n=(n=(n=(n=(n=(n=(n=(n+='\n  <rt-tab \n    slot="tab"\n    aria-controls="panel-')+a.suppressValue(a.memberLookup(c,"domId"),e.opts.autoescape)+'"\n    aria-selected="false"\n    data-DiscoverySidebarManager="tab:click,keydown,focusin"\n    data-panel="')+a.suppressValue(a.memberLookup(c,"domId"),e.opts.autoescape)+'"\n    id="tab-')+a.suppressValue(a.memberLookup(c,"domId"),e.opts.autoescape)+'"\n    role="tab"\n    tabindex="-1"\n  >\n    <span>')+a.suppressValue(a.memberLookup(c,"title"),e.opts.autoescape)+'</span>\n  </rt-tab>\n\n  <div \n    slot="panel"\n    aria-labelledby="tab-')+a.suppressValue(a.memberLookup(c,"domId"),e.opts.autoescape)+'"\n    data-DiscoverySidebarManager="panel"\n    data-tab="')+a.suppressValue(a.memberLookup(c,"domId"),e.opts.autoescape)+'"\n    hidden\n    id="panel-')+a.suppressValue(a.memberLookup(c,"domId"),e.opts.autoescape)+'"\n    role="tabpanel"\n  >\n    ',o=o.push(),a.memberLookup(c,"lists"));if(u)for(var l=(u=a.fromIterator(u)).length,d=0;d<u.length;d++){var m=u[d],k=(o.set("list",m),o.set("loop.index",d+1),o.set("loop.index0",d),o.set("loop.revindex",l-d),o.set("loop.revindex0",l-d-1),o.set("loop.first",0===d),o.set("loop.last",d===l-1),o.set("loop.length",l),n=(n=(n=(n+='\n      <discovery-sidebar-list>\n        <rt-text slot="title" context="label" size="0.75">')+a.suppressValue(a.memberLookup(m,"title"),e.opts.autoescape)+'</rt-text>\n        <rt-link \n          slot="link" \n          href="')+a.suppressValue(a.memberLookup(m,"detailsUrl"),e.opts.autoescape)+'" \n          context="label"\n          size="0.75"\n          style="--textTransform: uppercase;"\n        >\n          View All <sr-text>')+a.suppressValue(a.memberLookup(m,"title"),e.opts.autoescape)+"</sr-text>\n        </rt-link>\n\n        ",o=o.push(),a.memberLookup(m,"items"));if(k)for(var x=(k=a.fromIterator(k)).length,b=0;b<k.length;b++){var L=k[b];o.set("item",L),o.set("loop.index",b+1),o.set("loop.index0",b),o.set("loop.revindex",x-b),o.set("loop.revindex0",x-b-1),o.set("loop.first",0===b),o.set("loop.last",b===x-1),o.set("loop.length",x),n=(n=(n=(n=(n=(n+='\n          <score-list-item href="')+a.suppressValue(a.memberLookup(L,"mediaUrl"),e.opts.autoescape)+'" slot="item">\n            <score-icon-critics \n              slot="icon" \n              sentiment="')+a.suppressValue(a.memberLookup(a.memberLookup(L,"tomatometerScore"),"scoreSentiment"),e.opts.autoescape)+'"\n              certified="')+a.suppressValue(a.memberLookup(a.memberLookup(L,"tomatometerScore"),"certified"),e.opts.autoescape)+'"\n            >\n            </score-icon-critics>\n            <rt-text slot="title" size="0.875">')+a.suppressValue(a.memberLookup(L,"title"),e.opts.autoescape)+'</rt-text>\n            <rt-text slot="score" context="label" size="0.75">')+a.suppressValue(a.memberLookup(a.memberLookup(L,"tomatometerScore"),"scorePercent"),e.opts.autoescape)+"</rt-text>\n          </score-list-item>\n        "}o=o.pop(),n+="\n      </discovery-sidebar-list>\n    "}o=o.pop(),n+="\n  </div>\n"}o=o.pop(),r(null,n)}catch(e){r(a.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._justWatchIFrame={root:function(e,t,o,a,r){var n="";try{r(null,(n+='<div\n  data-jw-widget\n  data-api-key="rrE3uT7QpRZXrB2Y5pkAAgaBaJlsYrOu"\n  data-object-type="')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"justWatchData"),"justWatchMediaType"),e.opts.autoescape)+'"\n  data-title="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"justWatchData"),"title"),e.opts.autoescape)+'"\n  data-year="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"justWatchData"),"releaseYear"),e.opts.autoescape)+'"\n  data-director="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"justWatchData"),"director"),e.opts.autoescape)+'"\n  data-season-number="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"justWatchData"),"seasonNumber"),e.opts.autoescape)+'"\n  data-no-offers-message="There is no offer for '+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"justWatchData"),"title"),e.opts.autoescape)+' at this time in your location."\n  data-title-not-found-message="There is no offer for '+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"justWatchData"),"title"),e.opts.autoescape)+' at this time in your location."\n  data-max-offers="10"\n></div>\n<affiliate-icon icon="just-watch" style="padding-left:20px; width:65px; height:10px;"></affiliate-icon>\n')}catch(e){r(a.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._mediaHeroVideos={root:function(e,t,o,a,r){var n="";try{n+='<carousel-slider\n    data-qa="videos-carousel"\n    data-VideosCarouselManager="carousel"\n    skeleton="panel"\n    tilewidth="240px"\n>\n    ',o=o.push();var s=a.memberLookup(a.contextOrFrameLookup(t,o,"videosCarousel"),"videos");if(s)for(var p=(s=a.fromIterator(s)).length,i=0;i<s.length;i++){var c=s[i];o.set("video",c),o.set("loop.index",i+1),o.set("loop.index0",i),o.set("loop.revindex",p-i),o.set("loop.revindex0",p-i-1),o.set("loop.first",0===i),o.set("loop.last",i===p-1),o.set("loop.length",p),n=(n=(n=(n=(n=(n=(n=(n=(n=(n+='\n        <tile-video\n            data-qa="video-item"\n            skeleton="panel"\n            slot="tile"\n        >\n            <rt-img\n                alt="')+a.suppressValue(a.memberLookup(c,"title"),e.opts.autoescape)+'"\n                fetchpriotity="high"\n                loading="')+a.suppressValue(a.memberLookup(c,"imageLoading"),e.opts.autoescape)+'"\n                slot="image"\n                src="')+a.suppressValue(a.memberLookup(c,"thumbnail"),e.opts.autoescape)+'"\n            >\n            </rt-img>\n            <rt-button\n                data-ems-id="')+a.suppressValue(a.memberLookup(c,"emsId"),e.opts.autoescape)+'"\n                data-mpx-id="')+a.suppressValue(a.memberLookup(c,"mpxId"),e.opts.autoescape)+'"\n                data-public-id="')+a.suppressValue(a.memberLookup(c,"publicId"),e.opts.autoescape)+'"\n                data-qa="video-trailer-play-btn"\n                data-type="')+a.suppressValue(a.memberLookup(c,"type"),e.opts.autoescape)+'"\n                data-VideoPlayerOverlayManager="btnVideo:click"\n                slot="imageAction"\n                theme="transparent"\n            >\n                <span class="sr-only">')+a.suppressValue(a.memberLookup(c,"title"),e.opts.autoescape)+'</span>\n            </rt-button>\n\n            <rt-text\n                data-qa="video-item-title"\n                size="1"\n                slot="title"\n            >\n                ')+a.suppressValue(a.memberLookup(c,"title"),e.opts.autoescape)+"\n            </rt-text>\n\n            ",a.memberLookup(c,"duration")&&(n=(n+='\n            <rt-badge\n                aria-hidden="true"\n                slot="imageInsetLabel"\n                theme="gray"\n            >\n                ')+a.suppressValue(a.memberLookup(c,"duration"),e.opts.autoescape)+"\n            </rt-badge>\n            "),n+="\n        </tile-video>\n    "}o=o.pop(),r(null,n=(n=(n+='\n\n    <tile-view-more\n        aspect="landscape"\n        background="mediaHero"\n        slot="tile"\n        style="')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"videosCarousel"),"tileStyleAttributes"),e.opts.autoescape)+'"\n    >\n        <rt-button\n            href="')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"videosCarousel"),"videosPageUrl"),e.opts.autoescape)+'"\n            shape="pill"\n            theme="transparent-lighttext"\n        >\n            View more videos\n        </rt-button>\n    </tile-view-more>\n</carousel-slider>\n')}catch(e){r(a.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._mediaReviewFullAudience={root:function(e,t,o,a,r){var n="";try{n=(n=(n=(n=(n=(n+="<media-review-full-audience ")+a.suppressValue(a.contextOrFrameLookup(t,o,"isVerified")?"isverifiedreview":"",e.opts.autoescape)+' data-qa="full-audience-review">\n    <rt-button\n        data-MediaAudienceReviewsManager="overlayClose:click"\n        size="1"\n        slot="close"\n        theme="transparent"\n        data-qa="close-btn"\n    >\n        <rt-icon icon="close"></rt-icon>\n    </rt-button>\n    <rt-text slot="title" context="label" data-qa="user-name">')+a.suppressValue(a.contextOrFrameLookup(t,o,"displayName"),e.opts.autoescape)+'</rt-text>\n    <rt-text slot="mediaTitle" data-qa="media-title">')+a.suppressValue(e.getFilter("safe").call(t,a.contextOrFrameLookup(t,o,"mediaTitle")),e.opts.autoescape)+'</rt-text>\n    <score-icon-critics\n        certified="')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"criticsScore"),"certified"),e.opts.autoescape)+'"\n        sentiment="')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"criticsScore"),"sentiment"),e.opts.autoescape)+'"\n        slot="criticsScoreIcon"\n    >\n    </score-icon-critics>\n    ';a.memberLookup(a.contextOrFrameLookup(t,o,"criticsScore"),"scorePercent")?n=(n+='\n    <rt-text\n        context="label"\n        slot="criticsScorePercent"\n        data-qa="critics-score"\n    >\n        ')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"criticsScore"),"scorePercent"),e.opts.autoescape)+"\n    </rt-text>\n    ":n+='\n    <rt-text\n        context="label"\n        size="1"\n        slot="criticsScorePercent"\n        style="--textColor: var(--grayLight4); --lineHeight: 1; --letterSpacing: 0.2em;"\n        data-qa="critics-score"\n    >--</rt-text>\n    ',n=(n=(n+='\n    <score-icon-audience\n        certified="')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audienceScore"),"certified"),e.opts.autoescape)+'"\n        sentiment="')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audienceScore"),"sentiment"),e.opts.autoescape)+'"\n        slot="audienceScoreIcon"\n    >\n    </score-icon-audience>\n    ',a.memberLookup(a.contextOrFrameLookup(t,o,"audienceScore"),"scorePercent")?n=(n+='\n    <rt-text\n        context="label"\n        slot="audienceScorePercent"\n        data-qa="audience-score"\n    >\n        ')+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audienceScore"),"scorePercent"),e.opts.autoescape)+"\n    </rt-text>\n    ":n+='\n    <rt-text\n        context="label"\n        size="1"\n        slot="audienceScorePercent"\n        style="--textColor: var(--grayLight4); --lineHeight: 1; --letterSpacing: 0.2em;"\n        data-qa="audience-score"\n    >--</rt-text>\n    ',r(null,n=(n=(n=(n=(n+='\n    <rating-stars-group\n        score="')+a.suppressValue(a.contextOrFrameLookup(t,o,"rating"),e.opts.autoescape)+'"\n        size="0.75"\n        slot="ratingStars"\n        data-qa="review-stars"\n    >\n    </rating-stars-group>\n    <rt-text slot="updateDate" size="0.75" data-qa="review-date">')+a.suppressValue(a.contextOrFrameLookup(t,o,"displayDate"),e.opts.autoescape)+'</rt-text>\n    <rt-text slot="review" data-qa="review-text">')+a.suppressValue(a.contextOrFrameLookup(t,o,"review"),e.opts.autoescape)+'</rt-text>\n    <rt-button\n        href="')+a.suppressValue(a.contextOrFrameLookup(t,o,"reviewsUrl"),e.opts.autoescape)+'"\n        size="0.875"\n        shape="pill"\n        slot="ctaMore"\n        theme="transparent-darktext"\n        data-qa="read-more"\n    >\n        Read More Reviews\n    </rt-button>\n</media-review-full-audience>\n')}catch(e){r(a.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._mediaScorecardOverlayComponent={root:function(e,t,o,a,r){var n="";try{r(null,(n+='<media-scorecard-overlay mediatype="')+a.suppressValue(a.contextOrFrameLookup(t,o,"mediaType"),e.opts.autoescape)+'">\n    <rt-button slot="btnClose" data-MediaScorecardManager="overlayClose:click" theme="transparent">\n        <rt-icon icon="close" size="1.5"></rt-icon>\n    </rt-button>\n\n    <rt-text slot="criticsTitle" size="1.25" style="--textTransform: capitalize" context="heading">'+a.suppressValue(a.contextOrFrameLookup(t,o,"criticsTitle"),e.opts.autoescape)+'</rt-text>\n    <rt-button slot="btnCriticsTooltip" data-MediaScorecardManager="tipCriticsOpen:click" theme="transparent">\n      <rt-icon icon="question-circled" size="0.875" image></rt-icon>\n    </rt-button>\n\n    <rt-tab\n      data-MediaScorecardManager="tabCriticsTop:click"\n      '+a.suppressValue(a.contextOrFrameLookup(t,o,"hasCriticsTop")?"":"hidden",e.opts.autoescape)+"\n      "+a.suppressValue("criticsTop"===a.contextOrFrameLookup(t,o,"criticsTabSelected")?"selected":"",e.opts.autoescape)+'\n      slot="btnTopCritics"\n    >Top Critics</rt-tab>\n    <rt-tab\n      data-MediaScorecardManager="tabCriticsAll:click"\n      slot="btnAllCritics"\n      '+a.suppressValue("criticsAll"===a.contextOrFrameLookup(t,o,"criticsTabSelected")?"selected":"",e.opts.autoescape)+'\n    >All Critics</rt-tab>\n\n    <score-icon-critics\n        slot="criticsIcon"\n        certified="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"certified"),e.opts.autoescape)+'"\n        sentiment="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"sentiment"),e.opts.autoescape)+'"\n        size="3.5"\n    ></score-icon-critics>\n    <rt-text slot="criticsScore" size="1.75" style="--lineHeight: 1.25;" context="label">'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"scorePercent"),e.opts.autoescape)+'</rt-text>\n    <rt-link slot="criticsLink" size="0.75" href="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"scoreLinkUrl"),e.opts.autoescape)+'">'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"scoreLinkText"),e.opts.autoescape)+'</rt-link>\n\n    <rt-text slot="criticsFreshLabel" context="label" size="0.875">Fresh</rt-text>\n    <progress-bar slot="criticsFreshBar" count="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"likedCount"),e.opts.autoescape)+'" total="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"ratingCount"),e.opts.autoescape)+'"></progress-bar>\n    <rt-text slot="criticsFreshCount" size="0.875" context="label">'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"likedCount"),e.opts.autoescape)+'</rt-text>\n\n    <rt-text slot="criticsRottenLabel" context="label" size="0.875">Rotten</rt-text>\n    <progress-bar slot="criticsRottenBar" count="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"notLikedCount"),e.opts.autoescape)+'" total="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"ratingCount"),e.opts.autoescape)+'"></progress-bar>\n    <rt-text slot="criticsRottenCount" size="0.875" context="label">'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"notLikedCount"),e.opts.autoescape)+'</rt-text>\n\n    <rt-text slot="criticsAverageRating" size="0.875" context="label">'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"critics"),"averageRating"),e.opts.autoescape)+' out of 10 Rating</rt-text>\n\n    <rt-text slot="audienceTitle" size="1.25" style="--textTransform: capitalize;" context="heading">'+a.suppressValue(a.contextOrFrameLookup(t,o,"audienceTitle"),e.opts.autoescape)+'</rt-text>\n    <rt-button slot="btnAudienceTooltip" data-MediaScorecardManager="tipAudienceOpen:click" theme="transparent">\n      <rt-icon icon="question-circled" size="0.875" image></rt-icon>\n    </rt-button>\n\n    <rt-tab\n      '+a.suppressValue(a.contextOrFrameLookup(t,o,"hasAudienceVerified")?"":"hidden",e.opts.autoescape)+"\n      "+a.suppressValue("audienceVerified"===a.contextOrFrameLookup(t,o,"audienceTabSelected")?"selected":"",e.opts.autoescape)+'\n      data-MediaScorecardManager="tabAudienceVerified:click"\n      slot="btnVerifiedAudience"\n    >Verified Audience</rt-tab>\n    <rt-tab\n      '+a.suppressValue("audienceAll"===a.contextOrFrameLookup(t,o,"audienceTabSelected")?"selected":"",e.opts.autoescape)+'\n      data-MediaScorecardManager="tabAudienceAll:click"\n      slot="btnAllAudience" \n    >All Audience</rt-tab>\n\n    <score-icon-audience\n      slot="audienceIcon"\n      certified="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audience"),"certified"),e.opts.autoescape)+'"\n      sentiment="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audience"),"sentiment"),e.opts.autoescape)+'"\n      size="3.5"\n    ></score-icon-audience>\n    <rt-text slot="audienceScore" size="1.75" style="--lineHeight: 1.25;" context="label">'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audience"),"scorePercent"),e.opts.autoescape)+'</rt-text>\n    <rt-link slot="audienceLink" size="0.75" href="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audience"),"scoreLinkUrl"),e.opts.autoescape)+'">'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audience"),"bandedRatingCount"),e.opts.autoescape)+'</rt-link>\n\n    <rt-text slot="audienceAverageRating" size="0.875" context="label">'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audience"),"averageRating"),e.opts.autoescape)+' out of 5 Rating</rt-text>\n    <rating-stars-group slot="audienceRatingStars" size="1.2" score="'+a.suppressValue(a.memberLookup(a.contextOrFrameLookup(t,o,"audience"),"averageRating"),e.opts.autoescape)+'"></rating-stars-group>\n</media-scorecard-overlay>\n')}catch(e){r(a.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._mediaScorecardOverlayToolTip={root:function(e,t,o,a,r){var n="";try{r(null,(n+='<rt-text slot="title" context="label">')+a.suppressValue(a.contextOrFrameLookup(t,o,"title"),e.opts.autoescape)+'</rt-text>\n<rt-text slot="content">'+a.suppressValue(e.getFilter("safe").call(t,a.contextOrFrameLookup(t,o,"content")),e.opts.autoescape)+'</rt-text>\n\n<rt-text slot="title2" context="label">'+a.suppressValue(a.contextOrFrameLookup(t,o,"title2"),e.opts.autoescape)+'</rt-text>\n<rt-text slot="content2">'+a.suppressValue(e.getFilter("safe").call(t,a.contextOrFrameLookup(t,o,"content2")),e.opts.autoescape)+"</rt-text>\n")}catch(e){r(a.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._rateAndReviewOverlayDialog={root:function(e,t,o,a,r){var n="";try{r(null,(n+="<rate-and-review-overlay-dialog ")+a.suppressValue(a.contextOrFrameLookup(t,o,"noBtnSecondary")?"hiddenbtnsecondary":"",e.opts.autoescape)+'>\n    <rt-button\n        size="1.3"\n        slot="close"\n        theme="transparent"\n        data-RateAndReviewOverlayManager="dialogClose:click"\n    >\n        <rt-icon icon="close"></rt-icon>\n        <sr-text>close</sr-text>\n    </rt-button>\n    <rt-text slot="title" style="--textTransform: capitalize;" context="heading" size="1.25">'+a.suppressValue(a.contextOrFrameLookup(t,o,"title"),e.opts.autoescape)+'</rt-text>\n    <rt-text slot="content">'+a.suppressValue(a.contextOrFrameLookup(t,o,"content"),e.opts.autoescape)+'</rt-text>\n    <rt-button slot="btnPrimary" shape="pill" data-RateAndReviewOverlayManager="dialogBtnPrimary:click">'+a.suppressValue(a.contextOrFrameLookup(t,o,"btnPrimary"),e.opts.autoescape)+'</rt-button>\n    <rt-button slot="btnSecondary" shape="pill" theme="transparent-darktext" data-RateAndReviewOverlayManager="dialogBtnSecondary:click">'+a.suppressValue(a.contextOrFrameLookup(t,o,"btnSecondary"),e.opts.autoescape)+"</rt-button>\n</rate-and-review-overlay-dialog>")}catch(e){r(a.handleError(e,0,0))}}},(window.nunjucksPrecompiled=window.nunjucksPrecompiled||{})._rateAndReviewOverlayComponent={root:function(e,t,o,a,r){var n="";try{r(null,(n+='<rate-and-review-overlay data-RateAndReviewOverlayManager="overlay">\n    <rt-button\n        size="1.3"\n        slot="close"\n        theme="transparent"\n        data-RateAndReviewOverlayManager="overlayClose:click"\n    >\n        <rt-icon icon="close"></rt-icon>\n        <sr-text>close</sr-text>\n    </rt-button>\n    <rt-text\n        context="heading"\n        size="1"\n        slot="title"\n        style="--textTransform: capitalize;"\n        data-RateAndReviewOverlayManager="overlayTitle"\n    > ')+a.suppressValue(e.getFilter("safe").call(t,a.contextOrFrameLookup(t,o,"title")),e.opts.autoescape)+' Review</rt-text>\n    <rt-text\n        context="heading" \n        size="0.875" \n        slot="date"\n        style="--fontWeight: 400;"\n        data-RateAndReviewOverlayManager="overlayDate"\n    > '+a.suppressValue(a.contextOrFrameLookup(t,o,"date"),e.opts.autoescape)+'</rt-text>\n    <rating-stars-group\n        data-RateAndReviewOverlayManager="overlayStars:changed"\n        isselectable\n        score="'+a.suppressValue(a.contextOrFrameLookup(t,o,"score"),e.opts.autoescape)+'"\n        size="2.75,2.5"\n        slot="ratingStars"\n    ></rating-stars-group>\n    <rating-descriptions\n        context="label"\n        data-RateAndReviewOverlayManager="overlayRatingDescriptions"\n        score="'+a.suppressValue(a.contextOrFrameLookup(t,o,"score"),e.opts.autoescape)+'"\n        size="1"\n        slot="description"\n        hidden>\n    </rating-descriptions>\n    <textarea\n        aria-label="Your review"\n        data-RateAndReviewOverlayManager="overlayReview:input"\n        placeholder="Your thoughts are valuable and help others find great movies and shows to watch.&#10;&#10;Rotten Tomatoes aims to foster a fun and respectful community of entertainment lovers from all walks of life. We welcome reviews that cover specific story, craft, technical, and/or filmmaking attributes."\n        slot="review"\n    >'+a.suppressValue(a.contextOrFrameLookup(t,o,"review"),e.opts.autoescape)+'</textarea>\n    <character-count\n        data-RateAndReviewOverlayManager="overlayCharCount"\n        min="20"\n        slot="charCount"\n    ></character-count>\n    <rt-button\n        data-RateAndReviewOverlayManager="overlayRateBtn:click"\n        shape="pill"\n        slot="ctaPost"\n    >Post</rt-button>\n</rate-and-review-overlay>')}catch(e){r(a.handleError(e,0,0))}}};