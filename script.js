
var toggleButtonOff = document.querySelector('#togg-off');
var toggleButtonOn = document.querySelector('#togg');
var cvpage = document.querySelector('body');

toggleButtonOff.addEventListener("click", function(){
 cvpage.style.filter=("invert(100%)");
 cvpage.style.transition=("filter 0.5s");
 toggleButtonOff.style.display=("none");
 toggleButtonOn.style.display=("block");
});

toggleButtonOn.addEventListener("click", function(){
  cvpage.style.filter=("none");
  cvpage.style.transition=("filter 0.5s");
  toggleButtonOff.style.display=("block");
  toggleButtonOn.style.display=("none");
});
