$(function (){

    $('.parentNav').on('click', function (){

        if (sessionStorage.getItem("userToken") !== null) {
            if($(this).next('ul').is(":visible")){
                $(this).next('ul').slideUp('slow');
            } else{
                $(this).next('ul').slideDown('slow');
            }
        } else {
            window.location.href = 'login.html';
        }
    });

    $('.mobileNav').on('click', function (){
        if($(this).next('ul').is(":visible")){
            $(this).next('ul').slideUp('slow');
        } else{
            $(this).next('ul').slideDown('slow');
        }
    });

    if (sessionStorage.getItem("userToken") === null) {
        document.querySelector('.subNav').style.display = 'none';
    } else {
        document.querySelector('#loginLink').style.display = 'none';
        document.querySelector('#signUpLink').style.display = 'none';

        document.querySelector('#logoutLink').style.display = 'block';
    }

    logoutLink.firstChild.addEventListener('click', function () {
        sessionStorage.clear();
        window.location.href = 'index.html';
    });

})