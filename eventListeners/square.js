/*jslint devel: true */
var document;
var background = document.querySelector("body");

var button = document.querySelector("button");
    
    
button.addEventListener("click", function () {
    "use strict";
    if (background.color !== background.style.background = "purple") {
        background.style.background = "purple";
    } else {
        background.style.background = "white";
    }
});