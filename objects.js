(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {};
    person.first = "Robert";
    person.last = "Young";
    // console.log(person);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return "Hello, " + this.first + " " + this.last;
    }
    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    //  MY ANSWER #2
    /*shoppers.forEach(function(shopper) {
        if(shopper.amount <= 200){
            console.log("Hello, " + shopper.name + ". You spend $" + shopper.amount + ". " + "Making you ineligible for a discount" +  ". Your total is $" + (shopper.amount).toFixed(2));
        } else {
            console.log("Hello, " + shopper.name + ". You spend $" + shopper.amount + ". " + "Making you eligible for a discount of 12%. Your discount is $" + (shopper.amount * .12).toFixed(2) +  ". Your new total is $" + (shopper.amount * .88).toFixed(2));
        }
    });*/
    //  PREWORK FOR #2
    /*if(shoppers[0].amount <= 200) {
        console.log(shoppers[0].amount * .12);
    } else {
        console.log("You didn't spend enough for the discount")
    }
        //calculation for 12% discount
        shoppers[0].amount * .12
    }
        alert("Hello, " + this.name + ". You spend $" + this.amount + "." + "Making you eligible for a discount of 12%" +  "Your total after discount is $" + discount);
        alert("Hello, " + this.name + ". You spend $" + this.amount + "." + "Making you ineligible for a discount" +  "Your total is $" + discount);
    console.log(shoppers[0].amount * .12);*/
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            bookNumber: 1,
            title: "Way of the Turtle",
            author: {
                firstName: "Curtis",
                lastName: "Faith",
            }
        },
        {
            bookNumber: 2,
            title: "The Power of Habit",
            author: {
                firstName: "Charles",
                lastName: "Duhigg",
            }
        },
        {
            bookNumber: 3,
            title: "The Art of War",
            author: {
                firstName: "Sun",
                lastName: "Tzu",
            }
        },
        {
            bookNumber: 4,
            title: "This is not a T-Shirt",
            author: {
                firstName: "Bobby",
                lastName: "Hundreds",
            }
        },
        {
            bookNumber: 5,
            title: "The Alchemist",
            author: {
                firstName: "Paulo",
                lastName: "Coelho",
            }
        },
    ];

    // console.log("My favorite book is " + books[3].title + ". The authors' name is " + books[3].author.firstName + " " + books[3].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    /*books.forEach(function(book) {
        console.log("Book # " + book.bookNumber + "\n" + "Title: " + book.title + "\n" + "Author: " + book.author.firstName + " " + book.author.lastName + "\n---");
    });*/

    //String Literal
    books.forEach(function (book, index) {
        console.log(`Book # ${index + 1} \n Title: ${book.title} \n Author: ${book.author.firstName} ${book.author.lastName} \n ---- `);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
 /*       function createBook(bookTitle, authorFirstName, authorLastName) {
            return {
                title: bookTitle;
                author: {
                    firstName: authorFirstName,
                    lastName: authorLastName,
                },
                showBookInfo: function (){
                    console.log(`Book # ${index + 1} \n Title: ${this.title} \n Author: ${book.author.firstName} ${book.author.lastName} \n ---- `);
                }
            }
    }

    const newBook = [

    ]*/
})();