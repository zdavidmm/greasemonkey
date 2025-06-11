// ==UserScript==
// @name         Amazon Copy Title
// @namespace    https://example.com/
// @version      1.0
// @description  Adds a button on Amazon product pages to copy the product title to the clipboard
// @match        https://www.amazon.*/*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';
    const titleEl = document.getElementById('productTitle');
    if (!titleEl) return;

    const btn = document.createElement('button');
    btn.textContent = 'Copy Title';
    btn.style.marginLeft = '10px';
    btn.addEventListener('click', () => {
        const text = titleEl.textContent.trim();
        if (typeof GM_setClipboard === 'function') {
            GM_setClipboard(text);
        } else {
            navigator.clipboard.writeText(text);
        }
    });

    titleEl.parentNode.insertBefore(btn, titleEl.nextSibling);
})();
