import { handleControls } from './controls.js';
import { spawnApple, drawApple, checkAppleCollision } from './food.js';
import { checkCollisions } from './collision.js';
import { drawSnake, moveSnake, snake, head } from './snake.js';

export const gridSize = 20;
const gameWidth = 600;
const gameHeight = 600;
let score = 0;
let isGameRunning = true;
let timeElapsed = 0;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

/**
 * Initializes the game by spawning the first apple, setting up controls, and starting the game loop.
 */
function startGame() {
  spawnApple(gridSize, gameWidth, gameHeight);
  handleControls();
  startTimer();
  tick();
}

/**
 * The main game loop that updates the game state and renders the game.
 */
function tick() {
  if (isGameRunning) {
    setTimeout(() => {
      clearBoard();
      moveSnake(gridSize);
      drawSnake(ctx, gridSize);
      drawApple(ctx, gridSize);
      drawScoreAndTimer();

      if (checkAppleCollision(snake)) {
        score++;
        spawnApple(gridSize, gameWidth, gameHeight);
      }

      if (checkCollisions(snake, gameWidth, gameHeight)) {
        isGameRunning = false;
        alert('Game Over!');
        clearBoard();
      }

      tick();
    }, 100);
  }
}

/**
 * Clears the game board by erasing the entire canvas.
 */
function clearBoard() {
  ctx.clearRect(0, 0, gameWidth, gameHeight);
}

/**
 * Starts the timer and updates the timer display every second.
 */
function startTimer() {
  setInterval(() => {
    if (isGameRunning) {
      timeElapsed++;
    }
  }, 1000);
}

/**
 * Draws the score and timer on the canvas.
 */
function drawScoreAndTimer() {
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 30);
  ctx.fillText(`Time: ${timeElapsed}s`, gameWidth - 100, 30);
}

// Start the game
startGame();