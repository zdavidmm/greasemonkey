// ==UserScript==
// @name         Remove Ads
// @namespace    https://example.com/
// @version      1.0
// @description  Hides common advertisement elements from web pages
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const selectors = ['.ad', '.ads', '#ads', '.advertisement'];
    selectors.forEach(sel => document.querySelectorAll(sel).forEach(el => el.style.display = 'none'));
})();
