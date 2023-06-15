
'use strict';
// Logic Here is to ensure the user is of age for the Quiz!
var name = prompt("Hello! What is your name?");
var result = confirm("Welcome to My Site, " + name + "!" + "   It's a great honour meeting you!");
alert ("Would you want to know more about me " + name + "?");

// This function is to normalize user input and validate the answer
function normalizeAndValidateAnswer(answer, correctAnswer) {
    answer = answer.toLowerCase();
  
  }

alert ("It's all in my bio. Let's rock and roll!!!");

function startQuiz() {
    // Counter variable to track the question number
    var questionNumber = 0;
}
    // Prompt the user with each question
    if (questionNumber === 0) {
      promptQuestion("Do you have children?", "yes");
      questionNumber++;
    }

// Function to prompt the user with a question and validate the answer
function promptQuestion(question, correctAnswer) {
  const userAnswer = prompt(question);

  // Normalize user input
  const normalizedUserAnswer = userAnswer.toLowerCase();

  // Validate the answer
  if (
    normalizedUserAnswer === "yes" ||
    normalizedUserAnswer === "no"
  ) {
    if (normalizedUserAnswer === correctAnswer.toLowerCase()) {
      alert("Fantastic! You Got that Right!");
    } else {
      alert("Oops! That's Wrong. Sorry!");
    }
  } else if (userAnswer === null) {
    alert("You did not provide an answer.");
  } else {
    alert("Please provide a valid answer (yes or no).");
  }
}

// Counter variable to track the question number
var questionNumber = 0;

// Prompt the user with each question
if (questionNumber === 0) {
  promptQuestion("Do you have children?", "yes");
  questionNumber++;
}

if (questionNumber === 1) {
  promptQuestion("Do you want to be a web developer?", "yes");
  questionNumber++;
}

if (questionNumber === 2) {
  promptQuestion("Is blue your favorite color?", "yes");
  questionNumber++;
}

if (questionNumber === 3) {
  promptQuestion("Is China one of your future travel plans?", "no");
  questionNumber++;
}

if (questionNumber === 4) {
  promptQuestion("Is Egusi Soup one of your favorite delicacies in Nigeria?", "yes");
  questionNumber++;
}