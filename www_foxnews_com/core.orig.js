/*! updated; 12-02-2024 09:11 PM **/

(function(geo){
    if (!geo) {
        var cb = (new Date()).getTime();
        document.write('<scr'+'ipt src="https://static.foxnews.com/static/orion/scripts/core/utils/geo.js?cb='+cb+'"></scr'+'ipt>');
    }
    var core = 'https://static.foxnews.com/static/isa/core-app.js?v=v245';
    try {
        var ch = (function(meta){
            return (meta && meta.content) ? meta.content : null;
        })(document.querySelector('meta[name="prism.channel"]'));
        if (ch === 'fts' && !/\/core\-app\.?(fts)/.test(core)) {
            core = core.replace(/\/core\-app\./, '/core-app.fts.');
        }
    } catch(err) {
        // do nothing
    }
    document.write('<scr'+'ipt src="'+core+'"></scr'+'ipt>');
})((window.FNC && window.FNC.GEO) ? true : false);
