// 'use strict';

// var Name = prompt("Hello! What is your name?");
// var result = confirm("Welcome to My Site, " + Name + "!");

// let userInput = prompt("Ready for an 'About Me' game quiz? Yes/Y or No/N ONLY");

//   if (userInput.toLowerCase() === "y" || userInput.toLowerCase() === "yes") {
//     // User chose yes
//     alert("You selected yes!");
//   } else if (userInput.toUpperCase() === "N" || userInput.toUpperCase() === "NO") {
//     // User chose no
//     alert("You selected no!");
//   } else {
//     // Invalid input
//     alert("Please enter 'Yes' or 'Y' for Yes, OR 'No' or 'N' for No.");
//   }

// // Counter variable to track the question number
// var questionNumber = 0;

// // Function to prompt the user with a question and validate the answer
// function promptQuestion(question, correctAnswer) {
//   const userAnswer = prompt(question);
  
//   // Normalize user input
//   const normalizedUserAnswer = userAnswer.toUpperCase();

//   // Normalize correct answer
//   const normalizedCorrectAnswer = correctAnswer.toUpperCase();

//   // Validate the answer
//   if (normalizedUserAnswer === normalizedCorrectAnswer || normalizedUserAnswer === normalizedCorrectAnswer.substring(0, 1)) {
//     alert("Fantastic! It seems like you know me!");
//   } else {
//     alert("Oops! You can do better next time!");
//   }
// }

// // Continue with the other questions and prompts inside the loop
// while (questionNumber < 5) {
//   if (questionNumber === 0) {
//     promptQuestion("I am from Nigeria?", "YES");
//     questionNumber++;
//   }

//   if (questionNumber === 1) {
//     promptQuestion("Do I have a Masters in Education?", "YES");
//     questionNumber++;
//   }

//   if (questionNumber === 2) {
//     promptQuestion("Have I worked in the Medical Industry?", "NO");
//     questionNumber++;
//   }

//   if (questionNumber === 3) {
//     promptQuestion("Do I love family life?", "YES");
//     questionNumber++;
//   }

//   if (questionNumber === 4) {
//     promptQuestion("Do I have future plans for mountain climbing?", "NO");
//     questionNumber++;
//   }
// }

// // Time for number guessing game
// let correctNumber = 4;
// let attempt = 4;
// let guessedCorrectly = false;

// while (attempt > 0) {
//   let userInput1 = prompt("Guess the number:");
//   let userGuess = parseInt(userInput1);
  
//   if (userGuess < correctNumber) {
//     alert("Wrong! Answer is too low");
//   } else if (userGuess > correctNumber) {
//     alert("Wrong! Answer is too high");
//   } else if (userGuess === correctNumber) {
//     alert("Fantastic! You are amazing!");
//     guessedCorrectly = true; // Update guessedCorrectly to true
//     break; // Exit the loop since the answer is correct
//   }
  
//   attempt--;

//   if (attempt === 0 && !guessedCorrectly) {
//     alert("Sorry! Your chances are up. The correct number is 4");
//   }
// }

var correctAnswers = ["apple", "banana", "orange", "grape", "kiwi"];
var attempts = 6;
var userAnswer;
var guessedCorrectly = false;

while (attempts > 0) {
  userAnswer = prompt("Guess a fruit:");
  userAnswer = userAnswer.toLowerCase();

  if (correctAnswers.includes(userAnswer)) {
    alert("Correct! Your guess is one of the possible correct answers. Bye!");
    guessedCorrectly = true;
    break;
  } else {
    alert("Wrong! Try again.");
    attempts--;
  }
}

if (attempts === 0) {
  alert("Sorry, you ran out of attempts. The possible correct answers were: " + correctAnswers.join(", "));
}