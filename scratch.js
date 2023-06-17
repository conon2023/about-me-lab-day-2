'use strict';

var Name = prompt("Hello! What is your name?");
var result = confirm("Welcome to My Site, " + Name + "!");

var userInput = prompt("Ready for an 'About Me' game quiz? Yes/Y or No/N ONLY");

if (userInput.toLowerCase() === "y" || userInput.toLowerCase() === "yes") {
  alert("You selected yes!");
} else if (userInput.toUpperCase() === "N" || userInput.toUpperCase() === "NO") {
  alert("You selected no!");
} else {
  alert("Please enter 'Yes' or 'Y' for Yes, OR 'No' or 'N' for No.");
}

var questions = [
  "I am from Nigeria?",
  "Do I have a Masters in Education?",
  "Have I worked in the Medical Industry?",
  "Do I love family life?",
  "Do I have future plans for mountain climbing?"
];

var correctAnswers = [
  "YES",
  "YES",
  "NO",
  "YES",
  "NO"
];

var correctCount = 0;

for (var i = 0; i < questions.length; i++) {
  promptQuestion(questions[i], correctAnswers[i]);
}

function promptQuestion(question, correctAnswer) {
  var userAnswer = prompt(question);
  var normalizedUserAnswer = userAnswer.toUpperCase();
  var normalizedCorrectAnswer = correctAnswer.toUpperCase();

  if (normalizedUserAnswer === normalizedCorrectAnswer || normalizedUserAnswer === normalizedCorrectAnswer.substring(0, 1)) {
    alert("Correct! Good job!");
    correctCount++;
  } else {
    alert("Oops! That's incorrect.");
  }
}

alert("You answered " + correctCount + " out of " + questions.length + " questions correctly.");

var correctNumber = 4;
var attempts = 4;
var guessedCorrectly = false;

while (attempts > 0) {
  var userInput1 = prompt("Guess the number:");
  var userGuess = parseInt(userInput1);

  if (userGuess < correctNumber) {
    alert("Wrong! Answer is too low");
  } else if (userGuess > correctNumber) {
    alert("Wrong! Answer is too high");
  } else if (userGuess === correctNumber) {
    alert("Fantastic! You are amazing!");
    guessedCorrectly = true;
    break;
  }

  attempts--;

  if (attempts === 0 && !guessedCorrectly) {
    alert("Sorry! Your chances are up. The correct number is 4");
  }
}

var fruitAnswers = ["apple", "banana", "orange", "grape", "kiwi"];
var attemptsLeft = 6;
var correctFruitCount = 0;

while (attemptsLeft > 0) {
  var userFruitAnswer = prompt("Guess a fruit:");
  var normalizedUserFruitAnswer = userFruitAnswer.toLowerCase();

  if (fruitAnswers.includes(normalizedUserFruitAnswer)) {
    alert("Correct! Your guess is one of the possible correct answers.");
    correctFruitCount++;
    break;
  } else {
    alert("Wrong! Try again.");
    attemptsLeft--;
  }
}

if (attemptsLeft === 0) {
  alert("Sorry, you ran out of attempts. The possible correct answers were: " + fruitAnswers.join(", "));
}

alert("You answered " + correctFruitCount + " out of 1 question correctly.");