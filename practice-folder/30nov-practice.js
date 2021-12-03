"use strict";

// Write a function that accepts the top three bowling scores and returns the average.
// Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
// Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case BONUS: write a function that returns “TheBestBowlingPlaceEver” and return it all lowercase with a space between each word
// Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables (call the function once per variable);
// Write a function that executes all of the above functions
// Copy and execute the following functions, and find the Error: (Hint: try console logging the result)

/*function topThree(score) {
    if (score >= 300 ) {
        console.log("You are the top bowler");
    } else if (score > 250 ) {
        console.log("You are the 2nd top bowler");
    } else {
        console.log("You are the 3rd top bowler");
    }
}
topThree()*/

/*
function topThree() {
    const score = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    score([300, 280, 276, 143, 105]);
    // let topBowler = (score / score.length) * score.length;
    return score;
}
console.log(topThree());
*/

function topThree(bowler1, bowler2, bowler3) {
    let avg = (bowler1 + bowler2 + bowler3) / 3;
    return avg;
}

console.log(topThree(300, 254, 100));

function bestScore(score1, score2, score3) {
    let bestScorer = score1;

    if (bestScorer < score2) {
        bestScorer = score2;
    }

    if (bestScorer < score3) {
        bestScorer = score3;
    }

    if ((bestScorer % 3 == 0) || (bestScorer % 5 == 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(bestScore(300, 23, 1));

/*function whatIsYourName(string) {
    return string.toLowerCase(0);
}
console.log(whatIsYourName("ThEbEsTbOwLiNgPlAcEever"));

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}*/

/*function whatIsYourName(string) {
    const str = "ThEbEsTbOwLiNgPlAcEever";
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return str;
}
console.log(whatIsYourName("ThEbEsTbOwLiNgPlAcEever"));*/

/*
const str = 'i have learned something new today';
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
console.log(str2);
*/

function bowlName(name, splitter) {

    const splits = name;
    return splits.split(" ");
}

// console.log(bowlName("ThEbEsTbOwLiNgPlAcEever");


