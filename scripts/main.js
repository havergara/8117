$(function (){

    $('.mobileNav, .parentNav').on('click', function (){
        if($(this).next('ul').is(":visible")){
            $(this).next('ul').slideUp('slow');
        } else{
            $(this).next('ul').slideDown('slow');
        }
    });

})

alert('project')