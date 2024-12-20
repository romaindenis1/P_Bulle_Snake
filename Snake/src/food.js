let apple = { x: 0, y: 0 };

export function spawnApple(gridSize, gameWidth, gameHeight) {
  apple.x = Math.floor(Math.random() * (gameWidth / gridSize)) * gridSize;
  apple.y = Math.floor(Math.random() * (gameHeight / gridSize)) * gridSize;
}

export function drawApple(ctx, gridSize) {
  ctx.fillStyle = 'red';
  ctx.fillRect(apple.x, apple.y, gridSize, gridSize);
}

export function checkAppleCollision(snake) {
  const head = snake[0];
  return head.x === apple.x && head.y === apple.y;
}
