// Login validation
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const regexUser = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/
const regexPass = /(?=.*[A-Z])/


document.querySelector('#username').addEventListener('change', function (e) {
    if (e.target.value.match(regexUser)) {
        username.style.color = 'green';
    }
})

document.querySelector('#password').addEventListener('keyup', function (e) {
    if (e.target.value.match(regexPass)) {
        password.style.color = 'green';
    }
})

