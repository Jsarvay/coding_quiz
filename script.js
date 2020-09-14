var timer = document.querySelector(".time");
var question = document.querySelector(".question");
var welcome = document.querySelector(".welcome");
var answers = document.querySelector(".answers");
var start = document.querySelector("#start");
var frameScore = document.querySelector(".frame");

var highScores = []

//Sets a timer to be used once the start button is hit
var seconds = 75;

function timeClock() {
    var timerInterval = setInterval(function() {
      seconds--;
      timer.textContent = "Time: " + seconds;
  
      if(seconds === 0) {
        clearInterval(timerInterval);
        quizEnd();
      }

      if(question.textContent === "Finished!"){
        clearInterval(timerInterval);
        timer.textContent = "";
      }
  
    }, 1000);
  };

  init();

  function renderScores() {
    // Render a new li for each high score
    for (var i = 0; i < highScores.length; i++) {
      var highScore = highScores[i];
  
      var li = document.createElement("li");
      li.textContent = highScore;
      li.setAttribute("data-index", i);
    
      frameScore.appendChild(li);
    }
  }

  function init() {
    // Get stored scores from localStorage
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
  
    // If scores were retrieved from localStorage, update the highScores array to it
    if (storedHighScores !== null) {
      highScores = storedHighScores;
      renderScores();
    }
  
  }



//function that calls and populates the page with the first question and answers
function questionOne() {
  start.remove();
  frameScore.remove();
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
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "2"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionTwo();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionTwo();
    }      
  }, true);
};

//function that calls and populates the page with the second question and answers
function questionTwo() {
  answers.innerHTML = "";
  question.textContent = "What is the index of The Beatles in this array?";
  welcome.textContent = "Bands ['The Beatles', 'Led Zeppelin', 'Queen', 'Reel Big Fish']";
  //Create an array which creates buttons for each possible answer in a for loop
  var twoAnswers = ["0", "1", "2", "3"];
  for(var i = 0; i < twoAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = twoAnswers[i];
    answers.appendChild(button);
  };
  //Check clicked answer to see if it is correct. If it is incorrect, subtract 10 seconds and move to next question
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "0"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionThree();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionThree();
    }      
  }, true);
};

//function that calls and populates the page with the second question and answers
function questionThree() {
  answers.innerHTML = "";
  question.textContent = "What does var stand for?";
  welcome.textContent = "";
  //Create an array which creates buttons for each possible answer in a for loop
  var threeAnswers = ["variance","variable", "varietal", "variform"];
  for(var i = 0; i < threeAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = threeAnswers[i];
    answers.appendChild(button);
  };
  //Check clicked answer to see if it is correct. If it is incorrect, subtract 10 seconds and move to next question
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "1"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionFour();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionFour();
    }      
  }, true);
};

//function that calls and populates the page with the second question and answers
function questionFour() {
  answers.innerHTML = "";
  question.textContent = "What would you use to symbolize 'not' in javascript?";
  //Create an array which creates buttons for each possible answer in a for loop
  var fourAnswers = ["?", ".", ";", "!"];
  for(var i = 0; i < fourAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = fourAnswers[i];
    answers.appendChild(button);
  };
  //Check clicked answer to see if it is correct. If it is incorrect, subtract 10 seconds and move to next question
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "3"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionFive();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      questionFive();
    }      
  }, true);
};

//function that calls and populates the page with the second question and answers
function questionFive() {
  answers.innerHTML = "";
  question.textContent = "What does DOM stand for?";
  //Create an array which creates buttons for each possible answer in a for loop
  var fiveAnswers = ["Direct Objective Machine", "Document Object Model", "Durable Operating Metric", "Don't Oppress Me"];
  for(var i = 0; i < fiveAnswers.length; i++){
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-dark col-md-12");
    button.setAttribute("data-index", i);
    button.textContent = fiveAnswers[i];
    answers.appendChild(button);
  };
  //Check clicked answer to see if it is correct. If it is incorrect, subtract 10 seconds and move to next question
  answers.addEventListener("click", function _checkAnswer(event){
    event.preventDefault();
    var element = event.target.getAttribute("data-index");
    event.stopPropagation();
    console.log(element);
    if(element === "1"){
      alert("Correct!");
      answers.removeEventListener("click", _checkAnswer, true);
      quizEnd();
    }
    else{
      seconds = seconds - 10;
      alert("Wrong!");
      answers.removeEventListener("click", _checkAnswer, true);
      quizEnd();
    }      
  }, true);
};

//stop the timer and log information both to the screen and local storage
function quizEnd() {
  answers.innerHTML = "";
  question.textContent = "Finished!";
  welcome.textContent = "Enter your initials and record your score!";
  var p = document.createElement("p");
  p.setAttribute("class", "score");
  p.textContent = "Score: " + seconds;
  answers.appendChild(p);
  var form = document.createElement("form");
  answers.appendChild(form);
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  form.appendChild(input);
  var submit = document.createElement("button");
  submit.setAttribute("class", "btn btn-dark");
  submit.textContent = "Submit!";
  form.appendChild(submit);
  submit.addEventListener("click", function(event){
    event.preventDefault();
    var inputText = input.value.trim();
      if(inputText === ""){
        return;
      }
    highScores.push(inputText + ": " + p.textContent);
    var frameScore = document.createElement("ul");
    answers.appendChild(frameScore);
    var recordedScore = document.createElement("li");
    recordedScore.textContent = inputText + ": " + p.textContent;
    input.value = "";
    frameScore.appendChild(recordedScore);
    storeInput();
    recordedScore();
  })
};

function storeInput(){
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

document.getElementById("start").addEventListener("click", function(event){
    event.preventDefault();
    timeClock();
    questionOne();
});