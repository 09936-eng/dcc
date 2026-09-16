// script.js
// ควบคุม logic การทำงานของเกมทั้งหมด
// ดึงข้อมูลคำถามมาจาก questions.js (ไฟล์ที่โหลดมาก่อนหน้านี้)

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const scoreEl = document.getElementById("score");
const questionNumberEl = document.getElementById("question-number");
const totalQuestionsEl = document.getElementById("total-questions");
const feedbackEl = document.getElementById("feedback");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

function initGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreEl.textContent = score;
  totalQuestionsEl.textContent = QUESTIONS.length;
  gameScreen.classList.remove("hidden");
  resultScreen.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  feedbackEl.classList.add("hidden");
  const current = QUESTIONS[currentQuestionIndex];
  questionText.textContent = current.question;
  questionNumberEl.textContent = currentQuestionIndex + 1;

  answerButtons.innerHTML = "";
  current.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => selectAnswer(index));
    answerButtons.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const current = QUESTIONS[currentQuestionIndex];
  const buttons = answerButtons.querySelectorAll(".answer-btn");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === current.correctIndex) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === current.correctIndex) {
    score++;
    scoreEl.textContent = score;
    feedbackEl.textContent = "✅ ถูกต้อง!";
    feedbackEl.className = "feedback correct-text";
  } else {
    feedbackEl.textContent = "❌ ผิด! เฉลยคือ: " + current.answers[current.correctIndex];
    feedbackEl.className = "feedback wrong-text";
  }
  feedbackEl.classList.remove("hidden");

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScoreEl.textContent = `${score} / ${QUESTIONS.length}`;
}

restartBtn.addEventListener("click", initGame);

document.addEventListener("DOMContentLoaded", initGame);
