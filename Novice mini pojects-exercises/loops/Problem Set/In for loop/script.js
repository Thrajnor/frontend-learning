var console;
var x;
console.log("print all -10 - 19");
for (x = -10; x <= 19; x += 1) {
    console.log(x);
}
console.log("print even 10 - 40");
for (x = 1; x <= 40; x += 1) {
    if ((x % 2) === 0) {
        console.log(x);
    }
}
console.log("print odd 300 - 333");
for (x = 300; x <= 333; x += 1) {
    if (x % 2 !== 0) {
        console.log(x);
    }
}
console.log("print all num // by 5 and 3 between 5 - 50");
for (x = 5; x <= 50; x += 1) {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log(x);
    }
}