function myFunction(x) {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

// Slider Cube
var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


// ScrollTo
showPage=()=>{
   window.scrollTo(0,600);
}

// Back button
var mybutton = document.querySelector(".back_btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    console.log("uxladiin")
  } else {
    mybutton.style.display = "none";
  }
}
// Back home
BackHome=()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 }
