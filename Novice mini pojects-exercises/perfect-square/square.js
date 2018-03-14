/*jslint devel: true */
var alert;
var prompt;
function isNaturalNumber(n) {
    "use strict";
    n = n.toString();
    var n1 = Math.abs(n),
        n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}

var userAge = prompt("What is your age!");
if (userAge < 0) {
    alert("Error!");
} else if (isNaturalNumber(Math.sqrt(userAge))) {
    alert("Your Age is Perfect Square!");
} else if (userAge === 21) {
    alert("Happy 21th Birthday!");
} else if (userAge % 2) {
    alert("Your Age Is Odd!");
} else {
    alert("Happy " + userAge + "th Birthday!");
}