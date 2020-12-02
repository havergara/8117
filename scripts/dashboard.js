var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// function clickable(i){
//   if (document.getElementById("moodsL").value == "Joyful"){

//   }
// }

document.querySelector('select').onchange=clickable;
var line1 = document.getElementById("line1");
function clickable(event){
  line1.classList = this.value;
}


