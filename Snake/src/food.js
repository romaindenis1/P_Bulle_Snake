/**
 * The current position of the apple.
 * @type {{x: number, y: number}}
 */
let apple = { x: 0, y: 0 };

/**
 * Spawns a new apple at a random position within the game area.
 *
 * @param {number} gridSize - The size of each grid cell.
 * @param {number} gameWidth - The width of the game area.
 * @param {number} gameHeight - The height of the game area.
 */
export function spawnApple(gridSize, gameWidth, gameHeight) {
  apple.x = Math.floor(Math.random() * (gameWidth / gridSize)) * gridSize;
  apple.y = Math.floor(Math.random() * (gameHeight / gridSize)) * gridSize;
}

/**
 * Draws the apple on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas.
 * @param {number} gridSize - The size of each grid cell.
 */
export function drawApple(ctx, gridSize) {
  ctx.fillStyle = 'red';
  ctx.fillRect(apple.x, apple.y, gridSize, gridSize);
}

/**
 * Checks if the snake's head has collided with the apple.
 *
 * @param {Array<{x: number, y: number}>} snake - The array that is the snake, with x and y coordinates.
 * @returns {boolean} - Returns true if the snake's head has collided with the apple, otherwise false.
 */
export function checkAppleCollision(snake) {
  const head = snake[0];
  return head.x === apple.x && head.y === apple.y;
}
