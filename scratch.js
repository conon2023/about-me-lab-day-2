'use strict';

// Function to prompt the user with a question and validate the answer

let username = prompt("Hi user! Please tell me your name");

// Guess the number I am thinking
let guess = prompt("Can you guess the number I am thinking of?");
let correct = 6;

function answer (a, b) 
if (a === b) {
  alert("Correct, you guessed the right answer");
} else {
  alert("Sorry! Try again.");
}

answer(guess, correct);
console.log (answer)

//   // Normalize user input
//   const normalizedUserAnswer = userAnswer.toLowerCase();

//   // Validate the answer
//   if (normalizedUserAnswer === "yes" || normalizedUserAnswer === "no") {
//     if (normalizedUserAnswer === correctAnswer.toLowerCase()) {
//       alert("Fantastic! You Got that Right!");
//     } else {
//       alert("Oops! That's Wrong. Sorry!");
//     }
//   } else if (userAnswer === null) {
//     alert("You did not provide an answer.");
//   } else {
//     alert("Please provide a valid answer (yes or no).");
//   }
// }

// // Function to start the quiz
// function startQuiz() {
//   // Counter variable to track the question number
//   var questionNumber = 0;

//   // Prompt the user with each question
//   if (questionNumber === 0) {
//     promptQuestion("Do I have Masters in Education?", "yes");
//     questionNumber++;
//   }

//   if (questionNumber === 1) {
//     promptQuestion("Have I worked in the Medical Industry?", "no");
//     questionNumber++;
//   }

//   if (questionNumber === 2) {
//     promptQuestion("Do I love family life?", "yes");
//     questionNumber++;
//   }

//   if (questionNumber === 3) {
//     promptQuestion("Is China a travel destination for me?", "no");
//     questionNumber++;
//   }

//   if (questionNumber === 4) {
//     promptQuestion("Do I have future plans for mountain climbing?", "no");
//     questionNumber++;
//   }
// }

// // // Function to handle the button click event
// // function handleButtonClick() {
// //   // Prompt the user with each question
// //   promptQuestion("Do you have children?", "yes");
// //   promptQuestion("Do you want to be a web developer?", "yes");
// //   promptQuestion("Is blue your favorite color?", "yes");
// //   promptQuestion("Is China one of your future travel plans?", "no");
// //   promptQuestion("Is Egusi Soup one of your favorite delicacies in Nigeria?", "yes");


// // Get the button element by its ID
// var startButton = document.getElementById('startButton');

// // Attach the event listener to the button
// startButton.addEventListener('click', handleButtonClick);

// // Logic Here is to ensure the user is of age for the Quiz!
// var name = prompt("Hello! What is your name?");
// var result = confirm("Welcome to My Site, " + name + "!" + "   It's a great honour meeting you!");
// alert("Would you want to know more about me " + name + "?");
// alert("It's all in my bio. Let's rock and roll!!!");

// // Create a button element
// var startButton = document.createElement("button");
// startButton.textContent = "Start Quiz";
// startButton.addEventListener("click", startQuiz);

// // Append the button to the body of the document
// document.body.appendChild(startButton);