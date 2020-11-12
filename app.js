// GAME FUNCTION:
// - Player must guess a number between a min and max
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct answer if lose
// - Let player choose to play again

let min = 1;
let max = 10;
let winningNum;
let guessesLeft = 3;

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1));
  // Add + min to include the max number
  //   return Math.floor(Math.random() * (max - min + 1) + min);
};

winningNum = getRandomNum(min, max);

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

const gameOver = (won, msg) => {
  let color;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);
};

const validateAnswer = () => {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    console.log(guess);
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningNum}.`
      );
      guessBtn.value = "Play Again";
      guessBtn.classList.add("play-again");
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`Guess is not correct, ${guessesLeft} guesses left.`, "red");
    }
  }
};

guessBtn.addEventListener("click", validateAnswer);
game.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") {
    location.reload();
  }
});
