"use strict";
            //  0       1       2          3        4       5       = 6 total
// let students = ["Rob", "Mina", "Jason", "Justin", "Mark", "Justin"];
// console.log(students.length);

let favFoods = ["Fried Rice", "Cajun Alfredo", "Ramen", "Chicken Wings", "Ribeye Steak"];
console.log(favFoods);

//Get the name of Jason from array
/*console.log(students);
console.log(students[2]);*/


//Adding Last Names to both Justin via concatenation
//Access that Justin's value
//re-assign that value to equal justin + lastname
// console.log(students[3]); // Justin
// console.log(students[3] = students[3] + " Sebastian");  // console.log(students[3] += " Sebastian");
// console.log(students[3]); // Justin + Sebastian = Justin Sebastian


// Add a rating to FavFoods array

console.log(favFoods[0] = favFoods[0] += ": #1");
console.log(favFoods[1] = favFoods[1] += ": #3");
console.log(favFoods[2] = favFoods[2] += ": #2");

//Control + Command + space = EMOJIS
// 😲 😄 👍🏾

let students2 = ["Rob", "Mina", "Jason", "Justin", "Mark", "Justin"];
let indexOfJustin = students2.indexOf("Justin");
console.log(indexOfJustin);
let lastIndexOfJustin = students2.lastIndexOf("Justin")
console.log(lastIndexOfJustin);


//METHODS
//ACCESSING ELEMENTS FROM AN ARRAY
//nameOfArray[position withing the array] 💡 arrays always start at zero

let valIndexZero = students2[0];
console.log(valIndexZero);
let favAnimal = ["dog"];
let bobby = ["Robert", 33, "Chicago", "Macbook", ["Fried Rice", "Cajun Alfredo", "Ramen"], 2021, favAnimal];

let age = bobby[1];
console.log(age);

let innerArr = bobby[4];
console.log(innerArr);


//Extracting an index in a nested array
console.log(innerArr[1]);
//Quick version of above
console.log(bobby[4][1]);

function desiredAge(num) {
    return num - 10;
}
console.log(desiredAge(age));

//FUNCTIONS             Parameters
function nameOfFunction(num1, num2){
    return num1 + num2;
}
//               this is an      arguments
console.log((nameOfFunction( 4, 5)));

// METHODS
// methods are pre-existing functions

Math.random() // any random number 0 and 1
// Ex. Function is Math and .random is the method
console.log("PRINT THIS OUT") //


//Command + click on preset function or method to gain reference information
parseInt(); //


function nameOfFunction3(num1){
    return num1;
}
console.log(nameOfFunction3(4, function () {
    console.log("hey there!")
}));

let ages = [14, 23, 89, 5, 25, 36];
let agesLength = ages.length;
// console.log("Age Length is = " + agesLength);
for(let startingPoint = 0; startingPoint <= ages.length - 1; startingPoint++) {

    console.log(ages[startingPoint] * 2);
}

//RULE OF THUMB
// ++ if you want to