function validateLogin(event) {
    event.preventDefault();
    let validForm = true;
    const email = loginForm.email.value;
    const pword = password.value;


    /* form validation - START */




    /* form validation - END */

    let myAccounts = JSON.parse(localStorage.getItem('accounts'));


    let checkAccEmail = myAccounts.find(myAcc => myAcc.email === email);
    let myPw = decrypt(checkAccEmail.pw).toString(CryptoJS.enc.Utf8);
    let userDetails = [];

    if (myPw !== pword){
        document.querySelector('#accountAlert').innerText = 'Account details does not exist!';
        document.querySelector('#accountAlert').style.display = 'block';
        validForm = false;
    } else {
        if (validForm) {
            console.log(checkAccEmail);
            userDetails.push(checkAccEmail)
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            localStorage.setItem('userToken', email.substring(0, email.lastIndexOf("@")) + Math.floor((Math.random() * 1000) + 1));
            localStorage.setItem('smoker', checkAccEmail.smoker);
            localStorage.setItem('status', checkAccEmail.status);
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