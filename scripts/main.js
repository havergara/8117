myJSONForum = [
    {
        "id":"1",
        "discussion":"Question & Answer",
        "description":"Sometimes that's just the way it has to be. Sure, there were probably other options, but he didn't let them enter his mind. It was done and that was that. It was just the way it had to be.",
        "topics": [
            {
                "id":"1", "title":"Start the class standing", "creator":"Admin", "dateCreated":"11/30/2020 12:04 PM", "views":"205",
                "responses": [
                    {"by":"Vivien Marie", "date":"12/03/2020 07:08 AM"},
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"2", "title":"Cold showers", "creator":"Admin", "dateCreated":"11/28/2020 08:04 PM", "views":"105",
                "responses": [
                    {"by":"Jack Pearl", "date":"12/03/2020 06:00 PM"},
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"3", "title":"Diet suggestions", "creator":"Admin", "dateCreated":"11/28/2020 3:01 PM", "views":"200",
                "responses": [
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"4", "title":"Question about meditation in general", "creator":"Admin", "dateCreated":"11/27/2020 12:04 PM", "views":"180",
                "responses": [
                    {"by":"Kay Adams", "date":"12/03/2020 07:08 AM"}
                ]
            }
        ],
    },
    {
        "id":"2",
        "discussion":"Upcoming Events",
        "description":"It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease. The doctor said it would be less than a year. That gave him a year to live, something he'd failed to do with his daily drudgery of a routine that had passed as life until then.",
        "topics": [
            {
                "id":"5", "title":"5 hours all around yoga", "creator":"Admin", "dateCreated":"11/30/2020 12:04 PM", "views":"205",
                "responses": [
                    {"by":"Vivien Marie", "date":"12/03/2020 07:08 AM"},
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"6", "title":"Sound healing, teaching ang training", "creator":"Admin", "dateCreated":"11/28/2020 08:04 PM", "views":"105",
                "responses": [
                    {"by":"Jack Pearl", "date":"12/03/2020 06:00 PM"},
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"7", "title":"Advance principles of meditation - [Video]", "creator":"Admin", "dateCreated":"11/28/2020 3:01 PM", "views":"200",
                "responses": [
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"8", "title":"5 days meditation training", "creator":"Admin", "dateCreated":"11/27/2020 12:04 PM", "views":"180",
                "responses": [
                    {"by":"Kay Adams", "date":"12/03/2020 07:08 AM"}
                ]
            }
        ]
    },
    {
        "id":"3",
        "discussion":"Science behind meditation",
        "description":"It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. \"See daddy, I told you that they are real!\" his daughter excitedly proclaimed.",
        "topics": [
            {
                "id":"9", "title":"Meditate while biking", "creator":"Admin", "dateCreated":"11/30/2020 12:04 PM", "views":"205",
                "responses": [
                    {"by":"Vivien Marie", "date":"12/03/2020 07:08 AM"},
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"10", "title":"How to train your facia", "creator":"Admin", "dateCreated":"11/28/2020 08:04 PM", "views":"105",
                "responses": [
                    {"by":"Jack Pearl", "date":"12/03/2020 06:00 PM"},
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"11", "title":"Static progressive meditation", "creator":"Admin", "dateCreated":"11/28/2020 3:01 PM", "views":"200",
                "responses": [
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            },
            {
                "id":"12", "title":"Tendons needs stress and rest", "creator":"Admin", "dateCreated":"11/27/2020 12:04 PM", "views":"180",
                "responses": [
                    {"by":"Kay Adams", "date":"12/03/2020 07:08 AM"}
                ]
            }
        ]
    },
    {
        "id":"4",
        "discussion":"I Need Help!",
        "description":"The day had begun on a bright note. The sun finally peeked through the rain for the first time in a week, and the birds were sinf=ging in its warmth. There was no way to anticipate what was about to happen. It was a worst-case scenario and there was no way out of it.",
        "topics": [
            {
                "id":"13", "title":"I don't know how to meditate, what should I do?", "creator":"Admin", "dateCreated":"11/30/2020 12:04 PM", "views":"205",
                "responses": [
                    {"by":"Vivien Marie", "date":"12/03/2020 07:08 AM"},
                    {"by":"Bernie Jones", "date":"12/03/2020 07:08 AM"}
                ]
            }
        ]
    }
];

$(function (){

    $('.parentNav').on('click', function (){

        if (localStorage.getItem("userToken") !== null) {
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

    if (localStorage.getItem("forumJson") === null){
        localStorage.setItem('forumJson', JSON.stringify(myJSONForum));
    }

    if (localStorage.getItem("userToken") === null) {
        document.querySelector('.subNav').style.display = 'none';
    } else {
        document.querySelector('#loginLink').style.display = 'none';
        document.querySelector('#signUpLink').style.display = 'none';

        document.querySelector('#logoutLink').style.display = 'block';
    }

    logoutLink.firstChild.addEventListener('click', function () {
        localStorage.clear();
        window.location.href = 'index.html';
    });

})