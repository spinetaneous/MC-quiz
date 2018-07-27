// do we want our quiz questions to change? var or const?
// how can we store our questions?
const myQuestions = [
  { // question 1
    question: "Whose team are you on?"
    answers: {
      a: "Angie",
      b: "Jaden"
    }
    correctAnswer: "a"
  },
  { // question 2
    question: "Who is the tallest at QUESTABOX?"
    answers: {
      a: "Jylin",
      b: "Jaden",
      c: "Yubeen"
    }
    correctAnswer: "c"
  },
  { // question 3
    question: "Who wrote this quiz?"
    answers: {
      a: "Batman",
      b: "A robot",
      c: "I did!"
    }
    correctAnswer: "c"
  }
];

// first we need to make the quiz
// we'll be writing to our html file using javascript
function buildQuiz() {}

function showResults() {}

// build quiz right when the page loads
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
