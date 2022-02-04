// . ATTRIBUTES AND CSS

$("#button").click(function () {
   if ($("dd").css("visibility") == "hidden")
       $("dd").toggleClass("invisible" , "visible");
   else $("dd").toggleClass("invisible" , "hidden");
});

$("dt").click(function () {
    $(this).toggleClass("dt").css({"background-color" : "lightblue"});
});

//  TRAVERSING

//CHANGE BACKGROUND TO YELLOW FOR LAST CHILD OF UNORDERED LIST
$("#facts-button").click(function () {
    $("li:last-child").css({background : "yellow"})
});

$("h3").click(function () {
    $(this).next().children().css("font-weight" , "bold")
});

$("ul").click(function () {
   $(this).children("li:first-child").toggleClass("blue")
});