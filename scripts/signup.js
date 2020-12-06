
signupForm.addEventListener('submit', validate);
function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
}
function validateEmail(input_str) {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(input_str);
}

function validatePassword(input_str){
    var re = /^[A-Za-z]\w{7,14}$/;
    return re.test(input_str);
}
function validate(a) {
    var valid = true;
    let myAlert = "Invalid! ";

    if (signupForm.firstName.value === "") {
        signupForm.querySelector('#firstNameWarning').innerHTML = "*Please enter a First Name*";
        valid = false;
    }
    if (signupForm.lastName.value === "") {
        signupForm.querySelector('#lastNameWarning').innerHTML = "*Please enter a Last Name*";
        valid = false;
    }
    if (signupForm.age.value === "") {
        signupForm.querySelector('#ageWarning').innerHTML = "*Please enter an Age*";
        valid = false;
    }
    if (signupForm.address.value === "") {
        signupForm.querySelector('#addressWarning').innerHTML = "*Please enter a Address*";
        valid = false;
    }
    var email = signupForm.email.value
    if (!validateEmail(email)){
        signupForm.querySelector('#emailWarning').innerHTML = "*Please enter an Email*";
        valid = false;
    }

    var password = signupForm.password.value
    var passwordVerify = signupForm.verifyPassword.value
    if ( password !== passwordVerify || !validatePassword(password)){
        signupForm.querySelector('#passwordWarning').innerHTML = "*Please enter Valid passwords, Passwords must Match*"
        valid = false;
    }

    var phone = signupForm.phone.value;
    if (!validatePhoneNumber(phone)){
        signupForm.querySelector('#phoneWarning').innerHTML = "*Please enter a Phone Number*";
        valid = false;
    }
    // old email/phone validation without regex
    // if (signupForm.email.value === "") {
    //     signupForm.querySelector('#emailWarning').innerHTML = "*Please enter a Email*";
    //     valid = false;
    // }
    // if (signupForm.phone.value === "") {
    //     signupForm.querySelector('#phoneWarning').innerHTML = "*Please enter a Phone number*";
    //     valid = false;
    // }
    if (signupForm.occupation.value === "") {
        signupForm.querySelector('#occupationWarning').innerHTML = "*Please enter an Occupation*";
        valid = false;
    }
    if (signupForm.title.options.selectedIndex === 0) {
        valid = false;
        signupForm.querySelector('#titleWarning').innerHTML = "*Please Select an Option*";
    }
    if (signupForm.status.options.selectedIndex === 0) {
        valid = false;
        signupForm.querySelector('#statusWarning').innerHTML = "*Please Select an Option*";
    }
    if(signupForm.smoker.options.selectedIndex === 0){
        valid = false;
        signupForm.querySelector('#smokerWarning').innerHTML="Please Select an Option*";
    }
    if(signupForm.therapist.options.selectedIndex === 0){
        valid = false;
        signupForm.querySelector('#therapistWarning').innerHTML="*Please Select an Option*";
    }
    if(signupForm.physicalActivity.options.selectedIndex === 0){
        valid = false;
        signupForm.querySelector('#physicalActivityWarning').innerHTML="*Please Select an Option*";
    }
    if (valid === true) {
        let accounts = [];
        let userDetails = { fname:"", lname:"", age:"", address:"", email:"", pw:"", phone:"", occupation:"", title:"", status:"", smoker:"", therapist:"", activity:"" };

        userDetails.fname = signupForm.firstName.value;
        userDetails.lname = signupForm.lastName.value;
        userDetails.age = signupForm.age.value;
        userDetails.address = signupForm.address.value;
        userDetails.email = signupForm.email.value;

        let myPassword = signupForm.password.value;
        let encrypted = CryptoJS.AES.encrypt(myPassword, 'password');
        userDetails.pw = encrypted.toString();

        userDetails.phone = signupForm.phone.value;
        userDetails.occupation = signupForm.occupation.value;
        userDetails.title = signupForm.title.value;
        userDetails.status = signupForm.status.value;
        userDetails.smoker = signupForm.smoker.value;
        userDetails.therapist = signupForm.therapist.value;
        userDetails.activity = signupForm.physicalActivity.value;

        if (localStorage.getItem('accounts') === null){
            accounts.push(userDetails);
            localStorage.setItem('accounts', JSON.stringify(accounts));
        } else {
            let myAccounts = JSON.parse(localStorage.getItem('accounts'));
            let checkAcc = myAccounts.find(myAcc => myAcc.email === userDetails.email);

            if (typeof checkAcc !== 'undefined') {
                myAlert = myAlert + 'Email already exist!';
                valid = false;
            }

            myAccounts.push(userDetails);
            localStorage.setItem('accounts', JSON.stringify(myAccounts));
        }

        var passEmail = signupForm.email.value;
        localStorage.setItem("userEmail", passEmail);

        //var display = localStorage.getItem("userEmail")
        var passPassword = signupForm.password.value;
        localStorage.setItem("userPass", passPassword);

        var userFullName = signupForm.firstName.value + ' ' + signupForm.lastName.value;
        localStorage.setItem("userFullName", userFullName);

        var age = signupForm.age.value;
        localStorage.setItem("age", age);

        if(signupForm.smoker.options.selectedIndex === 1){
           localStorage.setItem("smoker", "1")
        }else{
            localStorage.setItem("smoker", "0")
        }

        if (signupForm.status.options.selectedIndex === 1 || signupForm.status.options.selectedIndex === 4) {
            localStorage.setItem("status", "1")
        }else{
            localStorage.setItem("status", "0")
        }

       // alert(display)
    }

    if (valid === false) {
        alert(myAlert);
        a.preventDefault();

    } else {
        alert("Submitted");
    }
}

signupForm.firstName.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#firstNameWarning').innerHTML = "";
    }
});
signupForm.lastName.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#lastNameWarning').innerHTML = "";
    }
});
signupForm.age.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#ageWarning').innerHTML = "";
    }
});
signupForm.address.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#addressWarning').innerHTML = "";
    }
});
signupForm.email.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#emailWarning').innerHTML = "";
    }
});

signupForm.password.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#passwordWarning').innerHTML = "";
    }
});
signupForm.verifyPassword.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#passwordWarning').innerHTML = "";
    }
});

signupForm.phone.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#phoneWarning').innerHTML = "";
    }
});
signupForm.occupation.addEventListener("change", function(){
    if (this.value != ""){
        signupForm.querySelector('#occupationWarning').innerHTML = "";
    }
});

signupForm.querySelector('#title').addEventListener("blur", function(){
    if(signupForm.title.options.value != ""){
        titleWarning.innerHTML = "";
    }
});
signupForm.querySelector('#status').addEventListener("blur", function(){
    if(signupForm.status.options.value != ""){
        statusWarning.innerHTML = "";
    }
});

signupForm.querySelector('#smoker').addEventListener("blur", function(){
    if(signupForm.smoker.options.value != ""){
        smokerWarning.innerHTML = "";
    }
});

signupForm.querySelector('#therapist').addEventListener("blur", function(){
    if(signupForm.therapist.options.value != ""){
        therapistWarning.innerHTML = "";
    }
});

signupForm.querySelector('#physicalActivity').addEventListener("blur", function(){
    if(signupForm.physicalActivity.options.value != ""){
        physicalActivityWarning.innerHTML = "";
    }
});
