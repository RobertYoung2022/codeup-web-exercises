"use strict";
//creates a float number
// function

function getRandomInt(min, max){
    const randomNumber = Math.random() * (max - min) + min;
    // console.log("before Floor || Ceil", randomNumber);
    // console.log("after Floor", Math.floor(randomNumber));
    // console.log("after Ceil", Math.ceil(randomNumber));
    // console.log("after rounding", Math.round(randomNumber));
    return Math.floor(randomNumber);
};
// console.log(getRandomInt(0, 100));

//old version of using to the power method
console.log(Math.pow(8, 2));
// new version of using the power method
console.log(8 ** 2);

//Pi
console.log("Pi", Math.PI);
console.log("Pi", Math.PI.toFixed(2));


//Euler's number
console.log("E", Math.E);

//Float Point Problem
console.log(0.1 * 0.2);
console.log(((10 * 0.1)) * ((0.2 * 10)) / 10);