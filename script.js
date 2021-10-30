// Define a set of questions
const questions = [
    {
        question: "1. Which language runs in a web browser?",
        choices: ["a. Python", "b. Java", "c. c", "d. Javascript"],
        answer: "d. Javascript"
    },
    {
        question: "2.String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "3.Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "4.ommonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "5.How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "6.How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "7.To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "8.The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "9.Who invented JavaScript?",
        choices: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
        answer: "c. Brendan Eich"
    },
    {
        question: "10.How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },

];

// grab references to elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

/**
 * FUNCTIONS
 */

// WHEN I click the start button, timer starts
var totalTime = 100;
function newQuiz() {
    questionIndex = 0;
    totalTime = 100;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function () {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000);

    showQuiz();
};


// then presented with questions and choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// after question is answered, show if correct or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, deduct 10 second from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// when all questions are answered or timer reaches 0, game over
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // show final score
    finalScore.textContent = correctAns;
}

//ADD EVENT LISTENERS

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

;