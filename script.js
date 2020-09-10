var timer = document.querySelector(".time");
var question = document.querySelector(".question");
var welcome = document.querySelector(".welcome");
var answers = document.querySelector(".answers");

var seconds = 75;

function timeClock() {
    var timerInterval = setInterval(function() {
      seconds--;
      timer.textContent = "";
      timer.textContent = "Time: " + seconds;
  
      if(seconds === 0) {
        clearInterval(timerInterval)
      }
  
    }, 1000);
  };

document.getElementById("start").addEventListener("click", function(event){
    event.preventDefault();
    console.log("time");
    timeClock();
});
