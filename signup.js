/*const form = document.querySelector('.signup-form');
const feedback = document.querySelector(.'feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const email = form.email.value;
    const emailPattern = /^[a-z,A-Z,0-9,-,_,.]+@[a-z,A-Z]+\.[a-z,A-Z]{2,3}$/;

    if(emailPattern.test(email)){
       feedback.textContent = 'Thank you for signing up!';
    }else {
       feedback.textContent = 'Please enter valid email address.';
    }
});*/

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid e-mail address!");
    } else {
        email.setCustomValidity("");
    }
});