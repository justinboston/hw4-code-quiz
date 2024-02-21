var startGameEl = document.querySelector("#start-game");
var questions = document.querySelector("#questions");
var intro = document.querySelector("#intro");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");

var timer = 30;

var question = [
  {
    question: "Which of the following is not a programming language?",
    choices: ["JavaScript", "HTML", "CSS", "Spanish"],
    answer: "Spanish",
  },
  {
    question: "___________ is largest provider of internet hosting for software and web development code?",
    choices: ["Google Drive", "Dropbox", "GitHub", "AWS"],
    answer: "GitHub",
  },
  {
    question: "A user story consists of 3 main components. Which of the following is not a typical component of a user story?",
    choices: ["The type of person using your application", "Deadline / Due Date", "What the user wants from the application.", "Why the user wants what they want (i.e., what problem are they trying to solve?)"],
    answer: "Deadline / Due Date",
  },
];

var questionIndex = 0;

function startTimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      timerEl.textContent = timer;
    } else {
      endGame();
    }
  }, 1000);
}

function startGame() {
  intro.setAttribute("class", "hide");
  updateQuestion();
  questions.setAttribute("class", "show");
  timerEl.setAttribute("class", "timer");
  startTimer();
}

function updateQuestion() {
  if (questionIndex === question.length) {
    setTimeout(endGame, 3000);
    return;
  }

  questionEl.textContent = question[questionIndex].question;
  choicesEl.innerHTML = "";
  resultEl.innerHTML = "";
  for (var i = 0; i < question[questionIndex].choices.length; i++) {
    var element = document.createElement("li");
    element.textContent = question[questionIndex].choices[i];
    choicesEl.appendChild(element);
  }
}

function endGame() {
  questions.setAttribute("class", "hide");
  resultEl.textContent = "Quiz Over";
  timerEl.setAttribute("class", "timer");
}

choicesEl.addEventListener("click", function (event) {
  var target = event.target;

  if (target.matches("li")) {
    if (target.textContent === question[questionIndex].answer) {
      resultEl.textContent = "correct";
    } else {
      resultEl.textContent = "incorrect";
      timer = timer - 5;
    }

    questionIndex++;

    setTimeout(updateQuestion, 3000);
  }
});

startGameEl.addEventListener("click", startGame);