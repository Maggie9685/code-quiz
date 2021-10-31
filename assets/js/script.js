//Folowing 10 Questions and answers are from https://codepen.io/boopalan002/pen/yKZVGa 
var questionList = [{ 
  question: "1. How do you write 'Hello World' in an alert box?",
  answer: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
  correctAnswer: 3
}, {
  question: "2. How to empty an array in JavaScript?",
  answer: ["arrayList[]", "arrayList(0)", "arrayList.length=0", "arrayList.len(0)"],
  correctAnswer: 2
}, {
  question: "3. What function to add an element at the begining of an array and one at the end?",
  answer: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
  correctAnswer: 1
}, {
  question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
  answer: ["undefined", "0", "prints nothing", "Syntax error"],
  correctAnswer: 0
}, {
  question: "5. What would following code return? console.log(typeof typeof 1);",
  answer: ["string", "number", "Syntax error", "undefined"],
  correctAnswer: 0
},{
  question: "6. Which software company developed JavaScript?",
  answer: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1
},{
  question: "7. What would be the result of 3+2+'7'?",
  answer: ["327", "12", "14", "57"],
    correctAnswer: 3
},{
  question: "8. Look at the following selector: $('div'). What does it select?",
  answer: ["The first div element", "The last div element", "All div elements", "Current div element"],
    correctAnswer: 2
},{
  question: "9. How can a value be appended to an array?",
  answer: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of these"],
    correctAnswer: 1
},{
  question: "10. What will the code below output to the console? console.log(1 +  +'2' + '2');",
  answer: ["'32'", "'122'", "'13'", "'14'"],
    correctAnswer: 0
}];

var StartQuizButton = document.querySelector("#start-quiz");
var timerEl = document.getElementById("time-left");
var rules = document.getElementById("rules");
var timeLeft = 60;
var curQ = 0;
var MyA = 0;
var failQ = 0;
var body = document.body;
var QuizQ = document.getElementById("questions");
var divd = document.getElementById("choice");
var QuizA0 = document.createElement("button");
var QuizA1 = document.createElement("button");
var QuizA2 = document.createElement("button");
var QuizA3 = document.createElement("button");
divd.setAttribute("style", "display: flex; justify-content: space-between;");
var UrName = document.getElementById("yourName");
UrName.setAttribute("style", "display: none;");
var MyName = document.getElementById("myName");
var Ensure = document.getElementById("ensure");
var numQtaker = 0;


//To get name and save name&score to local storage
Ensure.addEventListener("click", function() {
  if(numQtaker > 0 || localStorage.getItem("numQtaker") > 0) {
    numQtaker = localStorage.getItem("numQtaker");
    numQtaker++;
  }
  var MYName= "name"+numQtaker;
  var MYScore = "score"+numQtaker;
  localStorage.setItem("numQtaker", numQtaker);
  localStorage.setItem(MYName, MyName.value.trim());
  localStorage.setItem(MYScore, timeLeft);

  numQtaker++;
  console.log(numQtaker);//dummy to prevent error & check items
  UrName.setAttribute("style", "display: none;");
  QuizQ.textContent ="";
  rules.setAttribute("style", "display: initial;");
  StartQuizButton.setAttribute("style", "display: initial;");
});

//60 sec Counter 
function countdown() {
  var timeInterval = setInterval(function() { 
    if(timeLeft <= 0){
      clearInterval(timeInterval); 
      timerEl.textContent = 0;
      failQ = 1;
      alert("Times up! You fail this challenge. Better luck next time.");

      //remove question and answer. Back to inital state
      QuizQ.textContent ="";

      rules.setAttribute("style", "display: flex;");
      StartQuizButton.setAttribute("style", "display: flex;");

    } else if (curQ === 10) {
      clearInterval(timeInterval); 
    }
    else {
      timerEl.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

//Click this to start the quiz
StartQuizButton.addEventListener("click", function() {
  timeLeft = 60;
  curQ = 0;
  countdown();
  rules.setAttribute("style", "display: none;");
  StartQuizButton.setAttribute("style", "display: none;");

  QuizStart();
});

function checkAnswer(MyAns){
  if(MyAns != questionList[curQ].correctAnswer){
    divd.removeChild(QuizA0);
    divd.removeChild(QuizA1);
    divd.removeChild(QuizA2);
    divd.removeChild(QuizA3);
    QuizQ.textContent = "Incorrect!"
    timeLeft -= 10;
  } else {
    divd.removeChild(QuizA0);
    divd.removeChild(QuizA1);
    divd.removeChild(QuizA2);
    divd.removeChild(QuizA3);
    QuizQ.textContent = "Correct!"
  }
  setTimeout(function() {
    curQ++;
    QuizStart();
  }, 500);
}

//Buttons for each option (1-4)
QuizA0.addEventListener("click", function() {
  checkAnswer(0);
});
QuizA1.addEventListener("click", function() {
  checkAnswer(1);
});
QuizA2.addEventListener("click", function() {
  checkAnswer(2);
});
QuizA3.addEventListener("click", function() {
  checkAnswer(3);
});

//To change questions 
var QuizStart = function () {
  if(curQ < 10 && timeLeft > 0) {
  divd.appendChild(QuizA0);
  divd.appendChild(QuizA1);
  divd.appendChild(QuizA2);
  divd.appendChild(QuizA3);

  QuizQ.textContent = questionList[curQ].question;
  QuizA0.textContent = questionList[curQ].answer[0];
  QuizA1.textContent = questionList[curQ].answer[1];
  QuizA2.textContent = questionList[curQ].answer[2];
  QuizA3.textContent = questionList[curQ].answer[3];

  } else if (timeLeft > 0) {
    QuizQ.textContent = 'You complete the challenge! Your score is ' + timeLeft;
    UrName.setAttribute("style", "display: flex; justify-content: space-between;");
  }
};



  