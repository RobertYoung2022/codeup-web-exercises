"use strict";


// 2.
// Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)

/*function showMultiplicationTable(table) {
    for(let number = 1; number <= 10; number++) {
        console.log("Multiplication table for your number is " + table * number);
    }
}
showMultiplicationTable(7);*/

//  3.
/*function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function showMult() {

    for(let number = 1; number <= 10; number++) {
        let here = getRandomIntInclusive(20, 200);

        if(here % 2 == 0) {
            console.log(here + " The number is even.");
        } else {
                console.log(here + " The number is odd.");
            }
    }
}
showMult();*/

//Another example for #3
/*for (let i = 0; i < 10; i++) {
    let rando = Math.floor(Math.random() * 180) + 20; // Checking for even or odd numbers

    if(rando % 2 === 0) {
        console.log(rando + ' is even');
    } else {
        console.log(rando + ' is odd');
    }

}*/

//  4.
/*for(let a = 1; a <= 9; a++) {
    let s = '';
    for(let b = 1; b <= a; b++) {
        s += a;
    }
    console.log(s);
}*/

for(let i = 1; i <= 9; i++) {
    let output = '';
    for(let j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

//Using the repeat method to #4
/*for(let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}*/

// Create a for loop that uses console.log to create the output shown below

//  5.
for(let i = 100; i >= 1; i-= 5) {
    console.log(i);
}



