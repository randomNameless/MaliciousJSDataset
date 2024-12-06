// JavaScript Document
// when the document loads
// generate this year for copyright
window.onload = function()  {
	"use strict";
	var pageDate = document.getElementById("copyDate");
	pageDate.innerHTML = new Date().getFullYear();
};