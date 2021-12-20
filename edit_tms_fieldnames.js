// ==UserScript==
// @name     Add links to table
// @run-at document-start
// @include http://lms.primelog.com/*
// @include https://uat.primelog.com/*
// @include http://*.primelog.com/*
// @include https://*.primelog.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */
/* eslint-disable no-multi-spaces */

// ==UserScript==



(function() {
    'use strict';

function EditInnerHtml (jNode, varName) {
    jNode.context.innerHTML = varName;
}

    function EditInnerHtmlAndAttribute (jNode, elemName, newValue)
    {
        jNode.context.innerHTML = newValue;
        jNode.value = newValue;

        var ele = document.querySelector(elemName);
        ele.value = newValue;
    }


var LoadReference;

// Sök vyn - Files
// Byt namn på fälten

    var fieldName1 = "Main reference: (Load/TS)";
    var fieldName2 = "Load carrier reference:";
    var fieldName3 = "Carrier name:";
    var fieldName4 = "Load list type:";
    var fieldName5 = "Metadata:";
    var fieldName6 = "Departure name:";
    var fieldName7 = "ETD date from:";
    var fieldName8 = "ETD date to:";

waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(1) > label", jNd => {EditInnerHtml (jNd, fieldName1); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(1) > label", jNd => {EditInnerHtml (jNd, fieldName2); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > label", jNd => {EditInnerHtml (jNd, fieldName3); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(1) > label", jNd => {EditInnerHtml (jNd, fieldName4); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(5) > td:nth-child(1) > label", jNd => {EditInnerHtml (jNd, fieldName5); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(6) > td:nth-child(1) > label", jNd => {EditInnerHtml (jNd, fieldName6); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(7) > td:nth-child(1) > label", jNd => {EditInnerHtml (jNd, fieldName7); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(8) > td:nth-child(1) > label", jNd => {EditInnerHtml (jNd, fieldName8); }, true);

//Dropdown menu - "Type"
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > select > option:nth-child(2)", jNd => {EditInnerHtmlAndAttribute (jNd,"body > form > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > select > option:nth-child(2)", "LOADLIST_ALL_TS"); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > select > option:nth-child(3)", jNd => {EditInnerHtmlAndAttribute (jNd,"body > form > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > select > option:nth-child(3)", "LOADLIST_SINGLE_TS"); }, true);
waitForKeyElements ("body > form > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > select > option:nth-child(4)", jNd => {EditInnerHtmlAndAttribute (jNd,"body > form > table > tbody > tr > td > table > tbody > tr:nth-child(4) > td:nth-child(2) > select > option:nth-child(4)", "N/A"); }, true);


// Resultatvyn, byt namn på kolumnerna
    var fieldNotInUse = "Not in use";
waitForKeyElements ("#table > thead > tr > th:nth-child(1)", jNd => {EditInnerHtml (jNd, "Load list type"); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(2)", jNd => {EditInnerHtml (jNd, "Main reference (TS/Load)"); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(3)", jNd => {EditInnerHtml (jNd, "Carrier name"); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(4)", jNd => {EditInnerHtml (jNd, "Metadata"); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(5)", jNd => {EditInnerHtml (jNd, "File name"); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(6)", jNd => {EditInnerHtml (jNd, "Load carrier reference"); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(7)", jNd => {EditInnerHtml (jNd, "Estimated time of departure"); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(8)", jNd => {EditInnerHtml (jNd, fieldNotInUse); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(9)", jNd => {EditInnerHtml (jNd, fieldNotInUse); }, true);
waitForKeyElements ("#table > thead > tr > th:nth-child(10)", jNd => {EditInnerHtml (jNd, fieldNotInUse); }, true);















})();