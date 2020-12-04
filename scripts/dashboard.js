

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

var name = localStorage.getItem("userFullName");
document.getElementById("name").innerHTML = name;
var email = localStorage.getItem("userEmail");
document.getElementById("email").innerHTML = email;
var age = localStorage.getItem("age");
document.getElementById("age").innerHTML = age + " Years Old";
var smoker = localStorage.getItem("smoker")
var status = localStorage.getItem("status")
var smokerMessage = "Quit Smoking :Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mollis arcu. Vivamus sit amet varius nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas euismod felis sed ligula pulvinar, a elementum eros auctor. In ornare, purus non lobortis efficitur, ante massa consectetur mi, semper varius eros eros fermentum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vestibulum eros ut turpis facilisis tristique."
var antiSmoker = "How much longer will you live Not doing these things: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat enim sed sem suscipit egestas. Aenean lobortis ligula velit, non bibendum tortor molestie in. In placerat sagittis libero at elementum. Donec non ultricies tellus. Donec finibus fermentum erat, eu faucibus mi finibus quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam congue condimentum hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
var partner = "How to treat your partner Mindfully : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, quam sed ullamcorper tincidunt, tortor ligula congue mi, at interdum lectus urna et massa. Sed non velit libero. Ut sed ex varius, eleifend erat ut, elementum massa. Sed eu erat non lectus lacinia pharetra. Phasellus rutrum sagittis velit at mollis. In volutpat vel orci non tempus. Pellentesque et vestibulum quam, vel aliquet mauris. Suspendisse aliquam lectus facilisis, ultrices massa eu, ultrices metus. Aliquam at sem et neque egestas mattis non ac diam. Cras scelerisque ipsum elit, at sodales diam dictum a. Curabitur tristique a ex id rutrum."
var noPartner = " Single Life, Live it well : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit urna ac tincidunt ultricies. Vestibulum consectetur viverra erat, nec viverra est aliquet ut. Duis dictum risus velit, porttitor ornare libero efficitur semper. Sed tristique et metus vel tincidunt. Suspendisse iaculis nibh id feugiat aliquam. Nunc mauris turpis, laoreet vitae sagittis egestas, suscipit a diam. Nam in urna leo. Nam placerat vestibulum nunc, eget malesuada eros viverra at. Nulla sodales dolor mi, sit amet sagittis elit ultrices et. Cras dolor ante, pharetra a mi ut, suscipit accumsan nibh. Quisque euismod, ipsum in ullamcorper scelerisque, metus dui pharetra arcu, ac feugiat magna erat id augue. Proin aliquet aliquam magna sed efficitur."
if (smoker === "1"){
  document.getElementById("smoker").innerHTML = smokerMessage;
}else{
  document.getElementById("smoker").innerHTML = antiSmoker;
}
if (status === "1"){
  document.getElementById("status").innerHTML = partner;
}else{
  document.getElementById("status").innerHTML = noPartner;
}

// Redirect user to login page if user is not logged in
if (localStorage.getItem("userToken") === null) {
    window.location.href = 'login.html';
}
// END - Redirect user to login page if user is not logged in