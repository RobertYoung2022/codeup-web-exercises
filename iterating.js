(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Mike", "Godfrey", "Mina", "Yong"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log(names);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names.length);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for(let allNames = 0; allNames < names.length; allNames++) {
    //     console.log("Your name is " + names[allNames]);
    // }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // names.forEach(function (allNames){
    //     console.log('Your name is: ' + allNames + '.');
    // });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let first = [1, 2, 3, 4, 5];
   function num1(firstArr){
        console.log(firstArr[0]);
    }
    num1(first);

    let second = [1, 2, 3, 4, 5];
    function num2(secondArr){
        console.log(secondArr[1]);
    }
    num2(second);

    let last = [1, 2, 3, 4, 5];
    function num3(lastArr){
        console.log(lastArr[4]);
    }
    num3(last);

})();