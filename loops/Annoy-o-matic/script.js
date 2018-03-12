var alert;
var prompt;
var answer;
while (!(answer === "yes" || answer === "yeah")) {
    answer = prompt("Are We There yet ?");
    if (answer === "yes" || answer === "yeah") {
        alert("We finally made it !!!");
    }
}

//for (answer = prompt("Are We There yet ?"); answer !== "yes" || answer !== "yeah"; answer = prompt("Are We There yet ?")) {
//    if (answer === "yes" || answer === "yeah") {
//        alert("We finally made it !!!");
//    }
//}
