"use strict";(self["xh-async"]=self["xh-async"]||[]).push([[5085],{35085:function(e,t,n){var o=n(91137),a=n(14806);t.Z=class{static nextLineEditable(e){this.isCaretInTheEnd(e)?this.insertHTML('<br><br type="_moz">'):this.insertHTML("<br>")}static getClipboardData(e){let t=e.clipboardData||window.clipboardData||e.originalEvent&&e.originalEvent.clipboardData||null;return t?t.getData("Text"):""}static escapeScript(e){let t=function(e){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;"})[e]||e};return e.replace(/<\/?(?!br)[^>]*>/g,function(e){return e.replace(/[<>&"]/g,t)})}static insertHTMLAtCursor(e){if(window.getSelection){let t=window.getSelection();if(t.rangeCount){let n=t.getRangeAt(0);n.collapse(!0),n.insertNode(o(e)),n.collapse(!0),t.removeAllRanges(),t.addRange(n)}}}static insertHTML(e){if(!e)return;let t=document.selection,n=!1;if(t&&"Control"!==t.type?(t.createRange().collapse(!0),t.createRange().pasteHTML(e),n=!0):n=document.execCommand("insertHTML",!1,e),!n&&window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){let n=o(e),a=t.getRangeAt(0),i=11===n.nodeType?n.lastChild:n;a.deleteContents(),a.insertNode(n),t.removeAllRanges(),a.setEndAfter(i),a.collapse(!1),t.addRange(a)}}static isCaretInTheEnd(e){a.ZP.validateElement(e);let t=!1;if(void 0!==window.getSelection){let n=window.getSelection().getRangeAt(0),o=n.cloneRange();o.selectNodeContents(e),o.setStart(n.endContainer,n.endOffset),t=0===o.toString().length}else if(void 0!==document.selection&&"Control"!==document.selection.type){let n=document.selection.createRange(),o=document.body.createTextRange();o.moveToElementText(e),o.setEndPoint("StartToEnd",n),t=0===o.text.length}return t}static moveCaretToElement(e,t){a.ZP.validateElement(e);let n=document.createRange();n.setStartAfter(e),n.collapse(t);let o=window.getSelection();o.removeAllRanges(),o.addRange(n)}static collapseSelection(e){let t=window.getSelection().anchorNode.nextSibling;t&&this.moveCaretToElement(t,e)}static getSelection(){if(window.getSelection){let e=window.getSelection();if(e.getRangeAt&&e.rangeCount)return e.getRangeAt(0)}else if(document.selection&&document.selection.createRange)return document.selection.createRange();return null}static restoreSelection(e,t){if(e){if(window.getSelection){let n=window.getSelection();n.removeAllRanges(),n.addRange(e),t&&n.collapseToStart()}else document.selection&&e.select&&(e.select(),t&&e.collapse())}}static getSelectionFromPoint(e,t){let n,o,a;return document.caretPositionFromPoint?(o=(n=document.caretPositionFromPoint(e,t)).offsetNode,{offset:a}=n.offset):document.caretRangeFromPoint&&(n=document.caretRangeFromPoint(e,t))&&(a=n.startOffset,o=n.startContainer),{range:n,node:o,offset:a}}static capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}}}}]);