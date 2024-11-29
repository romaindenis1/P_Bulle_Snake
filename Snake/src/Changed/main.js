
import {drawSnake, moveSnake, snakeXToChange, snakeYToChange } from "./snake.js"; //initSnake
import { drawApple, spawnApple } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkWallCollision } from "./collision.js"; //checkCollision, 
//import { drawScore } from "./score.js";

//const
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

export let gameWidth = gameCanvas.width;
export let gameHeight = gameCanvas.height;

const snakeColor = "white";
const box = 20;
const gameSpeed = 75;

export let snakeX = gameWidth / 2 - 12; 
export let snakeY = gameHeight / 2 - 12; 


let snakeSize = 24;

let currentDirection;

let isGameRunning = false;
let score = 0;
let gameInterval = 10;
let backgroundColor = "#1f1f1f";


function startGame() {
  isGameRunning = true;
  spawnApple();
  Tick();
}

function Tick() {
  if (isGameRunning) {
    setTimeout(() => {
      clearBoard();
      drawApple();
      moveSnake();
      drawSnake();
      Tick();
    }, gameSpeed);
  }
}

function clearBoard() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

document.addEventListener("keydown", (keyPressed) => {
  const direction = handleDirectionChange(keyPressed, currentDirection, snakeXToChange, snakeYToChange);
  currentDirection = direction.RIGHT;

  snakeXToChange = direction.snakeXToChange;
  snakeYToChange = direction.snakeYToChange;
  currentDirection = direction.currentDirection;

  console.log(`Snake Position: X=${snakeX}, Y=${snakeY}`);
  console.log(`Direction: Up=${isMovingUp}, Down=${isMovingDown}, Left=${isMovingLeft}, Right=${isMovingRight}`);
});



startGame();