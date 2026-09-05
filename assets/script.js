const question = document.getElementById("question");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const ball = document.getElementById("ball");
const ballVoid = document.getElementById("ball-void");

const responsePool = [
  "Don't count on it.",
  "Concentrate and ask again.",
  "Yes.",
  "No.",
  "Maybe.",
  "I think you're cooked."
];

result.classList.add("hidden");
ballVoid.classList.add("hidden");

submitBtn.addEventListener('click', function () {
  if (question.value.length == 0) {
    ballVoid.classList.add("hidden");
    ball.classList.remove("hidden");
    result.classList.add("hidden");
    return;
  }

  ballVoid.classList.remove("hidden");
  ball.classList.add("hidden");
  result.classList.remove("hidden");

  let index = Math.floor(Math.random() * responsePool.length);
  let response = responsePool[index];
  result.innerHTML = response;
});
