/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwidGVzdFwiKTtcblxuZnVuY3Rpb24gY2hlY2tFbWFpbFZhbGlkaXR5KGV2ZW50KSB7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcbiAgICBpZiAoZW1haWwudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIGVtYWlsLnNldEN1c3RvbVZhbGlkaXR5KFwiRW1haWwgaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgICAgICBlbWFpbC5zZXRDdXN0b21WYWxpZGl0eShcIk11c3QgaW5jbHVkZSBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbWFpbC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGNoZWNrRW1haWxWYWxpZGl0eSk7XG5cbmZ1bmN0aW9uIGNoZWNrWmlwQ29kZVZhbGlkaXR5KGV2ZW50KSB7XG4gICAgY29uc3QgemlwY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwY29kZVwiKTtcbiAgICBpZiAoemlwY29kZS52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgICAgemlwY29kZS5zZXRDdXN0b21WYWxpZGl0eShcIlpJUCBDb2RlIG11c3QgYmUgYSA1IGRpZ2l0IG51bWJlclwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoemlwY29kZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgemlwY29kZS5zZXRDdXN0b21WYWxpZGl0eShcIlpJUCBjb2RlIGlzIHJlcXVpcmVkXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB6aXBjb2RlLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpXG4gICAgfVxufVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBjb2RlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjaGVja1ppcENvZGVWYWxpZGl0eSk7XG5cblxuZnVuY3Rpb24gY2hlY2tQYXNzd29yZFZhbGlkaXR5KGV2ZW50KSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcbiAgICBpZiAocGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICAgIHBhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KFwiUGFzc3dvcmQgZG9lcyBub3QgZnVsZmlsbCByZXF1aXJlbWVudHNcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICBwYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eShcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFzc3dvcmQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQYXNzd29yZFJlcXVpcmVtZW50cygpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpO1xuICAgIGNvbnN0IHBhc3N3b3JkUmVxcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmQtcmVxdWlyZW1lbnRzXCIpLmNoaWxkcmVuO1xuICAgIC8vIExlbmd0aCByZXF1aXJlbWVudFxuICAgIGlmIChwYXNzd29yZC52YWxpZGl0eS50b29TaG9ydCkge1xuICAgICAgICBwYXNzd29yZFJlcXNbMF0uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhc3N3b3JkUmVxc1swXS5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gICAgfVxuICAgIC8vIFNwZWNpYWwgQ2hhcmFjdGVyIHJlcXVpcmVtZW50XG4gICAgY29uc3Qgc3BlY2lhbHMgPSAvWyFAIyQlJj9dL1xuICAgIGlmICghc3BlY2lhbHMudGVzdChwYXNzd29yZC52YWx1ZSkpIHtcbiAgICAgICAgcGFzc3dvcmRSZXFzWzFdLnN0eWxlLmNvbG9yPSdyZWQnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFzc3dvcmRSZXFzWzFdLnN0eWxlLmNvbG9yPSdncmVlbic7XG4gICAgfVxuICAgIC8vIFVwcGVyY2FzZSByZXF1aXJlbWVudHNcbiAgICBjb25zdCBjYXBpdGFscyA9IC9bQS1aXS87XG4gICAgaWYgKCFjYXBpdGFscy50ZXN0KHBhc3N3b3JkLnZhbHVlKSkge1xuICAgICAgICBwYXNzd29yZFJlcXNbMl0uc3R5bGUuY29sb3I9J3JlZCc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXNzd29yZFJlcXNbMl0uc3R5bGUuY29sb3I9J2dyZWVuJztcbiAgICB9XG4gICAgLy8gUmVzZXQgYWxsIHRvIGJsYWNrIGlmIGZpZWxkIGlzIGVtcHR5XG4gICAgaWYgKHBhc3N3b3JkLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IHJlcSBvZiBwYXNzd29yZFJlcXMpXG4gICAgICAgIHJlcS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgfVxufVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgXG4gICAgKCk9PnsgXG4gICAgICAgIGNoZWNrUGFzc3dvcmRWYWxpZGl0eSgpO1xuICAgICAgICB1cGRhdGVQYXNzd29yZFJlcXVpcmVtZW50cygpO1xuICAgICAgICB9XG4pO1xuXG5mdW5jdGlvbiBjaGVja0NvbmZpcm1WYWxpZGl0eShldmVudCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG4gICAgY29uc3QgY29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLXBhc3N3b3JkJyk7XG4gICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9IGNvbmZpcm0udmFsdWUpIHtcbiAgICAgICAgY29uZmlybS5zZXRDdXN0b21WYWxpZGl0eShcIkRvZXMgbm90IG1hdGNoIHBhc3N3b3JkXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uZmlybS5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLXBhc3N3b3JkJykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja0NvbmZpcm1WYWxpZGl0eSlcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgY2hlY2tFbWFpbFZhbGlkaXR5KCk7XG4gICAgY2hlY2taaXBDb2RlVmFsaWRpdHkoKTtcbiAgICBjaGVja1Bhc3N3b3JkVmFsaWRpdHkoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9