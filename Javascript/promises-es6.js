// Promises

// a js object, used as a placeholder, used often with requests

function add(a, b) {
    return a + b;
}

add(4, 6) // trigger immediately once it's called

$.ajax("\"https://api.github.com/zen\"")
    .done(function (res) {
        console.log(res);
    }) // waits for the response before it trigger executed

// similar to a conditional, in that a function will not run unless "x" condition (typically timely condition) is ready

// PROMISE STATES:

// PENDING - waiting for the response/waiting for the condition to be met

// RESOLVED - when condition waiting for is successfully met - your resolved function will execute

// REJECTED - when event happens, but the condition is not meet successfully,
// fails -- trigger the function that is going to handle the failed error

// FETCH REQUESTS

// comes from FETCH API - doesn't have t9o be embedded into our code in order to us

// GET Request using FETCH API

// fetch()
fetch("https://api.github.com/zen") // make the request // send info to make the request

    .then(function (res) {
            console.log(res);
            console.log("successful!")
        },
        function (err) {
            console.log(err);
            console.log("failed!")
        })

//
fetch("https://www.boredapi.com/activity")
    .then(function (data) {
        console.log(data)
    })
// arrow function
fetch("https://www.boredapi.com/activity")
    .then(data => console.log(data))

//
fetch("https://www.boredapi.com/activity")
    .then(data => {
        console.log(data);
        console.log(data.body)
    })
