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
  //Create an array which creates buttons for each possible answer in a for loop
  var oneAnswers = ["Created System Style", "Custom Style Setup", "Cascading Style Sheet", "Cool Style Stuff"];
  for(var i = 0; i < oneAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = oneAnswers[i];
    answers.appendChild(button);
  };
  //Check clicked answer to see if it is correct. If it is incorrect, subtract 10 seconds and move to next question
  answers.addEventListener("click", function(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    if(element === "2"){
      alert("Correct!");
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!")
    }
  });

};

document.getElementById("start").addEventListener("click", function(event){
    event.preventDefault();
    console.log("time");
    timeClock();
    questionOne();
});
