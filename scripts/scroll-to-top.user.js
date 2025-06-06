// ==UserScript==
// @name         Scroll to Top Button
// @namespace    https://example.com/
// @version      1.0
// @description  Adds a floating button to quickly scroll back to the top of the page
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const btn = document.createElement('button');
    btn.textContent = '↑ Top';
    Object.assign(btn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '8px',
        display: 'none',
        zIndex: 10000
    });
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });
})();
