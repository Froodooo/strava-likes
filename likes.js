// ==UserScript==
// @name         Strava Likes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Like all visible activities.
// @author       You
// @match        https://www.strava.com/dashboard*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('button.js-add-kudo').forEach(node => node.click())
})();
