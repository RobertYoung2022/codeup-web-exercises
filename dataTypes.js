// Exercise 1.1
var a = 1;
console.log(a);
var b = a++;
console.log(b);
var c = ++a;
console.log(c);

// var a = 1;
// console.log(a);
// var b = a++;
// console.log(b);
// var c = b++;
// console.log(c);
// var d = c++;
// console.log(d);

// var a = 1;
// console.log(a);
// var b = ++a;
// console.log(b);
// var c = ++b;
// console.log(c);
// var d = ++c;
// console.log(d);


//Exercise 1.2
var d = "hello";
d++;
console.log(d);

var e = false;
e++;
console.log(e);

//Exercise 1.3
var perplexed;
perplexed + 2;
console.log(perplexed);

var perplexed = 4;
perplexed + 2;
console.log(perplexed);

//Exercise 1.4
var price = 2.7;
price.toFixed(2);
console.log(price);

//Exercise 1.5
// var price = "2.7";
// price.toFixed(2);
// console.log(price);

//Exercise 1.6
isNaN(0)

isNaN(1)

isNaN("")

isNaN("string")

isNaN("0")

isNaN("1")

isNaN("3.145")

isNaN(Number.MAX_VALUE)

isNaN(Infinity)

isNaN("true")

isNaN(true)

isNaN("false")

isNaN(false)

console.log(isNaN());
// to illustrate why the isNaN() function is needed:
NaN == NaN