"use strict";


$(function () {
    function gitLastCommit(user) {
        return fetch(`https://api.github.com/users/${user}/events/public`, {
            headers: {
                'authorization': 'GITHUB'
            }
        }).then(response => response.json())
            .then(users => {
                console.log(users[0]);
                let lastCommit = `<p>${users[0].actor.login} Last Commit: ${users[0].created_at}</p>`
                $(".container").html(lastCommit)
            }).catch(err => console.log(err))
    }


    console.log(gitLastCommit("RobertYoung2022"));

    function wait(num) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`${num}`)
            }, num)
        })
    }

    wait(3000).then((num) => $(".container").append((`<p>You'll have to push faster! ${num/2000} seconds</p>`)))

})();
