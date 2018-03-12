/*Start vars*/
var rgb;
var difficulty = 3;
var winBox = boxes[0];
var document;
var i;
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var header = document.getElementById("header");
var tryA = document.getElementById("tryAgain");
var rgbText = document.querySelector("h1");
var nColor = document.querySelector("#newColor");
var boxes = document.querySelectorAll("div#colorBox div");
var hardBoxes = [
    document.querySelector("#c4"), document.querySelector("#c5"), document.querySelector("#c6")
];
var span = [
    document.querySelector("#easy"), document.querySelector("#hard")
];

/*End vars*/

/*Start Func*/

function hideBox() {
    tryA.classList.remove("textHidden");
    this.classList.add("hidden");
    this.removeEventListener("click", hideBox);
}

function correct() {
    tryA.classList.remove("textHidden");
    tryA.textContent = "CORRECT !!!";
    winBox.classList.add("big");
    header.style.backgroundColor = rgb;
    for (i = 0; i < difficulty; i += 1) {
        boxes[i].addEventListener("click", newColor);
        boxes[i].style.backgroundColor = rgb;
        boxes[i].classList.remove("hidden");
        if (difficulty === 3) {
            easy.style.backgroundColor = rgb;
        } else {
            hard.style.backgroundColor = rgb;
        }
    }
}

function anyRgb() {
    "use strict";
    var temp = "RGB(" + rnum() + ", " + rnum() + ", " + rnum() + ")";
    return temp;
}

function rnum() {
    "use strict";
    var temp = Math.floor(Math.random() * 255);
    return temp;
}

function colorBox() {
    "use strict";
    boxes[i].style.backgroundColor = anyRgb();
}

function setupDifficultyBtn() {
    for (i = 0; i < span.length; i += 1) {
        span[i].addEventListener("click", function () {
            "use strict";
            this.classList.add("active");
            easy.classList.remove("active");
            hard.classList.remove("active");
            this.textContent === "EASY" ? difficulty = 3: difficulty = 6;
            for (i = 0; i < hardBoxes.length; i += 1) {
                this.textContent === "EASY" ? hardBoxes[i].classList.add("hidden"): hardBoxes[i].classList.remove("hidden");
            }
        });
    }
}
    

/*End Func*/

/*Start Main Logic*/

var newColor = function () {
    "use strict";
    var temp;
    if (difficulty === 3) {
        temp = Math.floor(Math.random() * 3);
        easy.style.backgroundColor = "#a07113";
        hard.style.backgroundColor = "white";
    } else {
        temp = Math.floor(Math.random() * 6);
        hard.style.backgroundColor = "#a07113";
        easy.style.backgroundColor = "white";
    }
    tryA.classList.add("textHidden");
    tryA.textContent = "Try Again";
    header.style.backgroundColor = "#a07113";
    winBox.classList.remove("big");
    for (i = 0; i < difficulty; i += 1) {
        boxes[i].removeEventListener("click", newColor);
        boxes[i].classList.remove("hidden");
        boxes[i].removeEventListener("click", correct);
        if (i === temp) {
            rgb = "RGB(" + rnum() + ", " + rnum() + ", " + rnum() + ")";
            rgbText.textContent = rgb;
            boxes[i].style.backgroundColor = rgb;
            winBox = boxes[i];
            boxes[i].addEventListener("click", correct);
            boxes[i].classList.remove("hidden");
            boxes[i].removeEventListener("click", hideBox);
        } else {
            colorBox();
            boxes[i].addEventListener("click", hideBox);
        }
    }
};

/*End Main Logic*/

/*Start Init*/
function init() {
    for (i = 0; i < hardBoxes.length; i += 1) {
        hardBoxes[i].classList.add("hidden");
    }
    setupDifficultyBtn();
    newColor();
    nColor.addEventListener("click", newColor);
    easy.addEventListener("click", newColor);
    hard.addEventListener("click", newColor);
}

init();

/*End Init*/


