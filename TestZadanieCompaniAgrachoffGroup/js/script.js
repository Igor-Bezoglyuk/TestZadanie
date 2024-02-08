jQuery( document ).ready(function(){
  $(function (){
  $(".Open").click(function(){
  $(".Header-phone:hidden").animate({'width': 'toggle'});
});
  $(".Close").click(function(){
  $(".Header-phone").animate({'width': 'toggle'});
});
  $(window).resize(function(){
 $(".Header-phone").hide();
});
  $(".active-down").mouseover(function(){
  $(".Drop-menu:hidden").show();
});
  $(".Drop-menu").mouseover(function(){
  $(".Drop-menu:hidden").show();
});
  $(".active-down").mouseout(function(){
  $(".Drop-menu").hide();
});
$(".phone-active-down").click(function(){
  $(".Drop-menu-phone").toggle(500);
});
});
});

/*const slideValue = document.querySelector(".check");
const inputSlider = document.querySelector(".Content-range");
inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent=value;  
});*/

var slider = document.getElementById("range");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML=this.value;
}

slider.addEventListener("mousemove", function(){
   var x = slider.value;
   var color = 'linear-gradient(90deg, rgb(54,37,175)'+ x +'%, rgb(186,241,255)'+ x +'%)';
   slider.style.background=color;
});