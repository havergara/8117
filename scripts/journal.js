x = 0
document.getElementById("prompt").addEventListener("click", function(){
    newPrompt = ["Who are you grateful for?", "Who in your life do you feel most vulnerable with?", "Admit something: ","what about you feels hardeset to love?","What are you proudest of yourself for today?","What would you say to your younger self?","How would i describe my relationship with myself?","what have i tolerated from people in the past that I no longer have space for?","Biggest experience of loss this year:","Todays Goals", "Lessons learned today","What makes you greatful","How would you describe love"," What is it about life that is so great","When everything is quiet how do you feel"];
    document.getElementById("randomPrompt").innerHTML = newPrompt[x];
    x += 1;
    if (x >= newPrompt.length){
        x = 0
    }
});

document.getElementById('save').addEventListener("click", function(){
    var file = document.getElementById("myday").value;
    localStorage.setItem("myday",file);

});

document.getElementById('load').addEventListener("click", function(){
    var load = localStorage.getItem("myday");
    document.getElementById("myday").innerHTML = load;
});