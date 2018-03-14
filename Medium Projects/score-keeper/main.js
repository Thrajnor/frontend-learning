/*jslint devel: true */
var document;
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var reset = document.getElementById("reset");
var maxinput = document.getElementById("max");
var max = document.getElementById("max").value;
var scoretab1 = document.getElementById("score1");
var scoretab2 = document.getElementById("score2");
var range = document.getElementById("range");
var score1 = 0;
var score2 = 0;
range.innerHTML = max;
scoretab1.innerHTML = score1;
scoretab2.innerHTML = score2;

/*Start Max*/
document.body.addEventListener("input", function () {
    "use strict";
    max = document.getElementById("max").value;
    range.innerHTML = max;
});
/*End Max*/

/*Start player 1*/

var player1func = function () {
    "use strict";
    score1 += 1;
    scoretab1.innerHTML = score1;
    if (score1 >= max) {
        player1.removeEventListener("click", player1func);
        player2.removeEventListener("click", player2func);
        scoretab1.classList.add("winner");
    }
    if (score1 === score2) {
        document.body.classList.add("even");
        document.body.classList.remove("blue");
        document.body.classList.remove("red");
    } else if (score1 > score2) {
        document.body.classList.add("red");
        document.body.classList.remove("blue");
        document.body.classList.remove("even");
    } else {
        document.body.classList.add("blue");
        document.body.classList.remove("even");
        document.body.classList.remove("red");
    }
};

var player1event = function () {
    "use strict";
    player1.addEventListener("click", player1func);
};

player1event();

/*End player 1*/
/*Start player 2*/

var player2func = function () {
    "use strict";
    score2 += 1;
    scoretab2.innerHTML = score2;
    if (score2 >= max) {
        player1.removeEventListener("click", player1func);
        player2.removeEventListener("click", player2func);
        scoretab2.classList.add("winner");
    }
    if (score1 === score2) {
        document.body.classList.remove("blue");
        document.body.classList.remove("red");
    } else if (score1 > score2) {
        document.body.classList.add("red");
        document.body.classList.remove("blue");
    } else {
        document.body.classList.add("blue");
        document.body.classList.remove("red");
    }
};

var player2event = function () {
    "use strict";
    player2.addEventListener("click", player2func);
};

player2event();

/*End player 2*/

reset.addEventListener("click", function () {
    "use strict";
    score1 = 0;
    score2 = 0;
    scoretab1.innerHTML = score1;
    scoretab2.innerHTML = score2;
    player1event();
    player2event();
    scoretab1.classList.remove("winner");
    scoretab2.classList.remove("winner");
    document.body.classList.remove("blue");
    document.body.classList.remove("red");
});