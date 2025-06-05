// ==UserScript==
// @name         Dark Mode Toggle
// @namespace    https://example.com/
// @version      1.0
// @description  Adds a keyboard shortcut to toggle dark mode styles
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const darkClass = 'userscript-dark-mode';
    const style = document.createElement('style');
    style.textContent = `\n        body.${darkClass} { background: #111 !important; color: #eee !important; }\n    `;
    document.head.appendChild(style);
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'd') {
            document.body.classList.toggle(darkClass);
        }
    });
})();
