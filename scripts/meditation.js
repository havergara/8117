document.getElementById('breath').addEventListener("click", startFunc)
function startFunc(){
    document.getElementById('breath').removeEventListener("click", startFunc)
    document.getElementById("breath").innerHTML = "relax..."
    var index = 0;
    var actions = ["Breathe In","Breathe In.","Breathe In..","Breathe In...",
     "Hold","Hold.","Hold..","Hold...", "Breathe Out","Breathe Out.","Breathe Out..","Breathe Out...", "Hold","Hold.","Hold..","Hold..."];
    breathInterval = setInterval(function () {
        if (index < actions.length) {
            document.getElementById("breath").innerHTML = (actions[index])
            index++;
        } else {
            index = 0
            //clearInterval(breathInterval);
        }
    }, 1000)
    
}

// Redirect user to login page if user is not logged in
if (localStorage.getItem("userToken") === null) {
    window.location.href = 'login.html';
}
// END - Redirect user to login page if user is not logged in