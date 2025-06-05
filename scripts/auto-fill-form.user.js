// ==UserScript==
// @name         Auto Fill Form
// @namespace    https://example.com/
// @version      1.0
// @description  Automatically fills common form fields with preset data for testing
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Example: fill input fields with name and email if present
    document.querySelectorAll('input[name="name"], input[name="email"]').forEach(function(el) {
        if (el.name === 'name') el.value = 'Test User';
        if (el.name === 'email') el.value = 'test@example.com';
    });
})();
