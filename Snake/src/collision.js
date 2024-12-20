/**
 * Checks if the snake has collided with the wall or itself.
 *
 * @param {Array<{x: number, y: number}>} snake - The array that is the snake, with x and y values.
 * @param {number} gameWidth - The width of the game area.
 * @param {number} gameHeight - The height of the game area.
 * @returns {boolean} - Returns true if a collision is detected, otherwise false.
 */
export function checkCollisions(snake, gameWidth, gameHeight) {
  const head = snake[0];  

  // Wall collision
  if (head.x < 0 || head.x >= gameWidth || head.y < 0 || head.y >= gameHeight) {
    return true;  
  }

  // Snake collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;  
    }
  }

  return false;  
}
