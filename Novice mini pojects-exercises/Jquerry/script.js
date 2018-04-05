var $;
var divs = $("div");
var highlight = $(".highlight");
var third = $("#third");
var color;


$("input").last().attr("type", "color");

divs.css("background", "purple");

highlight.css({
    width: "200px",
    color: "red"
});

third.css("border", "1px solid orange");

divs[0].style.color = "pink";

$("input:first-of-type").click(function () {
    "use strict";
    color = $("input").last().val();
    $("body").css("background", color);
});



$("body").click(function () {
    "use strict";
    color = $("input").last().val();
    $("body").css("background", color);
});

