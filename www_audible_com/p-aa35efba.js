function n(n){var o;return(null===(o=null==n?void 0:n.assignedElements)||void 0===o?void 0:o.call(n,{flatten:!0}))||[]}function o(n){return Array.from(n.childNodes).some((n=>{var o;return n.nodeType===Node.TEXT_NODE?Boolean(null===(o=n.nodeValue)||void 0===o?void 0:o.trim()):n.nodeType===Node.ELEMENT_NODE&&!n.slot}))}export{n as g,o as h}