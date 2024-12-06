requirejs.config({
    baseUrl: PORTAL_URL,
    paths: {
    "mockup-patterns-datatables": "++resource++mockup/datatables/pattern", 
    "datatables.net-fixedcolumns": "++plone++static/components/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min", 
    "less": "++plone++static/components/less/dist/less", 
    "text": "++plone++static/components/requirejs-text/text", 
    "mockup-patterns-formautofocus": "++resource++mockup/formautofocus/pattern", 
    "datatables.net-keytable": "++plone++static/components/datatables.net-keytable/js/dataTables.keyTable.min", 
    "mockup-patterns-tinymce": "++resource++mockup/tinymce/pattern", 
    "mockup-router": "++resource++mockupjs/router", 
    "mockup-patterns-relateditems-url": "++resource++mockup/relateditems", 
    "jquery.event.drop": "++resource++mockuplib/jquery.event.drop", 
    "tinymce-autosave": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autosave/plugin", 
    "tinymce-charmap": "++plone++static/components/tinymce-builded/js/tinymce/plugins/charmap/plugin", 
    "plone-app-event": "++plone++plone.app.event/event", 
    "tinymce-save": "++plone++static/components/tinymce-builded/js/tinymce/plugins/save/plugin", 
    "tinymce-fullscreen": "++plone++static/components/tinymce-builded/js/tinymce/plugins/fullscreen/plugin", 
    "tinymce-noneditable": "++plone++static/components/tinymce-builded/js/tinymce/plugins/noneditable/plugin", 
    "datatables.net-buttons-colvis": "++plone++static/components/datatables.net-buttons/js/buttons.colVis.min", 
    "ace-mode-javascript": "++plone++static/components/ace-builds/src/mode-javascript", 
    "tinymce-preview": "++plone++static/components/tinymce-builded/js/tinymce/plugins/preview/plugin", 
    "mockup-patterns-tree": "++resource++mockup/tree/pattern", 
    "tinymce-pagebreak": "++plone++static/components/tinymce-builded/js/tinymce/plugins/pagebreak/plugin", 
    "jqtree-contextmenu": "++plone++static/components/cs-jqtree-contextmenu/src/jqTreeContextMenu", 
    "mockup-ui-url": "++resource++mockupjs/ui", 
    "jqtree": "++plone++static/components/jqtree/tree.jquery", 
    "datatables.net": "++plone++static/components/datatables.net/js/jquery.dataTables", 
    "mockup-i18n": "++resource++mockupjs/i18n", 
    "underscore": "++plone++static/components/underscore/underscore", 
    "datatables.net-colreorder": "++plone++static/components/datatables.net-colreorder/js/dataTables.colReorder.min", 
    "pat-logger": "++plone++static/components/patternslib/src/core/logger", 
    "ace-mode-text": "++plone++static/components/ace-builds/src/mode-text", 
    "backbone.paginator": "++plone++static/components/backbone.paginator/lib/backbone.paginator", 
    "datatables.net-responsive-bs": "++plone++static/components/datatables.net-responsive-bs/js/responsive.bootstrap.min", 
    "tinymce-textcolor": "++plone++static/components/tinymce-builded/js/tinymce/plugins/textcolor/plugin", 
    "mockup-patterns-relateditems-upload": "++resource++mockup/relateditems/upload", 
    "tinymce-fullpage": "++plone++static/components/tinymce-builded/js/tinymce/plugins/fullpage/plugin", 
    "tinymce-compat3x": "++plone++static/components/tinymce-builded/js/tinymce/plugins/compat3x/plugin", 
    "pat-jquery-ext": "++plone++static/components/patternslib/src/core/jquery-ext", 
    "datatables.net-buttons": "++plone++static/components/datatables.net-buttons/js/dataTables.buttons.min", 
    "mockup-patterns-thememapper": "++resource++mockup/thememapper/pattern", 
    "datatables.net-responsive": "++plone++static/components/datatables.net-responsive/js/dataTables.responsive.min", 
    "mockup-patterns-filemanager-url": "++resource++mockup/filemanager", 
    "mockup-patterns-structureupdater": "++resource++mockup/structure/pattern-structureupdater", 
    "bootstrap-transition": "++plone++static/components/bootstrap/js/transition", 
    "picker.time": "++plone++static/components/pickadate/lib/picker.time", 
    "tinymce-spellchecker": "++plone++static/components/tinymce-builded/js/tinymce/plugins/spellchecker/plugin", 
    "mockup-patterns-tinymce-url": "++resource++mockup/tinymce", 
    "mockup-patterns-preventdoublesubmit": "++resource++mockup/preventdoublesubmit/pattern", 
    "tinymce-visualchars": "++plone++static/components/tinymce-builded/js/tinymce/plugins/visualchars/plugin", 
    "expect": "++plone++static/components/expect/index", 
    "datatables.net-fixedheader": "++plone++static/components/datatables.net-fixedheader/js/dataTables.fixedHeader.min", 
    "tinymce-anchor": "++plone++static/components/tinymce-builded/js/tinymce/plugins/anchor/plugin", 
    "mockup-patterns-filemanager": "++resource++mockup/filemanager/pattern", 
    "datatables.net-bs": "++plone++static/components/datatables.net-bs/js/dataTables.bootstrap", 
    "mockup-patterns-backdrop": "++resource++mockup/backdrop/pattern", 
    "mockup-patterns-cookietrigger": "++resource++mockup/cookietrigger/pattern", 
    "pfgquickedit": "++plone++pfgquickedit/quickedit", 
    "mockup-patterns-modal": "++resource++mockup/modal/pattern", 
    "jquery.cookie": "++plone++static/components/jquery.cookie/jquery.cookie", 
    "tinymce-wordcount": "++plone++static/components/tinymce-builded/js/tinymce/plugins/wordcount/plugin", 
    "mockup-utils": "++resource++mockupjs/utils", 
    "tinymce-advlist": "++plone++static/components/tinymce-builded/js/tinymce/plugins/advlist/plugin", 
    "plone-patterns-portletmanager": "++resource++manage-portlets", 
    "jquery.browser": "++plone++static/components/jquery.browser/dist/jquery.browser", 
    "tinymce-modern-theme": "++plone++static/components/tinymce-builded/js/tinymce/themes/modern/theme", 
    "datatables.net-buttons-print": "++plone++static/components/datatables.net-buttons/js/buttons.print.min", 
    "tinymce-paste": "++plone++static/components/tinymce-builded/js/tinymce/plugins/paste/plugin", 
    "resource-plone-app-discussion-javascripts-comments": "++resource++plone.app.discussion.javascripts/comments", 
    "mockup-patterns-upload-url": "++resource++mockup/upload", 
    "js-shortcuts": "++plone++static/components/js-shortcuts/js-shortcuts", 
    "tinymce-bbcode": "++plone++static/components/tinymce-builded/js/tinymce/plugins/bbcode/plugin", 
    "mockup-patterns-querystring": "++resource++mockup/querystring/pattern", 
    "logging": "++plone++static/components/logging/src/logging", 
    "ace": "++plone++static/components/ace-builds/src/ace", 
    "mockup-patterns-thememapper-url": "++resource++mockup/thememapper", 
    "tinymce-autolink": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autolink/plugin", 
    "mockup-patterns-formunloadalert": "++resource++mockup/formunloadalert/pattern", 
    "picker": "++plone++static/components/pickadate/lib/picker", 
    "mockup-patterns-structure-url": "++resource++mockup/structure", 
    "tinymce-autoresize": "++plone++static/components/tinymce-builded/js/tinymce/plugins/autoresize/plugin", 
    "tinymce-image": "++plone++static/components/tinymce-builded/js/tinymce/plugins/image/plugin", 
    "marked": "++plone++static/components/marked/lib/marked", 
    "ace-mode-css": "++plone++static/components/ace-builds/src/mode-css", 
    "pat-registry": "++plone++static/components/patternslib/src/core/registry", 
    "plone": "++resource++plone", 
    "resource-plone-app-jquerytools-js": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tools.overlay", 
    "mockup-patterns-select2": "++resource++mockup/select2/pattern", 
    "mockup-patterns-structure": "++resource++mockup/structure/pattern", 
    "datatables.net-buttons-html5": "++plone++static/components/datatables.net-buttons/js/buttons.html5.min", 
    "jquery.recurrenceinput": "++plone++static/components/jquery.recurrenceinput.js/src/jquery.recurrenceinput", 
    "jquery.form": "++plone++static/components/jquery-form/jquery.form", 
    "mockup-patterns-sortable": "++resource++mockup/sortable/pattern", 
    "tinymce-template": "++plone++static/components/tinymce-builded/js/tinymce/plugins/template/plugin", 
    "translate": "++resource++mockupjs/i18n-wrapper", 
    "bootstrap-dropdown": "++plone++static/components/bootstrap/js/dropdown", 
    "mockup-patterns-contentloader": "++resource++mockup/contentloader/pattern", 
    "datatables.net-select": "++plone++static/components/datatables.net-select/js/dataTables.select.min", 
    "tinymce-lists": "++plone++static/components/tinymce-builded/js/tinymce/plugins/lists/plugin", 
    "bootstrap-alert": "++plone++static/components/bootstrap/js/alert", 
    "tinymce-textpattern": "++plone++static/components/tinymce-builded/js/tinymce/plugins/textpattern/plugin", 
    "tinymce-emoticons": "++plone++static/components/tinymce-builded/js/tinymce/plugins/emoticons/plugin", 
    "resourceregistry": "++plone++static/resourceregistry", 
    "tinymce-table": "++plone++static/components/tinymce-builded/js/tinymce/plugins/table/plugin", 
    "jquery": "++plone++static/components/jquery/dist/jquery.min", 
    "jquery.event.drag": "++resource++mockuplib/jquery.event.drag", 
    "tinymce-tabfocus": "++plone++static/components/tinymce-builded/js/tinymce/plugins/tabfocus/plugin", 
    "mockup-patterns-recurrence": "++resource++mockup/recurrence/pattern", 
    "tinymce-print": "++plone++static/components/tinymce-builded/js/tinymce/plugins/print/plugin", 
    "tinymce-link": "++plone++static/components/tinymce-builded/js/tinymce/plugins/link/plugin", 
    "pat-compat": "++plone++static/components/patternslib/src/core/compat", 
    "datatables.net-rowreorder": "++plone++static/components/datatables.net-rowreorder/js/dataTables.rowReorder.min", 
    "rjs": "++plone++static/components/r.js/dist/r", 
    "tinymce-hr": "++plone++static/components/tinymce-builded/js/tinymce/plugins/hr/plugin", 
    "select2": "++plone++static/components/select2/select2", 
    "tinymce-media": "++plone++static/components/tinymce-builded/js/tinymce/plugins/media/plugin", 
    "mockup-patterns-texteditor": "++resource++mockup/texteditor/pattern", 
    "mockup-patterns-tooltip": "++resource++mockup/tooltip/pattern", 
    "resource-plone-app-jquerytools-dateinput-js": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tools.dateinput", 
    "plone-logged-in": "++resource++plone-logged-in", 
    "mockup-patterns-pickadate": "++resource++mockup/pickadate/pattern", 
    "datatables.net-autofill-bs": "++plone++static/components/datatables.net-autofill-bs/js/autoFill.bootstrap", 
    "JSXTransformer": "++plone++static/components/react/JSXTransformer", 
    "datatables.net-buttons-flash": "++plone++static/components/datatables.net-buttons/js/buttons.flash.min", 
    "tinymce-contextmenu": "++plone++static/components/tinymce-builded/js/tinymce/plugins/contextmenu/plugin", 
    "ace-theme-monokai": "++plone++static/components/ace-builds/src/theme-monokai", 
    "mockup-patterns-toggle": "++resource++mockup/toggle/pattern", 
    "tinymce-directionality": "++plone++static/components/tinymce-builded/js/tinymce/plugins/directionality/plugin", 
    "mockup-patterns-markspeciallinks": "++resource++mockup/markspeciallinks/pattern", 
    "tinymce-legacyoutput": "++plone++static/components/tinymce-builded/js/tinymce/plugins/legacyoutput/plugin", 
    "pat-base": "++plone++static/components/patternslib/src/core/base", 
    "plone-patterns-toolbar": "++plone++static/patterns/toolbar/src/toolbar", 
    "mockup-patterns-inlinevalidation": "++resource++mockup/inlinevalidation/pattern", 
    "thememapper": "++resource++plone.app.theming/thememapper", 
    "tinymce": "++plone++static/components/tinymce-builded/js/tinymce/tinymce", 
    "tinymce-visualblocks": "++plone++static/components/tinymce-builded/js/tinymce/plugins/visualblocks/plugin", 
    "mockup-patterns-resourceregistry-url": "++resource++mockup/resourceregistry", 
    "tinymce-insertdatetime": "++plone++static/components/tinymce-builded/js/tinymce/plugins/insertdatetime/plugin", 
    "mockup-patterns-base": "++resource++mockup/base/pattern", 
    "mockup-patterns-livesearch": "++resource++mockup/livesearch/pattern", 
    "mockup-patterns-upload": "++resource++mockup/upload/pattern", 
    "picker.date": "++plone++static/components/pickadate/lib/picker.date", 
    "datatables.net-buttons-bs": "++plone++static/components/datatables.net-buttons-bs/js/buttons.bootstrap.min", 
    "tinymce-searchreplace": "++plone++static/components/tinymce-builded/js/tinymce/plugins/searchreplace/plugin", 
    "mockup-patterns-autotoc": "++resource++mockup/autotoc/pattern", 
    "tinymce-importcss": "++plone++static/components/tinymce-builded/js/tinymce/plugins/importcss/plugin", 
    "backbone": "++plone++static/components/backbone/backbone", 
    "mockup-patterns-resourceregistry": "++resource++mockup/resourceregistry/pattern", 
    "react": "++plone++static/components/react/react", 
    "mockup-patterns-textareamimetypeselector": "++resource++mockup/textareamimetypeselector/pattern", 
    "moment": "++plone++static/components/moment/min/moment-with-locales.min", 
    "sinon": "++plone++static/components/sinonjs/sinon", 
    "tinymce-code": "++plone++static/components/tinymce-builded/js/tinymce/plugins/code/plugin", 
    "pat-utils": "++plone++static/components/patternslib/src/core/utils", 
    "tinymce-colorpicker": "++plone++static/components/tinymce-builded/js/tinymce/plugins/colorpicker/plugin", 
    "jquery.tmpl": "++plone++static/components/jquery.recurrenceinput.js/lib/jquery.tmpl", 
    "datatables.net-autofill": "++plone++static/components/datatables.net-autofill/js/dataTables.autoFill.min", 
    "bootstrap-collapse": "++plone++static/components/bootstrap/js/collapse", 
    "mockup-patterns-moment": "++resource++mockup/moment/pattern", 
    "mockup-patterns-relateditems": "++resource++mockup/relateditems/pattern", 
    "tinymce-nonbreaking": "++plone++static/components/tinymce-builded/js/tinymce/plugins/nonbreaking/plugin", 
    "bootstrap-tooltip": "++plone++static/components/bootstrap/js/tooltip", 
    "pat-mockup-parser": "++plone++static/components/patternslib/src/core/mockup-parser", 
    "datatables.net-scroller": "++plone++static/components/datatables.net-scroller/js/dataTables.scroller.min", 
    "dropzone": "++plone++static/components/dropzone/dist/dropzone-amd-module"
},
    shim: {
        "resource-plone-app-jquerytools-dateinput-js": {
            deps: ["jquery"]
        },
        "tinymce-autoresize": {
            deps: ["tinymce"]
        },
        "bootstrap-transition": {
            exports: "window.jQuery.support.transition",
            deps: ["jquery"]
        },
        "tinymce-save": {
            deps: ["tinymce"]
        },
        "bootstrap-collapse": {
            exports: "window.jQuery.fn.collapse.Constructor",
            deps: ["jquery"]
        },
        "tinymce-code": {
            deps: ["tinymce"]
        },
        "tinymce-fullpage": {
            deps: ["tinymce"]
        },
        "tinymce-visualchars": {
            deps: ["tinymce"]
        },
        "expect": {
            exports: "window.expect"
        },
        "tinymce-spellchecker": {
            deps: ["tinymce"]
        },
        "jquery.event.drop": {
            exports: "$.drop",
            deps: ["jquery"]
        },
        "tinymce-anchor": {
            deps: ["tinymce"]
        },
        "tinymce-autosave": {
            deps: ["tinymce"]
        },
        "tinymce-contextmenu": {
            deps: ["tinymce"]
        },
        "tinymce-charmap": {
            deps: ["tinymce"]
        },
        "resource-plone-app-jquerytools-js": {
            deps: ["jquery"]
        },
        "tinymce-directionality": {
            deps: ["tinymce"]
        },
        "tinymce": {
            exports: "window.tinyMCE",
            init: function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }
        },
        "tinymce-image": {
            deps: ["tinymce"]
        },
        "tinymce-legacyoutput": {
            deps: ["tinymce"]
        },
        "tinymce-template": {
            deps: ["tinymce"]
        },
        "jquery.cookie": {
            deps: ["jquery"]
        },
        "jquery.recurrenceinput": {
            deps: ["jquery", "resource-plone-app-jquerytools-js", "resource-plone-app-jquerytools-dateinput-js", "jquery.tmpl"]
        },
        "tinymce-fullscreen": {
            deps: ["tinymce"]
        },
        "tinymce-noneditable": {
            deps: ["tinymce"]
        },
        "tinymce-wordcount": {
            deps: ["tinymce"]
        },
        "tinymce-insertdatetime": {
            deps: ["tinymce"]
        },
        "tinymce-advlist": {
            deps: ["tinymce"]
        },
        "tinymce-visualblocks": {
            deps: ["tinymce"]
        },
        "tinymce-searchreplace": {
            deps: ["tinymce"]
        },
        "jquery.browser": {
            deps: ["jquery"]
        },
        "picker.date": {
            deps: ["picker"]
        },
        "tinymce-modern-theme": {
            deps: ["tinymce"]
        },
        "bootstrap-dropdown": {
            deps: ["jquery"]
        },
        "tinymce-preview": {
            deps: ["tinymce"]
        },
        "tinymce-paste": {
            deps: ["tinymce"]
        },
        "tinymce-pagebreak": {
            deps: ["tinymce"]
        },
        "tinymce-importcss": {
            deps: ["tinymce"]
        },
        "tinymce-lists": {
            deps: ["tinymce"]
        },
        "bootstrap-alert": {
            deps: ["jquery"]
        },
        "jqtree": {
            deps: ["jquery"]
        },
        "tinymce-textpattern": {
            deps: ["tinymce"]
        },
        "backbone": {
            exports: "window.Backbone",
            deps: ["underscore", "jquery"]
        },
        "jquery.tmpl": {
            deps: ["jquery"]
        },
        "tinymce-emoticons": {
            deps: ["tinymce"]
        },
        "sinon": {
            exports: "window.sinon"
        },
        "tinymce-table": {
            deps: ["tinymce"]
        },
        "underscore": {
            exports: "window._"
        },
        "js-shortcuts": {
            deps: ["jquery"]
        },
        "tinymce-bbcode": {
            deps: ["tinymce"]
        },
        "tinymce-print": {
            deps: ["tinymce"]
        },
        "tinymce-colorpicker": {
            deps: ["tinymce"]
        },
        "jquery.event.drag": {
            deps: ["jquery"]
        },
        "backbone.paginator": {
            exports: "window.Backbone.Paginator",
            deps: ["backbone"]
        },
        "tinymce-tabfocus": {
            deps: ["tinymce"]
        },
        "tinymce-textcolor": {
            deps: ["tinymce"]
        },
        "picker.time": {
            deps: ["picker"]
        },
        "JSXTransformer": {
            exports: "window.JSXTransformer"
        },
        "tinymce-compat3x": {
            deps: ["tinymce"]
        },
        "tinymce-link": {
            deps: ["tinymce"]
        },
        "tinymce-nonbreaking": {
            deps: ["tinymce"]
        },
        "bootstrap-tooltip": {
            deps: ["jquery"]
        },
        "tinymce-hr": {
            deps: ["tinymce"]
        },
        "tinymce-autolink": {
            deps: ["tinymce"]
        },
        "jqtree-contextmenu": {
            deps: ["jqtree"]
        },
        "tinymce-media": {
            deps: ["tinymce"]
        }
    },
    optimize: 'uglify',
    wrapShim: true
});