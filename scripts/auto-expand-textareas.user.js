// ==UserScript==
// @name         Auto Expand Textareas
// @namespace    https://example.com/
// @version      1.0
// @description  Automatically adjust textarea height to fit content
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function resize(el) {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
    }

    document.querySelectorAll('textarea').forEach(area => {
        resize(area);
        area.addEventListener('input', () => resize(area));
    });
})();
