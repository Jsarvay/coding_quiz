var timer = document.querySelector(".time");
var question = document.querySelector(".question");
var welcome = document.querySelector(".welcome");
var answers = document.querySelector(".answers");

var seconds = 75;

function timer() {
    var timeLeft = setInterval(function() {
      secondsLeft--;
      timer.textContent = "";
      timer.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
      }
  
    }, 1000);
  }