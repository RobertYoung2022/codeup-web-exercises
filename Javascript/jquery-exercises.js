"use strict";
//ID SELECTORS
// $(document).ready(function(){
//     alert('The DOM has finishing loading!');
// });
// //#3
// $("#heading").click(function() {
//     alert($('#heading').text())
// });
// //#4
// let content = $('#phone-2');
// alert($(content).text());

//CLASS SELECTORS
// $('.phone-head').removeClass();
//
// $('.codeup').css('border' , '1px solid red');

//
// $('li').css({'font-size' : '20px'});

//
// $('p').css({'background' : 'yellow'});
// $('h1').css({'background' : 'yellow'});
// $('li').css({'background' : 'yellow'});


// alert($('.about-details').text());
//
//
// $('h1 , p , li').css({'background' : 'lightgrey'});

let colorChange = $('h1');

//CHANGE COLOR ON CLICK
colorChange.click(function () {
   colorChange.css({'background' : 'green'});
});

let fontChange = $('p');

//CHANGE FONT SIZE ON DBL-CLICK

fontChange.dblclick(function () {
    fontChange.css({'font-size' : '18px'});
});

let listChange = $('li');

//ADD HOVER EFFECT TO LIs

listChange.hover(function ()  {
    $(this).css({'color' : 'red'});
// used this instead of the variable to hover over because this works on each li while the variable hovers over all
} , function () {
    $(this).css({'color' : 'black'});
});
