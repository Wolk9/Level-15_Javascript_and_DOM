// Opdracht 1

var myBttn = document.getElementById("mybutton");

myBttn.addEventListener("click", clicked);

function clicked() {
  alert("Button clicked");
}

// Opdracht 2

var my2Bttn = document.getElementById("my2button");
var body = document.querySelector("body");

my2Bttn.addEventListener("click", toggleBG);

function toggleBG() {
  body.classList.toggle("red-background");
}
