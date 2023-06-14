
'use strict';
// Logic Here is to ensure the user is of age for the Quiz!
var name = prompt("Please Enter A Name I Can Call You!");
var result = confirm("Hello, " + name + "! Welcome to My Site! You're in For a Super Ride");

Take me to my page. 

Somewhere on my page, 

if (result === true) {
  var age = prompt("Please enter your age:");

  if (age <= 18) {
    console.log("Program canceled.");
    result = confirm("Sorry, you are below age!");
  }

  if (result === true && age >= 18) {
    console.log("User confirmed and age is greater than or equal to 18.");

    // Collection (array) of questions and answers
    const questions = [
      { question: "Do you have children?", answer: "yes" },
      { question: "Do you want to be a web developer?", answer: "yes" },
      { question: "Is blue your favorite color?", answer: "yes" },
      { question: "Is China one of your future travel plans?", answer: "no" },
      { question: "Is Egusi Soup one of your favorite delicacies in Nigeria?", answer: "yes" }
    ];

    // This function is to normalize user input and validate the answer
    function normalizeAndValidateAnswer(answer, correctAnswer) {
      answer = answer.toLowerCase();
      return answer === correctAnswer.toLowerCase();
    }

    // Function to prompt the user with a question and validate the answer
    function promptQuestion(question, correctAnswer) {
      const userAnswer = prompt(question);

      // Using conditionals - If, Else if, and else statements to test outcomes
      if (normalizeAndValidateAnswer(userAnswer, correctAnswer)) {
        alert("Fantastic! You Got that Right!");
      } else if (userAnswer === null) {
        alert("You did not provide an answer.");
      } else {
        alert("Oops! That's Wrong. Sorry!");
      }
    }

    // Prompts the user with each question using if statements
    if (questions.length >= 1) {
      promptQuestion(questions[0].question, questions[0].answer);
    }

    if (questions.length >= 2) {
      promptQuestion(questions[1].question, questions[1].answer);
    }

    if (questions.length >= 3) {
      promptQuestion(questions[2].question, questions[2].answer);
    }

    if (questions.length >= 4) {
      promptQuestion(questions[3].question, questions[3].answer);
    }

    if (questions.length >= 5) {
      promptQuestion(questions[4].question, questions[4].answer);
    }
  } else {
    console.log("User canceled or age is below 18.");
  }
}