function guessingGame() {
  const secretNum = Math.floor(Math.random() * 100);
  let guessCount = 0;
  let hasWon = false;

  return function (guess) {
    if (hasWon) return "The game is over, you already won!";
    guessCount++;
    if (num === secretNum) {
      hasWon = true;
      let guess = guessCount === 1 ? "guess" : "guesses";
      return `You win! You found ${secretNum} in ${guessCount} ${guess}.`;
    }
    if (num < secretNum) return `${num} is too low!`;
    if (num > secretNum) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
