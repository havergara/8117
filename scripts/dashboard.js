

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

// let bgcolor = function(){
//     document.querySelector('select').onchange=clickable;
//     var line1 = document.getElementById("line1");
//     function clickable(event){
//     line1.classList = this.value;
// }

// }




// $(document).ready(function(){
//   $("select[value = 'joyful']").on({
//     click: function(){
//       $(this).css('background-color', "yellow")
//     }
//   });
// });

$("select[name='moods']").change(function(){
    if ($(this).val() == "joyful"){
        $(this).css('background-color',"yellow");
  }
    if ($(this).val() == "sad"){
        $(this).css('background-color',"var(--blue)");
  }
    if ($(this).val() == "disgusted"){
        $(this).css('background-color',"green");
  }
    if ($(this).val() == "average"){
        $(this).css('background-color',"wheat");
  }

    if ($(this).val() == "angry"){
        $(this).css('background-color',"red");
  }

    if ($(this).val() == "nervous"){
        $(this).css('background-color',"violet");
  }
});


