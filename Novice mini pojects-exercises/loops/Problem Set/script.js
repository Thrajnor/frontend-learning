var console;
console.log("print all -10 - 19");
var x = -10;
while (x <= 19) {
    console.log(x);
    x += 1;
}
console.log("print even 10 - 40");
x = 10;
while (x <= 40) {
    if ((x % 2) === 0) {
        console.log(x);
    }
    x += 1;
}
console.log("print odd 300 - 333");
x = 300;
while (x <= 333) {
    if (x % 2 !== 0) {
        console.log(x);
    }
    x += 1;
}
console.log("print all num // by 5 and 3 between 5 - 50");
x = 5;
while (x <= 50) {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log(x);
    }
    x += 1;
}