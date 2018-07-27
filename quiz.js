// do we want our quiz questions to change? var or const?
// how can we store our questions?
const myQuestions = [
  { // question 1
    question: "Whose team are you on?",
    answers: {
      a: "Angie",
      b: "Jaden"
    },
    correctAnswer: "a"
  },
  { // question 2
    question: "Who is the tallest at QUESTABOX?",
    answers: {
      a: "Jylin",
      b: "Jaden",
      c: "Yubeen"
    },
    correctAnswer: "c"
  },
  { // question 3
    question: "Who wrote this quiz?",
    answers: {
      a: "Batman",
      b: "A robot",
      c: "I did!"
    },
    correctAnswer: "c"
  }
];

// reference html parts in this js file
// i.e. tell js where things are in our html file
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

/* we need to make the quiz
if we have a lot of questions, do we want to type out the HTML for EVERY question?
of course not!!! that's so much work... what can we do instead?
we'll be writing to our html file using javascript
 */
function buildQuiz() {
  // we need a place to store our html bits
  const output = [];

  /* how would we want our questions to look on the webpage?
  how would we write the html for our questions?

  start with:
  <div class="question">
  WHAT DOES EACH QUESTION LOOK LIKE?
  </div>

  <div class="answers">
  WHAT DOES EACH ANSWER LOOK LIKE?
  </div>
  */

  // for each question ...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // we want to store the list of answer choices
    // so that we can write html for the answer choices
    const answers = [];

    // for each available answer ...
    for(letter in currentQuestion.answers) {
      // ... add a HTML radio button/multiple choice button
      answers.push(
        // make sure to use backticks to enable be able to write multi-line strings
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      ); // don't forget the semicolon
    }
    // we're done making the answers

    // add this question and answers to output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // combine our output list into one big html string
  quizContainer.innerHTML = output.join("");
}

function showResults() {

}
// build quiz right when the page loads
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
