// ==UserScript==
// @name         Amazon Hide Sponsored Items
// @namespace    https://example.com/
// @version      1.0
// @description  Removes sponsored products from Amazon search results
// @match        https://www.amazon.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const results = document.querySelectorAll('div[data-component-type="s-search-result"]');
    results.forEach(res => {
        if (res.innerText.includes('Sponsored')) {
            res.style.display = 'none';
        }
    });
})();
