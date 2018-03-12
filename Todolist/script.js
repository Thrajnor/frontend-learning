var $;
var alert;
/*Start func*/
function done() {
    "use strict";
    $("#todos").on("click", ".rowP", function () {
        $(this).children().toggleClass("done");
        $(this).toggleClass("active");
    });
}
function removeTodo() {
    "use strict";
    $("#todos").on("click", "span", function (event) {
        $(this).parent().slideUp(300, function () {
            $(this).remove();
        });
        event.stopPropagation();
    });
}
function addNewTodo() {
    "use strict";
    $("#addNew").keypress(function (e) {
        if (e.which === 13 && $("input").val() === "") {
            alert("Please Enter Anything!");
        } else if (e.which === 13) {
            var temp = $("input").val();
            $("#todos").append("<div class='row rowP'><span><i class='fas fa-trash-alt'></i></span><p class='para'>" + temp + "</p></div>");
            $("input").val("");
        }
    });
}
function plusInputStyle() {
    "use strict";
    $("i:first").on("click", function () {
        $("#addNew").slideToggle("350");
    });
}
function init() {
    "use strict";
    addNewTodo();
    plusInputStyle();
    done();
    removeTodo();
}
/*End func*/
init();