var i;
function isEven(num) {
    "use strict";
    return num % 2 === 0;
}
isEven();

//function factorial(num) {
//    "use strict";
//    if (num === 0) {
//        return 1;
//    }
//    x = num;
//    while (num > 1) {
//        num -= 1;
//        x *= num;
//    }
//    return x;
//}

function factorial(num) {
    "use strict";
    var x = 1;
    for (i = 2; i <= num; i += 1) {
        x *= i;
    }
    return x;
}
factorial();

function kebabToSnake(str) {
    "use strict";
    return str.replace(/-/g, "_");
}
kebabToSnake("code-code-code");