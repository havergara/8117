$(function(){

    $('.discussionTitle').on('click', function (){
        // $('.discussionContent').slideDown()
    })

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const page_type = urlParams.get('id')

    alert(page_type);
})