const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");
let displayScore = document.getElementsByClassName("displayScore");
const initialsText = document.getElementById("name");
const userName = document.getElementById("Initials");
const endBox = document.getElementById("quiz-end");
let nameSubmit = document.getElementById("save-score");



let currentQuestion = 0;

let score = 0;

let questions = [
   {
       question: "What is Javascript?",
       answers: [
           {option: "programming language for the web", answer: true},
           {option: "An electronic device for storing and processing data", answer: false},
       ]
   },
   {
       question: "Which is an example of a Javascript Data Type?",
       answers: [
           {option: "bottle", answer: false},
           {option: "boolean", answer: true},
       ]
   },
   {

       question: "Is Javascript a case-sensitive language?",
       answers: [
           {option: "yes", answer: true},
           {option: "no", answer: false},
       ]
   }
]



function beginQuiz() {
    displayScore.innerHTML = "a"
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
                startGameTimer()
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    prevBtn.classList.add("hide");
 }
 
 beginQuiz();

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 }

 function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
 
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    prevBtn.classList.remove("hide");
 }

 function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    nextBtn.classList.remove("hide");
 }
 
 initialsText.value;

 nameSubmit.onclick = () => {
    
    userName.innerHTML = initialsText.value
 }


 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Congratulations on submitting the Quiz!"

 }

 //
  let gameDuration = 10
  let gameSecElapsed = 0
  var gameInterval;

  let gameTimerEl = document.querySelector("#gameTimer");
  let timerTab = document.querySelector("#timers");
  var test = false;



  function startGameTimer () {

  
    if (test) { console.log("--- startGameTimer ---"); }
    setGameTime();

    gameInterval = setInterval(function() {
      gameSecElapsed++;
      renderTime();
    }, 1000);
  }

  function setGameTime() {
    if (test) { console.log("--- setGameTime ---"); }
    if (test) { console.log("gameDuration " + gameDuration); }
    clearInterval(gameInterval);
    gameSeconds = gameDuration;
  }

  function renderTime() {

    gameTimerEl.textContent = gameDuration - gameSecElapsed;

    if ((gameDuration - gameSecElapsed) < 1 ) {
     endOfGame();
    }
  }

  function endOfGame(){
    if (score == 3){
        gameTimerEl.textContent = "Game Over"
    }
  }


