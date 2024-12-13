import { direction } from './controls.js';  
import { checkAppleCollision } from './food.js';

let snake = [{ x: 200, y: 200 }];  

export function moveSnake(gridSize) {
  const head = { ...snake[0] };

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

  snake.unshift(head); 

  if (!checkAppleCollision(snake)) {
    snake.pop();
  }
}

export function drawSnake(ctx, gridSize) {
  ctx.fillStyle = 'green';
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
  });
}
