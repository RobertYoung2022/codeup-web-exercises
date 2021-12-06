"use strict";

console.log("Welcome to Objects");

// WAY TO START AN OBJECT


//If you can include data, please do


let birthdayProperty = {
    month: "October",
    day: 2,
    year: 1988,
    getDetails: function () {
        return this.month + ", " + this.day + " " + this.year
    }
};

let person = {
    name: "Robert Young",
    birthday: birthdayProperty,
    isTall: true,
};

console.log(person);


function createPerson(name) {
    return {
        codeName: name,
        greeting: function() {
            console.log("Hello, my name is " + name);
        }
    }

}
let personTwo = createPerson("Big Boy");
let personThree = createPerson("Mac");

personThree.greeting();

let dog = {
    name: "Max",
    breed: "Pitbull",
    colors: [
        "brown",
        "black",
        "white",
    ],
    sex: "M",
    isFloofer: true,
    bark: function (loud) {
        if (loud){
            console.log("Woof Woof");
        } else {
            console.log("ruf ruf");
        }
    },
    dogDetails: function () {
        return this.colors[0] + " " + this.breed + " " + this.name;
    }
};

dog.dogDetails([0])

dog.bark()

    // OBJECT LITERAL EX. let x = {}

// let person2 = new Object(); // LONG WAY


// Coded after variable was
/*person["name"] = "Robert Young";
//use when you want to dynamically create properties
person.birthday = "October, 2";
person.isTall = true;*/


/*
let array = [1, 2, 3, true, false];
console.log(array);
*/



function createDog(name, colors, breed) {
    return {
        name: name,
        breed: breed,
        colors: colors,
        sex: "M",
        isFloofer: true,
        bark: function (loud) {
            if (loud){
                console.log("Woof Woof");
            } else {
                console.log("ruf ruf");
            }
        },
        dogDetails: function () {
            return this.colors[0] + " " + this.breed + " " + this.name;
        }
    }
};


console.log(createDog("Barry", "black", "Lab"))

let collectionOfDogs = []

collectionOfDogs.push(createDog('Him','black', 'mutt'));
collectionOfDogs.push(createDog('Fido','mixed', 'Golden'));
collectionOfDogs.push(createDog('Chef','brown', 'Shepperd'));

collectionOfDogs.forEach(function (dog) {
    console.log(dog.dogDetails())
});

console.log(collectionOfDogs[1]);

