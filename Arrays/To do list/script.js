var prompt;
var alert;
var a1;
var a2;
var a3;
var todos = ["shiet", "mymymy"];
var console;
function addTodo() {
    "use strict";
    a2 = prompt("What is the name of task?");
    todos.push(a2);
    alert("Todo added");
}
function listTodo() {
    "use strict";
    console.log("************************");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("************************");
}
function removeTodo() {
    "use strict";
    a3 = prompt("What's the number of stuff you want me to delete ?");
    todos.splice(a3, 1);
    alert("Todo removed");
}

while (a1 !== "quit") {
    a1 = prompt("What would you want me to do?");
    if (a1 === "new") {
        addTodo();
    } else if (a1 === "list") {
        listTodo();
    } else if (a1 === "quit") {
        alert("Thanks for using our App !!!");
    } else if (a1 === "remove") {
        removeTodo();
    } else {
        alert("Type correctly!!!");
    }
}
