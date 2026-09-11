const question = document.getElementById("question");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const ball = document.getElementById("ball");
const ballVoid = document.getElementById("ball-void");

const responses = [
  "Don't count on it.",
  "Concentrate and ask again.",
  "Yes.",
  "No.",
  "Maybe.",
  "You're cooked."
];

result.classList.add("hidden");
ballVoid.classList.add("hidden");

submitBtn.addEventListener('click', function (event) {
  // prevent the page from being redirected when the 
  // button is clicked.
  event.preventDefault();

  // TODO: hide the "ball void" image and show the "ball" when
  // there is no question being asked.
 
  // TODO: show the "ball void" image and result element.

  // pick a random response.
  let index = Math.floor(Math.random() * responses.length);
  let response = responses[index];

  // TODO: set the result html to be the response.
});

