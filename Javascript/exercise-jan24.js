
$(".border").css("border" , "2px solid black");

// let borderCSS = $(".border").css();
// console.log(borderCSS);


//change h1 to say "Happy Monday"
$("h1").html("Happy Monday!");
$("h1").html();

// add a class of border to my h2

$("#red").addClass("border"); // GETTER
$("#red").removeClass("border"); // SETTER -->

// .toggleClass()

$("h1").click(function () { // this function is what is going to happen when h1 is clicked
    $("h1").toggleClass("highlight"); // this is the action you want to happen after you click
})