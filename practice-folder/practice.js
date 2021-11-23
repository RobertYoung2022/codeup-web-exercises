function tryToGetADrink(isAtBar, bac , age, cashOnHand){   // the function definition contains PARAMETERS

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

onsole.log("Second invocation: ")
tryToGetADrink(true, .07, 23, 500.01)

/*
Write a function which determines is today is a good day to fly.
Its definition has two parameters: a boolean which informs
if it's cloudy and a number which tells us how many planes are scheduled to fly
If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!
*/

/*let cloudyDays = false;
let flightScheduled = 15;*/

function flyHigh(cloudyDays, flightScheduled) {

    let planesFly = (cloudyDays && flightScheduled >= 10);

    if (planesFly) {
        console.log("Great day to fly")
    } else if (!planesFly) {
        console.log("We can fly I guess");
    }
}

flyHigh();

