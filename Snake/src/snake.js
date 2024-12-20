import { direction } from './controls.js';  
import { checkAppleCollision } from './food.js';

/**
 * The array representing the snake, where each element is an object with x and y coordinates.
 * @type {Array<{x: number, y: number}>}
 */
let snake = [
  { x: 200, y: 200 },
  { x: 180, y: 200 },
  { x: 160, y: 200 }
];

/**
 * The current position of the snake's head.
 * @type {{x: number, y: number}}
 */
export let head = { x: 200, y: 200 };

/**
 * Moves the snake in the current direction and updates its position.
 *
 * @param {number} gridSize - The size of each grid cell.
 */
export function moveSnake(gridSize) {
  switch (direction) {
    case 'UP':
      head.y -= gridSize; 
      break;
    case 'DOWN':
      head.y += gridSize; 
      break;
    case 'LEFT':
      head.x -= gridSize; 
      break;
    case 'RIGHT':
      head.x += gridSize; 
      break;
  }

  snake.unshift({ x: head.x, y: head.y });

  if (!checkAppleCollision(snake)) {
    snake.pop();
  }
}

/**
 * Draws the snake on the canvas.
 *
 * @param {CanvasRenderingContext2D} ctx - The canvas.
 * @param {number} gridSize - The size of each grid cell.
 */
export function drawSnake(ctx, gridSize) {
  snake.forEach((segment, index) => {
    if (index === 0) {
      ctx.fillStyle = 'darkgreen'; 
    } else {
      ctx.fillStyle = 'green'; 
    }
    ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
  });
}

export { snake };
