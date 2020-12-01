function validateLogin(event) {
    event.preventDefault();
    let validForm = true;
    const email = loginForm.email.value;
    const pword = password.value;


    /* form validation - START */




    /* form validation - END */


    if (validForm) {
        sessionStorage.setItem('userToken', email.substring(0, email.lastIndexOf("@")) + Math.floor(Math.random()));
    }

    return validForm;
}

loginForm.addEventListener('submit', function (event) {
    if (validateLogin(event)) {
        //this.submit(); <------ to submit the form content
        window.location.href = 'dashboard.html';
    }
});