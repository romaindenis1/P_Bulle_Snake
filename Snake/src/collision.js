
export function checkCollisions(snake, gameWidth, gameHeight) {
  const head = snake[0];  

  if (head.x < 0 || head.x >= gameWidth || head.y < 0 || head.y >= gameHeight) {
    return true;  
  }
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;  
    }
  }

  return false;  
}
