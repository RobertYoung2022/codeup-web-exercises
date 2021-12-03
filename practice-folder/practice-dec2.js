"use strict";

//Loops


//           -- WHILE --

//20 parking spots, 1 car driving around, ? how many times we'll have to drive around before finding a spot

/*while(condition){
    code here at every condition
}*/
/*while(car is unparked){
    keep driving
}*/

//Notes for structure of while loops
/*let parkingSpots = 20;
let aisles = 10
let movingCars = 1;
// if(parkingSpots == 0)
let isEmpty = false;*/

//         Infinite Loop ***DO NOT USE****
/*while(isEmpty == false){
    console.log(movingCars);
    movingCars++
}*/

/*let i = 0; //starting point
while(i < 10){
    console.log("iteration: ", i);
    i++;
    // breadkdown of i++
    // i = i + 1; 0 = 0 + 1 // 1
}*/


//      My Example for finding a parking spot
/*let car = 1;
let parkingSpot = 20;
while(car < parkingSpot){
    console.log('you drove around ' + car);
    car++;
}*/

//      Loop until your number is 15
/*let i = 0
while(i <= 15){
    console.log("loop number: ", i);
    i++;
}*/

//   Example from student
/*let numberOfCars = 20;
let usedSpots = 20;
let parked = false;
let counter = 0;
while(!parked){
    console.log("we're on loop: " + counter + "-----------------------")
    if(usedSpots == numberOfCars){
        console.log("there's no parking")
        numberOfCars--;
        console.log("num of cars: ", numberOfCars);
        counter++;
        console.log("counter: ", counter);
    } else  {
        parked = true;
        console.log("you found a parking spot")
        console.log("num of cars: ", numberOfCars);
        console.log("counter: ", counter);
    }
}*/



//      -- DO WHILE --

//Executes the code before it checks then checks the conditional
/*let i = 3;
do{
    console.log("i before i++: ", i)
    i++;
    console.log("i after i++: ", i)
} while(i <= 15);*/

//      EXAMPLE - loop through numbers 0 - 50 by 2s
/*let i = 0;
do{
    console.log("until we get to: ", i);
    i++;
    i++;
//    or i = i + 2;
} while(i <= 50);*/

//      After Lunch - Exercise
/*let i = 0
while(i <= 10){
    console.log("While Loop:", i);
    i++;
}*/

/*let r = 0
do{
    console.log("Do-While Loop:", r);
    r++;
} while(r <= 10)*/

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.

//         My version of the prompt() and alert() with a WHILE loop exercise
/*let password = "great";
let something = prompt("What is the correct password?");
let equal = false;
while(!equal) {
    if(password === something){
        equal = true
    } else{
        something = prompt("What is the correct password?");
    }
}
alert("You are Great");*/

//          Instructor Example for using prompt() and alert() with a WHILE loop
/*let correctPass = "secret";
let input = prompt("What is the password?");
while(input !== correctPass) {
    alert("Wrong password, try again!")
    input = prompt("Enter the password again?");
}

alert("Password Accepted");*/


//      -- FOR loops --


//          FOR loop structure
/*for(1; 2; 3;) {
    // code;
}*/

//1. create variable / starting point
//2. condition / stopping point
//3. times to run & display / how to iterate


//          FOR loop EXAMPLE #1
/*for(let i = 0; i <= 15; i++) {
    console.log("Your favorite number is: ", i);
}*/

//          FOR loop EXAMPLE #1.2
/*for(let x = 0; x <= 15; x+= 3) {
    console.log("Your favorite number is: ", x);
}*/

//          FOR loop EXAMPLE #2
/*let dozens = 0;
// want 4 dozens

for(let eggs = 0; eggs <= 48; eggs++) {
    dozens = eggs / 12;
    console.log("dozens: ", dozens);
    console.log("i: ", eggs);
}*/

//         *** NESTED FOR loop ***
/*for(let counter = 1; counter <=5; counter++) {
    console.log("1st counter: " + counter);
    for (let counterTwo = 5; counterTwo > 0; counterTwo--) {
        console.log("countdown: " + counterTwo);
    }
}*/

//          Example of FOR loop with an array
/*let animals = ["dog","horse", "frog", "cat"];
for(let x = 0; x < animals.length; x++) {
    console.log("Your favorite number is: "+  animals[x]);
}*/
