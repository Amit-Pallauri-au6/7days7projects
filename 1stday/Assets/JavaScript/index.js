var body = document.querySelector("body");
var content = document.querySelector(".content");
var ball = document.querySelector(".ball");
content.addEventListener("click", function(){
    body.classList.toggle("color");
    ball.classList.toggle("tball");
});