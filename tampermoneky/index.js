// ==UserScript==
// @name        Tinder Unblur
// @namespace   https://tampermonkey.net/
// @match       https://*.bumble.com/*
// @version     1.0.0
// @author      Dark_Ville
// @description show votes, show online status, and change location on bumble
// ==/UserScript==

const {hostname} = document.location;



(async function() {
    'use strict';
const url = `https://${hostname}/mwebapi.phtml?SERVER_GET_ENCOUNTER`
const fetched = await fetch(url)
console.log(fetched)
})();