// GAME FUNCTION:
// - Player must guess a number between a min and max
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct answer if lose
// - Let player choose to play again

let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

const game = document.querySelector("#game");
const minNum = document.querySelector("#min-num");
const maxNum = document.querySelector("#max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector("#message");

minNum.textContent = min;
maxNum.textContent = max;

const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};

guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  if (guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct, YOU WIN!`, "green");
  } else {
  }
});
