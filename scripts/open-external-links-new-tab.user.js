// ==UserScript==
// @name         Open External Links in New Tab
// @namespace    https://example.com/
// @version      1.0
// @description  Automatically open external links in a new browser tab
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const currentHost = location.host;
    document.querySelectorAll('a[href]').forEach(link => {
        try {
            const url = new URL(link.href, location.href);
            if (url.host && url.host !== currentHost) {
                link.target = '_blank';
                link.rel = link.rel ? `${link.rel} noopener` : 'noopener';
            }
        } catch (e) {
            // Ignore malformed URLs
        }
    });
})();
