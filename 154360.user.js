// ==UserScript==
// @name hwhats
// @namespace http://www.sebbert.com/
// @description nigga yoloswag
// @include http://*.hardware.no/*
// ==/UserScript==

var image = "url('data:image/png;base64,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')";
var hat = document.querySelector("#header h1 .hat");
hat.style.backgroundImage = image;