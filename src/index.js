console.log("test");

function checkEmailValidity(event) {
    const email = document.querySelector('#email');
    if (email.validity.valueMissing) {
        email.setCustomValidity("Email is required");
    }
    else if (email.validity.typeMismatch) {
        email.setCustomValidity("Must include a valid email address");
    }
    else {
        email.setCustomValidity("");
    }
}

document.querySelector("#email").addEventListener("input", checkEmailValidity);

function checkZipCodeValidity(event) {
    const zipcode = document.querySelector("#zipcode");
    if (zipcode.validity.patternMismatch) {
        zipcode.setCustomValidity("ZIP Code must be a 5 digit number");
    }
    else if (zipcode.validity.valueMissing) {
        zipcode.setCustomValidity("ZIP code is required")
    }
    else {
        zipcode.setCustomValidity("")
    }
}
document.querySelector("#zipcode").addEventListener("input", checkZipCodeValidity);


function checkPasswordValidity(event) {
    const password = document.querySelector('#password');
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Password does not fulfill requirements");
    }
    else if (password.validity.valueMissing) {
        password.setCustomValidity("Password is required");
    }
    else {
        password.setCustomValidity("");
    }
}

function updatePasswordRequirements() {
    const password = document.querySelector('#password');
    const passwordReqs = document.querySelector(".password-requirements").children;
    // Length requirement
    if (password.validity.tooShort) {
        passwordReqs[0].style.color = 'red';
    }
    else {
        passwordReqs[0].style.color = 'green';
    }
    // Special Character requirement
    const specials = /[!@#$%&?]/
    if (!specials.test(password.value)) {
        passwordReqs[1].style.color='red';
    }
    else {
        passwordReqs[1].style.color='green';
    }
    // Uppercase requirements
    const capitals = /[A-Z]/;
    if (!capitals.test(password.value)) {
        passwordReqs[2].style.color='red';
    }
    else {
        passwordReqs[2].style.color='green';
    }
    // Reset all to black if field is empty
    if (password.value.length == 0) {
        for (let req of passwordReqs)
        req.style.color = 'black';
    }
}
document.querySelector("#password").addEventListener("input", 
    ()=>{ 
        checkPasswordValidity();
        updatePasswordRequirements();
        }
);

function checkConfirmValidity(event) {
    const password = document.querySelector('#password');
    const confirm = document.querySelector('#confirm-password');
    if (password.value != confirm.value) {
        confirm.setCustomValidity("Does not match password");
    }
    else {
        confirm.setCustomValidity("");
    }
}

document.querySelector('#confirm-password').addEventListener('input', checkConfirmValidity)

const submit = document.querySelector('button');
submit.addEventListener('click', (event)=>{
    checkEmailValidity();
    checkZipCodeValidity();
    checkPasswordValidity();
})