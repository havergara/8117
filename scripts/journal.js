x = 0
document.getElementById("prompt").addEventListener("click", function(){
    newPrompt = ["Who are you grateful for?", "Who in your life do you feel most vulnerable with?", "Admit something: ","What about you feels hardest to love?","What are you proudest of yourself for today?","What would you say to your younger self?","How would I describe my relationship with myself?","What have I tolerated from people in the past that I no longer have space for?","Biggest experience of loss this year:","Todays Goals:", "Lessons learned today:","What makes you greatful?","How would you describe love?"," What is it about life that is so great?","When everything is quiet how do you feel?"];
    $('#randomPrompt').fadeOut(function (){
        document.getElementById("randomPrompt").innerHTML = newPrompt[x];
    }).fadeIn();
    x += 1;
    if (x >= newPrompt.length){
        x = 0
    }
    myday.value = '';
});

document.getElementById('save').addEventListener("click", function(){
    var file = document.getElementById("myday").value;
    localStorage.setItem("myday",file);

});

document.getElementById('load').addEventListener("click", function(){
    var load = localStorage.getItem("myday");
    //document.getElementById("myday").innerHTML = load;
    document.getElementById("myday").value = load;
});

// Redirect user to login page if user is not logged in
if (localStorage.getItem("userToken") === null) {
    window.location.href = 'login.html';
}
// END - Redirect user to login page if user is not logged in