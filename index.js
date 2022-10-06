let readlineSync = require("readline-sync");

let userName = readlineSync.question("Please enter your name :\n")

let score = 0;

console.log("Welcome ", userName, "to the quiz. Let's see how well you know JK :) \n");

console.log("********************************************************")

// processing the data //

function questions(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right answer\n");
    score = score + 1;

  } else {
    console.log("wrong!!!\n")

  }

  console.log("currrent score is ", score)
  console.log("**********************")
}

let allQuestions = [{
  question: "1. When JK gets bored, he is most likely to:\n(a) Call a friend\n(b) Go for a walk or run\n",
  answer: "b"
}, {
  question: "2. What are JK's favourite sports:\n(a) Cricket & Football\n(b) Badminton & Chess\n ",
  answer: "a"
}, {
  question: "3. Which of these JK is more terrible at:\n(a) Dancing\n(b) Singing\n ",
  answer: "a"
}, {
  question: "4. Which superpower would JK want to have?\n(a) Can time travel\n(b) Read people's minds\n ",
  answer: "a"
}, {
  question: "5. If JK could stay permanently a certain age, what would it be??\n(a) Mid twenties\n(b) Late thirties\n",
  answer: "a"
}
];

// giving the output //

for (let i = 0; i < allQuestions.length; i++) {
  let currentQuestion = allQuestions[i];
  questions(currentQuestion.question, currentQuestion.answer)
}
