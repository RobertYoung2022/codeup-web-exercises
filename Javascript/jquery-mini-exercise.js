// using jquery:
//     1. give all table cells a black border
// 2. remove all bullet points from the unordered list items
// 3. change the font family of the entire page to luxurious roman
// -&ndash;&gt; <link rel=“preconnect” href=“https://fonts.googleapis.com”>
//     <link rel=“preconnect” href=“https://fonts.gstatic.com” crossorigin>
//     <link href=“https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Questrial&display=swap” rel=“stylesheet”>
//     -&ndash;&gt;font-family: ‘Abril Fatface’, cursive;
// font-family: ‘Questrial’, sans-serif;
// 4. give each section a unique id
// 5. using the unique id’s give each section a different background color
// 6. give 3 elements the same class name of “highlight”
// 7. give each of those 3 elements a bright yellow background
// 8. BONUS: when you click on the image, make the image larger than what it currently is

//  1. give all table cells a black border

$('#table').css('border' , '1px solid black');
$('td').css('border' , '1px solid black');

// 2. remove all bullet points from the unordered list items

$('ul').css({'list-style' : 'none'});

// 3. change the font family of the entire page to luxurious roman

// 4.
