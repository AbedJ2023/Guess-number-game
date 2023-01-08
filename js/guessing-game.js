"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const guessesList = document.querySelector("#guesses-list");
const input = document.querySelector(".guess");
const button = document.querySelector(".check");
const boxNumber = document.querySelector(".number");
const scoreNumber = document.querySelector(".score");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "list";
  li.innerHTML = input.value;
  const guess = Number(input.value);
  input.value = "";

  guessesList.appendChild(li);

  // when there is no input!
  if (!guess) {
    displayMessage("❌ No number!");

    // when the guess number is higher than 20
  } else if (guess > 20) {
    displayMessage("Guess between 1 and 20!");

    // when the guess number is right.
  } else if (guess === secretNumber) {
    displayMessage("🏆 Correct Number!");
    boxNumber.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    boxNumber.style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when guess is wrong!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too high!" : "📉Too low!");
      score--;
      scoreNumber.textContent = score;
    } else {
      displayMessage("You Lost the game!");
      scoreNumber.textContent = 0;
      button.disabled = true;
    }
  }
});

// rest the game without load the page!
document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreNumber.textContent = score;
  boxNumber.textContent = "?";
  boxNumber.style.width = "15rem";
  body.style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  input.value = "";
  guessesList.innerHTML = "";
});
