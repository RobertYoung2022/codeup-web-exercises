// $("dd").addClass("invisible");

$("button").click(function () {
   if ($("dd").css("visibility") == "hidden")
       $("dd").toggleClass("invisible" , "visible");
   else $("dd").toggleClass("invisible" , "hidden");
});

$("dt").click(function () {
    $(this).toggleClass("dt").css({"background-color" : "lightblue"})
})