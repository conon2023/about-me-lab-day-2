'use strict';

var Name = prompt("Hello! What is your name?");
var result = confirm("Welcome to My Site, " + Name + "!");

let userInput = prompt("Ready for an 'About Me' game quiz? Yes/Y or No/N ONLY");

if (userInput.toUpperCase() === "Y" || userInput.toUpperCase() === "YES") {
  // User chose yes
  alert("You selected yes!");
} else if (userInput.toUpperCase() === "N" || userInput.toUpperCase() === "NO") {
  // User chose no
  alert("You selected no!");
} else {
  // Invalid input
  alert("Please enter 'Yes' or 'Y' for Yes, or 'No' or 'N' for No. Thank you, " + userInput + "!");
}

// Counter variable to track the question number
var questionNumber = 0;

// Function to prompt the user with a question and validate the answer
function promptQuestion(question, correctAnswer) {
  const userAnswer = prompt(question);
  
  // Normalize user input
  const normalizedUserAnswer = userAnswer.toUpperCase();

  // Validate the answer
  if (normalizedUserAnswer === correctAnswer.toUpperCase()) {
    alert("Fantastic! It seems like you know me!");
  } else {
    alert("Oops! You can do better next time!");
  }
}

// Continue with the other questions and prompts inside the loop
while (questionNumber < 5) {
  if (questionNumber === 0) {
    promptQuestion("I am from Nigeria?", "YES");
    questionNumber++;
  }

  if (questionNumber === 1) {
    promptQuestion("Do I have a Masters in Education?", "YES");
    questionNumber++;
  }

  if (questionNumber === 2) {
    promptQuestion("Have I worked in the Medical Industry?", "NO");
    questionNumber++;
  }

  if (questionNumber === 3) {
    promptQuestion("Do I love family life?", "YES");
    questionNumber++;
  }

  if (questionNumber === 4) {
    promptQuestion("Do I have future plans for mountain climbing?", "NO");
    questionNumber++;
  }
}

alert("Thank you " + name + ". It was great meeting you!");