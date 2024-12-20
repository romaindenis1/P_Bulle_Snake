export function checkCollisions(snake, gameWidth, gameHeight) {

  //Si sort du jeu
  if (snake[0].x < 0 || snake[0].x >= gameWidth || snake[0].y < 0 || snake[0].y >= gameHeight) {
    return true;
  }
  //Si touche lui meme
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      return true;
    }
  }
  return false;
}

export function endGame() {
  alert("Game Over!");
  return isGameRunning = false;
}