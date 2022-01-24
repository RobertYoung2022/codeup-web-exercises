"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);

    let konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let userInput = [].length;

    $(function(){
        $(document).keyup(function (e){

            if(e.keyCode === konami)
            alert("Correct Key");
        })
    })
});