$(function (){

    $('#mobileNav').click(function (){
        if($('.menu').is(":visible")){
            $('.menu').slideUp('slow');
        } else{
            $('.menu').slideDown('slow');
        }
    });

})