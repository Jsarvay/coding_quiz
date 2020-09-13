var timer = document.querySelector(".time");
var question = document.querySelector(".question");
var welcome = document.querySelector(".welcome");
var answers = document.querySelector(".answers");
var start = document.querySelector("#start");

//Sets a timer to be used once the start button is hit
var seconds = 75;

function timeClock() {
    var timerInterval = setInterval(function() {
      seconds--;
      timer.textContent = "Time: " + seconds;
  
      if(seconds === 0) {
        clearInterval(timerInterval)
      }
  
    }, 1000);
  };

//function that calls and populates the page with the first question and answers
function questionOne() {
  start.remove();
  welcome.textContent = "";
  question.textContent = "CSS stands for what?";
  var oneAnswers = ["Created System Style", "Custom Style Setup", "Cascading Style Sheet", "Cool Style Stuff"];
  for(var i = 0; i < oneAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark");
    button.textContent = oneAnswers[i];
    answers.appendChild(button);
    console.log(oneAnswers[i]);
  }
}

document.getElementById("start").addEventListener("click", function(event){
    event.preventDefault();
    console.log("time");
    timeClock();
    questionOne();
});
