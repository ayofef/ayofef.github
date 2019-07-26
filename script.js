
var menuButton = document.querySelector("#burger");

var menuCloseButton = document.querySelector("#burger-close");


var menu = document.querySelector("nav ul");


menuButton.addEventListener("click", function(){
menu.classList.toggle("open");

if (menuButton.innerHTML === "&#10006;") {
    menuButton.innerHTML = "☰";
  } else {
    menuButton.innerHTML = "&#10006;";
  }
});

