"use strict";

let myDogs = ["Mike", "Xavier" , "Bill", "Jibri" ];
console.log("before ", myDogs);

//UNSHIFT method adds additional argument(s) to the beginning of an array
myDogs.unshift("Nick");
console.log("after unshift ", myDogs);

//PUSH method adds additional argument(s) to the end of an array
myDogs.push("Yun");
console.log("after push ", myDogs);

//You can add multiple arguments to an array with a comma 🤩

//POP method removes the last argument from the end of an array
myDogs.pop();
console.log("after pop ", myDogs);

//SHIFT method removes the first argument from the beginning of an array
myDogs.shift();
console.log("after shift ", myDogs);

//indexOf method will find an index for a

console.log("Fetching index of \"Mike\"...")
console.log(myDogs.indexOf("Mike"));

//Exposure to FILTER method
console.log(
    myDogs.filter(function (boys) {
    return boys.includes('r');
}));

// SLICE method
/*let sliced = myDogs.slice(0, 4);
console.log("sliced", sliced);*/


// REVERSE method
console.log("orginal", myDogs);
console.log("reversing array");
console.log("reversed", myDogs.reverse());

//       SORT Method if its a list of string: alphabetical , numbers: low to high

console.log("sort my boys in alphabetical order ", myDogs.sort());

let numbers = [76, 1, 123, 7000,];
console.log(numbers.sort( ));

//      JOIN method
console.log("myDogs as string", myDogs.join(", "));

//      SPLIT method

let searchTerm = "curry, chicken, lots-garlic, one hour";
let parsedSearchTerms = searchTerm.split(","); // empty string will separate every word into individual arguments
console.log("Parsed Search Terms", parsedSearchTerms);

// Using SPLIT.REVERSE.JOIN to flip argument
let myName = "Bobby";
console.log("Flipped name", myName.split("").reverse().join());

//  SPREAD operator ...

console.log([...myDogs, ...numbers]);


//      logged 9.2 in the front of array
console.log([9.2, ...numbers]);
//      logged 9.2 at the end of array
console.log([...numbers, 9.2]);
//      logged 9.2 in the front and back of array
console.log([9.2, ...numbers, 9.2]);






