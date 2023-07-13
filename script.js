const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", ()=>{

  document.querySelector(".nav").classList.toggle("toggle");
  if(menuIcon.src.includes("images/icon-hamburger.svg")){
    menuIcon.src = "images/icon-close.svg"
  }else{
    menuIcon.src = "images/icon-hamburger.svg"
  }

});

const slider = new A11YSlider(document.querySelector('.slider'), {
  arrows:false,
  adaptiveHeight: true,
  customPaging: function(index, a11ySlider) {
      return '<button class="mycustombtn"></button>'; 
  },
  
  responsive: {
    520:{
      dots:false,
    },
  }

});