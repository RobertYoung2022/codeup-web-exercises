"use strict";
// 1. WHILE Loop
/*let i = 2
while(i < 131072) {
    console.log(i);
    i *= 2;
}*/

// 2. DO WHILE Loop
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

do {
    let coneToSell = getRandomNumber(50, 100);
    let coneSold = Math.floor(Math.random() * 5) + 1;
    console.log("We started with " + coneToSell + "."+ " We sold " + coneSold +" cones");
} while(coneToSell >= coneSold)) {

}
