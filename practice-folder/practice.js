/*function tryToGetADrink(isAtBar, bac, age, cashOnHand) {   // the function definition contains PARAMETERS

    let canHaveADrink = (isAtBar && bac < .08 && age >= 21 && cashOnHand >= 5.00);

    if (canHaveADrink && isAtBar) { // true or false
        console.log("Have a brewski my guy!")
    } else if (canHaveADrink && !isAtBar) {  // it was not true
        console.log("Brew to go!")
    } else {
        console.log("Really can't help you");
    }
}

console.log("First invocation: ")
tryToGetADrink(true, .07, 20, 5.01); // when you CALL (invoke) the function, you pass ARGUMENTS

console.log("Second invocation: ")
tryToGetADrink(true, .07, 23, 500.01)*/

/*
Write a function which determines is today is a good day to fly.
Its definition has two parameters: a boolean which informs
if it's cloudy and a number which tells us how many planes are scheduled to fly
If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!
*/


/*function flyHigh(cloudyDays, flightScheduled) {

    let planesFly = (cloudyDays && flightScheduled >= 10);

    if (planesFly) {
        console.log("Great day to fly!")
    } else if (!planesFly) {
        console.log("We can fly, I guess");
    }
}

flyHigh(true, Infinity);*/

//Function Return
//Example 1
function getFullName(firstName, lastName){
    return "Robert " + "Young";
}
console.log(getFullName("Robert", "Young"));

//Example 2
function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(getFullName("Robert", "Young"));

//Example 3
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let fullName = function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(
    fullName("Robert", "Young")
);

/*
write 4 functions which each take in two parameters and return a number.  They will, respectively:
Return the sum of two numbers
Return the difference of two numbers
Return the product of two numbers
Return the dividend of two numbers*/

function add(sum1, sum2) {

    return sum1 + sum2;
}

console.log(add(5, 3));

function sub(sum1, sum2) {

    return sum1 - sum2;
}

console.log(sub(12, 3));

function multiple(sum1, sum2) {

    return sum1 * sum2;
}

console.log(multiple(2, 3));

function divide(sum1, sum2) {

    return sum1 / sum2;
}

console.log(divide(12, 3));

function leftover(sum1, sum2) {

    return sum1 / sum2;
}

console.log(leftover(11, 8));
//round to whole number