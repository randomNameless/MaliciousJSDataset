function t(t,n){return function(n,e){if(0===n){var o=0,i=setTimeout((function(){e(1,o++),e(2)}),t instanceof Date?t-Date.now():t);e(0,(function(t){2===t&&clearTimeout(i)}))}}}export{t};
