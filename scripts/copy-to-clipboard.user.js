// ==UserScript==
// @name         Copy to Clipboard
// @namespace    https://example.com/
// @version      1.0
// @description  Adds a copy button to code blocks for quick copying
// @match        *://*/*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll('pre code').forEach(codeBlock => {
        const btn = document.createElement('button');
        btn.textContent = 'Copy';
        btn.style.marginLeft = '4px';
        btn.addEventListener('click', () => {
            const text = codeBlock.textContent;
            if (typeof GM_setClipboard === 'function') {
                GM_setClipboard(text);
            } else {
                navigator.clipboard.writeText(text);
            }
        });
        codeBlock.parentNode.insertBefore(btn, codeBlock);
    });
})();
