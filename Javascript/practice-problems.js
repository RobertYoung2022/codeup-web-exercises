"use strict";

// write a function that takes a string as argument and returns the number of vowels contained in that string.
//     The vowels are “a”, “e”, “i”, “o”, “u”.
// input: "helicopter"
// output: 4
// reason: there are 4 vowels in the input word helicopter




// write a function that counts the number of duplicate characters.
//     example input: "adsjfdsfsfjsdjfhacabcsbajda"
// expected output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

function duplicateCharCount(str) {

    if(str) {
        let obj = {};
        for(let i = 0; i < str.length; i++) {
            if(obj[str[i]]){
                obj[str[i]] += obj[str[i]];
            }else {
                obj[str[i]] = 1;
            }
        }
        console.log(obj);
    }

}

duplicateCharCount("adsjfdsfsfj");



// MOVIE PROJECT CODE
// fetch('https://your-random-url.glitch.me/movies')
//     .then(response => response.json())
//     .then(data => console.log(data));
