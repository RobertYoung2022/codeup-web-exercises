"use strict";

// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.

/*let askForOddNumber = prompt("Pick an odd number between 1 - 50");
let answer = true
while(answer) {
    if(askForOddNumber % 2 == 0) {
        console.log("Try Again");
        askForOddNumber = prompt("Pick an odd number between 1 - 50");
        break;
    } else {
        answer = false;
    }
    console.log("okay good");
}*/
//Instructor answer to this
/*let userNumber = 0;
do{
    userNumber = Number(prompt("Gimme an odd number between 1 - 50"));
    //check to see if between 1 -50
    if(userNumber < 1 || userNumber > 50) {
        alert("Number out of bounds");
    } else if (userNumber % 2 === 0) {
        alert("Number is not odd");
    } else if(isNaN(userNumber)) {
        alert("That's not a number")
    } else {
        alert("You got it right!");
        break;
    }
} while(true)*/

//         Same solution minus the break
/*while(answer) {
    if(askForOddNumber % 2 == 0) {
        console.log("Try Again");
        askForOddNumber = prompt("Pick an odd number between 1 - 50");
    } else {
        answer = false;
        console.log("okay good");
    }
}*/

// Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.

let askForOddNumber2 = prompt("Pick an odd number between 1 - 50");
let answer2 = askForOddNumber2 % 2 == 0
let middle = 1; middle <= 50; middle++
for(let middle = 1; middle <= 50; middle++) {
        if (answer2) {
            continue;
    }
    console.log("All the odd numbers " + answer2 + " minus yours lol.")
}

/*for(middle of answer2){

    if(answer2)
    {
        continue;
    }
    console.log("All the odd numbers " + answer2 + "minus yours lol.")
}*/

//      CORRECT ANSWER
let userNumber2 = Number(prompt("Gimme an odd number between 1 - 50"));
// console.log("Number to skip: " + userNumber2)

for(let i = 1; i <=50; i += 2) {
    if(i === userNumber2) {
        console.log("Yikes: skipping number " + userNumber2);
        continue;
    }
    console.log("Here is an odd number " + i);
}

