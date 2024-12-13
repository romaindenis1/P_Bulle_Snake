
export function checkCollisions(snake, gameWidth, gameHeight) {

  if (snake[0].x < 0 || snake[0].x >= gameWidth || snake[0].y < 0 || snake[0].y >= gameHeight) {
    endGame();
    return;
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      endGame();
      return;
    }
  }
}


export function endGame() {
  alert("Game Over!");
  resetGame();
}