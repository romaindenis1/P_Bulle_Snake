
//import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { DrawApple, SpawnApple } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkWallCollision } from "./collision.js"; //checkCollision, 
//import { drawScore } from "./score.js";

//const
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gameWidth = gameCanvas.width;
const gameHeight = gameCanvas.height;

const snakeColor = "white";
const box = 20;
const gameSpeed = 75;


let isMovingRight = false;
let isMovingUp = false;
let isMovingLeft = false;
let isMovingDown = false;
let snakeX = gameWidth / 2 - 12; 
let snakeY = gameHeight / 2 - 12; 
let snakeSize = 24;
let snakeXToChange = 24;
let snakeYToChange = 0;
let currentDirection;

let isGameRunning = false;
let score = 0;
let gameInterval = 10;
let backgroundColor = "#1f1f1f";


function startGame() {
  isGameRunning = true;
  SpawnApple();
  Tick();
}

function Tick() {
  if (isGameRunning) {
    setTimeout(() => {
      ClearBoard();
      DrawApple();
      Move();
      Draw();
      Tick();
    }, gameSpeed);
  }
}

function ClearBoard() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function Draw() {
  ctx.beginPath();
  ctx.clearRect(snakeX-5, snakeY-5, 55, 55);

  ctx.rect(snakeX, snakeY, snakeSize, snakeSize);
  ctx.stroke();
  ctx.fillStyle = snakeColor;
  ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
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

function Move() {
  snakeX += snakeXToChange;
  snakeY += snakeYToChange;

  if (checkWallCollision(snakeX, snakeY, gameWidth, gameHeight)) {
    isGameRunning = false;
  }
}

startGame();