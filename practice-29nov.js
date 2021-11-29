"use strict";

function reverseString(str) {
   let sis = "";
   for (let i = str.length - 1; i >= 0; i--) {
   sis += str[i];
   }
   return sis;
}
console.log(reverseString("Tanauchea"))


/*function reverseString2(str) {
 let sisNameToReverse = "";
 let reverseSisName = sisNameToReverse.split("").reverse().join("");
}

console.log(reverseSisName("Tanauchea"));*/


//Rainy I would wear a rain coat with a hood
//Sunny I would wear shorts, t-shirt and sunglasses
//Snowy I would wear hat, snow coat, and boots

 let weather = "snowy";

// if weather is sunny, wear shorts
 if (weather === "sunny") {
  console.log("wear shorts");
 } else if (weather === "rainy") {
  console.log("wear rain coat");
 } else if (weather === "snowy") {
  console.log("wear boots and hat");
 } else {
  console.log("wear whatever you like")
 }

// create 5 schools grades
/*function topStudent (stuGrades) {
 if (stuGrades >= 90 ) {
  console.log("Top tier A student right here");
 } else if (stuGrades >= 80 ) {
  console.log("B student right here");
 } else if (stuGrades >= 70 ) {
  console.log("C student right here");
 } else if (stuGrades >= 60) {
  console.log("D student right here");
 } else {
  console.log("Let's us start over from the top");
 }
}
topStudent(88);*/

// create 5 schools grades + specific parameters
function topStudent (stuGrades) {
 if (stuGrades <= 99 && stuGrades >= 90) {
  console.log("Top tier A student right here");
 } else if (stuGrades <= 89 && stuGrades >= 80) {
  console.log("B student right here");
 } else if (stuGrades <= 79 && stuGrades >= 70) {
  console.log("C student right here");
 } else if (stuGrades <= 69 && stuGrades >= 60) {
  console.log("D student right here");
 } else {
  console.log("Let's us start over from the top");
 }
}

topStudent(0);
