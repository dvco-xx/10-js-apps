const quizData = [
  {
    question: "How old is Harry Potter in Goblet of Fire?",
    a: "12",
    b: "14",
    c: "11",
    d: "13",
    correct: "b",
  },
  {
    question: "What kind of creature is the character named Dobby?",
    a: "Elf",
    b: "Gnome",
    c: "Goblin",
    d: "Dwarf",
    correct: "a",
  },
  {
    question: "Sirius Black is Harry Potter's...?",
    a: "Dad",
    b: "Uncle",
    c: "Godfather",
    d: "Cousin",
    correct: "c",
  },
  {
    question: "What was the final Horcrux?",
    a: "Voldemorts snake, Nagini",
    b: "A lamp",
    c: "Staff",
    d: "Professor Umbridges' Necklace",
    correct: "a",
  },
];

const answerEls = document.querySelectorAll(".answer");
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

loadQuiz();

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<br/><img src="trophy_1024.gif"><h2>You answered ${score}/${quizData.length} questions correctly.<br/><br/>Good Job!</h2><br/>`;
      quiz.innerHTML += `<button id='refresh' onClick="window.location.reload(true)"> Start again </button>`;
    }
  }
});