$(function (){

    $('.mobileNav').click(function (){
        if($(this).next('.menu').is(":visible")){
            $(this).next('.menu').slideUp('slow');
        } else{
            $(this).next('.menu').slideDown('slow');
        }
    });

})