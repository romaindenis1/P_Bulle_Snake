import { handleControls } from './controls.js';
import { spawnApple, drawApple, checkAppleCollision } from './food.js';
import { checkCollisions } from './collision.js';
import { drawSnake, moveSnake } from './snake.js';
//import { drawScore } from './score.js';

export const gridSize = 20;  
const gameWidth = 600;
const gameHeight = 600;
let snake = [{ x: 200, y: 200 }];
let score = 0;
let isGameRunning = true;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function startGame() {
  spawnApple(gridSize, gameWidth, gameHeight);
  handleControls();
  tick();
}

function tick() {
  if (isGameRunning) {
    setTimeout(() => {
      clearBoard();
      moveSnake(gridSize);
      drawSnake(ctx, gridSize);  
      drawApple(ctx, gridSize);


      if (checkAppleCollision(snake)) {  
        //Condition a faire
      }

      checkCollisions(snake);
      tick();
    }, 100);
  }
}

function clearBoard() {
  ctx.clearRect(0, 0, gameWidth, gameHeight);
}

startGame();
