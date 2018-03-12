var console;
var array1 = [1, 2, "a", "t"];
var movies = [
    {
        title: "Truman's Show",
        rating: 4,
        hasWatched: true
    },
    {
        title: "Justice League",
        rating: 3,
        hasWatched: false
    },
    {
        title: "Forest Gump",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Batman v Superman",
        rating: 3.5,
        hasWatched: false
    }
];

function listMovies(arr) {
    "use strict";
    arr.forEach(function (i) {
        var temp;
        if (i.hasWatched === true) {
            temp = "watched ";
        } else {
            temp = "not watched ";
        }
        
        console.log(
            "You have " + temp + "\"" + i.title + "\" - " + i.rating + " stars"
        );
    });
}

function createString(arr) {
    "use strict";
    var result = "You have ";
    if (arr.hasWatched === true) {
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + arr.title + "\" - " + arr.rating + " stars";
    return result;
}

function listMovies2(arr) {
    "use strict";
    arr.forEach(function (arr) {
        console.log(createString(arr));
    });
}




//console.log(
//    "You have " + if (arr[i].hasWatched === true) {console.log("watched ")} else {console.log("not watched ")} + "\"" + arr[i].title + "\" - " + arr[i].rating + "stars"
//);