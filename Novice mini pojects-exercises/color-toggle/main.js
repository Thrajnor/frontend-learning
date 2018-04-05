/*jslint devel: true */
var document;
var toggler = document.getElementById("btn");

toggler.addEventListener("click", function () {
    "use strict";
    document.body.classList.toggle("toggle");
});