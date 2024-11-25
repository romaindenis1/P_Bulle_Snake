
//import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { DrawApple, SpawnApple } from "./food.js";
import { handleDirectionChange } from "./controls.js";
//import { checkCollision, checkWallCollision } from "./collision.js";
//import { drawScore } from "./score.js";


const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 100;
let snake;
let food;
let isMovingRight = false;
let isMovingUp = false;
let isMovingLeft = false;
let isMovingDown = false;
let isGameRunning = false;

let score = 0;
let gameInterval = 10;

let backgroundColor = "#1f1f1f";

let snakeX = 0;
let snakeY = 0;
let snakeSize = 24;
let snakeXToChange = 24;
let snakeYToChange = 0;

const gameWidth = gameCanvas.width - 45;
const gameHeight = gameCanvas.height - 45;

function checkKey(e) {
  var event = window.keyPressed ? window.keyPressed : e;
  console.log(event.keyCode);
}

document.addEventListener("keydown", (keyPressed) => {
  const direction = handleDirectionChange(event, snakeXToChange, snakeYToChange);
  snakeXToChange = direction.snakeXToChange;
  snakeYToChange = direction.snakeYToChange;
  isMovingDown = direction.isMovingDown;
  isMovingUp = direction.isMovingUp;
  isMovingRight = direction.isMovingRight;
  isMovingLeft = direction.isMovingLeft;
});

function startGame() {
  /*
  snake = initSnake();
  */
  isGameRunning = true;
  SpawnApple();
  Tick();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Tick()
{
  if (isGameRunning)
    setTimeout(()=>{
      ClearBoard();
      DrawApple();
      Move();
      Tick();
  }, gameSpeed)
}

function ClearBoard()
{
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, gameWidth + 45, gameHeight + 45)  
}

function Move() {
  ctx.beginPath();
  ctx.clearRect(snakeX-5, snakeY-5, 55, 55);
  
  snakeX+=snakeXToChange;
  snakeY+=snakeYToChange;

  ctx.rect(snakeX, snakeY, snakeSize, snakeSize);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
}

startGame();

window.setInterval(Move, 1);
