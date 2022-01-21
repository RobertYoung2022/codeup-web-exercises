var letter = 'bJI*ENsd4fRAIR5VIrsRFA-ijgRar';
var i = 0;
var character = '';
while (i <= letter.length - 1){
    character = letter.charAt(i);
    if (!isNaN(character * 1)){
        console.log('is not a character');
    }else{
        if (character == character.toUpperCase()) {
            console.log('letter ' + character + ' is uppercase');
        }
        if (character == character.toLowerCase()){
            console.log('letter ' + character + ' is lowercase');
        }
    }
    i++;
}

$(".blue-bg").css("background-color", "blue");

$('#p-one').css({"color": "red", "font-size": "12px"});
//
// let readyStart = $(document).ready(function() {
//
// window.onload = function() {
//     alert('The page has finished loading!');
// }
// });
//
// console.log(readyStart)

$("h1 , p").css("border" , "1px solid black");
