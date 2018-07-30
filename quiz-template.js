const myQuestions = [
  { // question 1
    question: "Whose team are you on?",
    answers: {
      a: "Angie",
      b: "Jaden"
    },
    correctAnswer: "a"
  }, // more questions here
  /*
  {
    question: "",
    answers: {
    a: "",
    b: "",
    },
    correctAnswer: "",
  }
  */
];

// reference html parts in this js file
// i.e. tell js where things are in our html file
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {
  const output = [];
  // for each question ...
  myQuestions.forEach((/* FIXME*/, /* FIXME*/) => {
    const answers = [];

    // for each available answer ...
    for(/* FIXME */) {
      // ... add a HTML radio button/multiple choice button
      answers.push(
        // FIXME fill in curly brackets
        `<label>
          <input type="radio" name="question${questionNumber}" value="${}">
          ${} :
          ${}
        </label>`
      );
    }

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
  const answerContainers = quizContainer.querySelectorAll(".answers");
  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((/* FIXME*/, /* FIXME*/) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // QUESTION: what happens if the user is correct/incorrect?
    if (/* FIXME*/) {
      // if the answer is correct...
      // FIXME
    } else {
      // if the answer is wrong/blank...
      // FIXME
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // FIXME fill in curly brackets
  resultsContainer.innerHTML = `${} out of ${}`;
}
// build quiz right when the page loads
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", /* FIXME*/);
