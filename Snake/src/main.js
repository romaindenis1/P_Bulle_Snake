import { handleControls } from './controls.js';
import { spawnApple, drawApple, checkAppleCollision } from './food.js';
import { checkCollisions } from './collision.js';
import { drawSnake, moveSnake, snake, head } from './snake.js';

let score = 0;
let isGameRunning = true;
let timeElapsed = 0;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

/**
 * Loads the configuration and starts the game.
 */
async function loadConfigAndStartGame() {
  const response = await fetch('./config.json');  //Attend la requette https
  const config = await response.json(); 

  //Assignation de valeurs de config.json
  const gridSize = config.gridSize;
  const gameWidth = config.gameWidth;
  const gameHeight = config.gameHeight;
  const tickInterval = config.tickInterval;
  const timerInterval = config.timerInterval;

  //Lance le jeu
  startGame(gridSize, gameWidth, gameHeight, tickInterval, timerInterval);
}


/**
 * Initializes the game by spawning the first apple, setting up controls, and starting the game loop.
 */
function startGame(gridSize, gameWidth, gameHeight, tickInterval, timerInterval) {
  spawnApple(gridSize, gameWidth, gameHeight);
  handleControls();
  startTimer(timerInterval);
  tick(gridSize, gameWidth, gameHeight, tickInterval);
}

/**
 * The main game loop that updates the game state and renders the game.
 */
function tick(gridSize, gameWidth, gameHeight, tickInterval) {
  if (isGameRunning) {
    setTimeout(() => {
      clearBoard(gameWidth, gameHeight);
      moveSnake(gridSize);
      drawSnake(ctx, gridSize);
      drawApple(ctx, gridSize);
      drawScoreAndTimer(gameWidth, gameHeight);

      if (checkAppleCollision(snake)) {
        score++;
        spawnApple(gridSize, gameWidth, gameHeight);
      }

      if (checkCollisions(snake, gameWidth, gameHeight)) {
        isGameRunning = false;
        gameOver(gameWidth, gameHeight);
      }

      tick(gridSize, gameWidth, gameHeight, tickInterval);
    }, tickInterval);
  }
}

/**
 * Clears the game board by erasing the entire canvas.
 */
function clearBoard(gameWidth, gameHeight) {
  ctx.clearRect(0, 0, gameWidth, gameHeight);
}

/**
 * Starts the timer and updates the timer display every second.
 */
function startTimer(timerInterval) {
  setInterval(() => {
    if (isGameRunning) {
      timeElapsed++;
    }
  }, timerInterval);
}

/**
 * Draws the score and timer on the canvas.
 */
function drawScoreAndTimer(gameWidth, gameHeight) {
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 30);
  ctx.fillText(`Time: ${timeElapsed}s`, gameWidth - 100, 30);
}

/**
 * Displays the game over screen.
 */
function gameOver(gameWidth, gameHeight) {
  // Sombrir fond
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, gameWidth, gameHeight);

  // Game Over
  ctx.fillStyle = 'white';
  ctx.font = '50px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Game Over', gameWidth / 2, gameHeight / 2);

  // Score et temps
  ctx.font = '30px Arial';
  ctx.fillText(`Score: ${score}`, gameWidth / 2 - 100, gameHeight / 2 + 50);
  ctx.fillText(`Time: ${timeElapsed}s`, gameWidth / 2 + 100, gameHeight / 2 + 50);
}

// Lance le jeu
loadConfigAndStartGame();
