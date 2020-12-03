function validateLogin(event) {
    event.preventDefault();
    let validForm = true;
    const email = loginForm.email.value;
    const pword = password.value;


    /* form validation - START */




    /* form validation - END */

    let myAccounts = JSON.parse(localStorage.getItem('accounts'));

    let checkAccEmail = myAccounts.find(myAcc => myAcc.email === email);
    let checkAccPw = myAccounts.find(myAcc => myAcc.pw === pword);
    let userDetails = [];

    if (typeof checkAccEmail === 'undefined' || typeof checkAccPw === 'undefined'){
        document.querySelector('#accountAlert').innerText = 'Account details does not exist!';
        document.querySelector('#accountAlert').style.display = 'block';
        validForm = false;
    } else {
        if (validForm) {
            console.log(checkAccEmail);
            userDetails.push(checkAccEmail)
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            localStorage.setItem('userToken', email.substring(0, email.lastIndexOf("@")) + Math.floor((Math.random() * 1000) + 1));
        }
    }

    return validForm;
}

loginForm.addEventListener('submit', function (event) {
    if (validateLogin(event)) {
        //this.submit(); <------ to submit the form content
        window.location.href = 'dashboard.html';
    }
});