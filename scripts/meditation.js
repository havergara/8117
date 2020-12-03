document.getElementById('breath').addEventListener("click", startFunc)
function startFunc(){
    document.getElementById('breath').removeEventListener("click", startFunc)
    document.getElementById("breath").innerHTML = "relax..."
    var index = 0;
    var actions = ["Breath In","Breath In.","Breath In..","Breath In...",
     "Hold","Hold.","Hold..","Hold...", "Breath Out","Breath Out.","Breath Out..","Breath Out...", "Hold","Hold.","Hold..","Hold..."];
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
