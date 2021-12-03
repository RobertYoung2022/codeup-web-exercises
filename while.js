"use strict";
// 1. WHILE Loop
let i = 2
/*while(i < 131072) {
    console.log(i);
    i *= 2;
}*/

/*while(i <= 65536) {
    console.log(i);
    i *= 2; //i = i * 2
}*/

// 2. DO WHILE Loop

// CORRECT ANSWER
let allCones = Math.floor(Math.random() * 50) + 50;
do{
    let conesToPurchase = Math.floor(Math.random() * 5) + 1;
    if(conesToPurchase <= allCones) {
        console.log(conesToPurchase + " cones sold...");
        allCones -= conesToPurchase;
    } else {
        console.log("Cannot sell you " + conesToPurchase + " cone I only have " + allCones + "...")
    }
    console.log(allCones)
} while(allCones > 0)

console.log("Yay! Sold all the cones");

/*function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}*/

/*do {
    let coneToSell = getRandomNumber(50, 100);
    let coneSold = Math.floor(Math.random() * 5) + 1;
    console.log("We started with " + coneToSell + "."+ " We sold " + coneSold +" cones");
} while(coneToSell >= coneSold)) {

}*/
