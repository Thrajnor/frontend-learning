var console;
var i;
var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 1, 1, 1, 1];
var array3 = [1, 1, 2, 1, 1];
var array4 = ['a', 'b', 'c', "d"];

function printReverse(arr) {
    "use strict";
    for (i = arr.length - 1; i >= 0; i -= 1) {
        console.log(arr[i]);
    }
}

function isUniform(arr) {
    "use strict";
    var count = 1;
    for (i = 1; i < arr.length + 1; i += 1) {
        if (count === arr.length) {
            return true;
        } else if (arr[i] === arr[0]) {
            count += 1;
        } else {
            return false;
        }
    }
}

function sumArray(arr) {
    "use strict";
    var total = 0;
    for (i = 0; i < arr.length; i += 1) {
        if (isNaN(arr[i])) {
            console.log("Array is not a set of numbers");
            return false;
        } else {
            total += arr[i];
        }
    }
    return total;
}

function maxArray(arr) {
    "use strict";
    var max = arr[0];
    for (i = 1; i < arr.length; i += 1) {
        if (isNaN(arr[i])) {
            console.log("Array is not a set of numbers");
            return false;
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}