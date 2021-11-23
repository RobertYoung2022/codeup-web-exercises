//Exercise 1.1
var a = 1;
console.log(a);
var b = a++;
console.log(b);
var c = ++a;
console.log(c);
/*
var a = 1;
console.log(a);
var b = a++;
console.log(b);
var c = b++;
console.log(c);
var d = c++;
console.log(d
var a = 1;
console.log(a);
var b = ++a;
console.log(b);
var c = ++b;
console.log(c);
var d = ++c;
console.log(d);
*/

//Exercise 1.2
var d = "hello";
d++;
console.log(d);
//NaN
var e = false;
e++;
console.log(e);
//1


//Exercise 1.3
var perplexed = 1;
perplexed + 2;
console.log(perplexed);
//NaN


//Exercise 1.4
var price = 2.7;
price.toFixed(2);
console.log("Exercise 1.4 answer is " + price);
//2.70


//Exercise 1.5
var price = "2.7";
price.toString(2);
console.log("Exercise 1.5 answer is " + price);
//NaN

//Exercise 1.6
isNaN(0);
console.log(isNaN());
//false
isNaN(1);
console.log(isNaN());
//false
isNaN("");
console.log(isNaN());
//true
isNaN("string");
console.log(isNaN());
//true
isNaN("0");
console.log(isNaN());
//true
isNaN("1");
console.log(isNaN());
//true
isNaN("3.145");
console.log(isNaN());
//false
isNaN(Number.MAX_VALUE);
console.log(isNaN());
//true
isNaN(Infinity);
console.log(isNaN());
//false
isNaN("true");
console.log(isNaN());
//true
isNaN(true);
console.log(isNaN());
//true
isNaN("false");
console.log(isNaN());
//true
isNaN(false);
console.log(isNaN());
//false

//Exercise 1.7
console.log(!true)
// false
console.log(!false)
//true
console.log(!!true)
//true
console.log(!!false)
//false
console.log(!!0)
//false
console.log(!!-0)
//false
console.log(!!1)
//true


//Exercise 2
//Checking length of Hello Codeup
var sample = "Hello Codeup";
console.log(sample.length);
//Made Hello Codeup all lower case
console.log(sample.toLowerCase());
//Appended text to the end of statement
sample += " Students";
console.log(sample);
//Replacing student with class
let r = sample;
console.log(r.replace('Students' , 'Class'));
//Index of c
console.log(sample.indexOf("c"));

//Index of C
console.log(sample.indexOf("C"));

//Substring of Codeup
console.log(sample.substring(6 , 12));

//Exercise 3.1
const kidsMovies = 3;
let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;

console.log( 'Little Mermaid cost $' + kidsMovies * littleMermaid + ' to rent for ' + littleMermaid.value + ' days.');
console.log( 'Brother Bear cost $' + kidsMovies * brotherBear + ' to rent for ' + brotherBear.value + ' days.');
console.log( 'Hercules cost $' + kidsMovies * hercules + ' to rent for ' + hercules.value + ' days.');

//Exercise 3.2


//Exercise 4
var username = 'codeup';
var password = 'notastrongpassword';

//Create a variable that holds a boolean value for each of the following conditions:

// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

// let cIndex = sample.indexOf("C");
// console.log(sample.substring (cIndex, (sample.indexOf("C")+ -1 ) - cIndex));

// console.log(!NaN);