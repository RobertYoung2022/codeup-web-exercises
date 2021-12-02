"use strict";

//Loops
// -- WHILE --
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

// -- DO WHILE --
//Executes the code before it checks then checks the conditional
/*let i = 3;
do{
    console.log("i before i++: ", i)
    i++;
    console.log("i after i++: ", i)
} while(i <= 15);*/

// EXAMPLE - loop through numbers 0 - 50 by 2s
let i = 0;
do{
    console.log("until we get to: ", i);
    i++;
    i++;
//    or i = i + 2;
} while(i <= 50);


//      After Lunch - Exercise
let i = 0
while(i <= 10){
    console.log("While Loop:", i);
    i++;
}

let r = 0
do{
    console.log("Do-While Loop:", r);
    r++;
} while(r <= 10)
// -- FOR --