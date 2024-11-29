
//import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { DrawApple, SpawnApple } from "./food.js";
import { handleDirectionChange } from "./controls.js";
//import { checkCollision, checkWallCollision } from "./collision.js";
//import { drawScore } from "./score.js";

//const
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gameWidth = gameCanvas.width;
const gameHeight = gameCanvas.height;
const appleSpawnWidth = gameCanvas.width - 24;
const appleSpawnHeight = gameCanvas.height - 24;

const snakeColor = "white"
const box = 20;
const gameSpeed = 75;

//snake
let snake;
let isMovingRight = false;
let isMovingUp = false;
let isMovingLeft = false;
let isMovingDown = false;
let snakeX = 0;
let snakeY = 0;
let snakeSize = 24;
let snakeXToChange = 24;
let snakeYToChange = 0;

//global
let isGameRunning = false;
let score = 0;
let gameInterval = 10;
let backgroundColor = "#1f1f1f";

//idk
let food;
let direction = "r";

function checkKey(e) {
  var event = window.keyPressed ? window.keyPressed : e;
  console.log(event.keyCode);
}



function startGame() {
  /*
  snake = initSnake();
  */
  isGameRunning = true;
  SpawnApple();
  Tick();
}

function Tick()
{
  if (isGameRunning) {
    setTimeout (()=>{
      debugger
      ClearBoard();
      DrawApple();
      Draw();
      Move();
      Tick();
    },gameSpeed)
  }
}

function ClearBoard()
{
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, gameWidth, gameHeight)  
}

function Draw() {
  ctx.beginPath();
  ctx.clearRect(snakeX-5, snakeY-5, 55, 55);
  
  snakeX+=snakeXToChange;
  snakeY+=snakeYToChange;

  ctx.rect(snakeX, snakeY, snakeSize, snakeSize);
  ctx.stroke();
  ctx.fillStyle = snakeColor;
  ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize);
}



  document.addEventListener("keydown", (keyPressed) => {
    const direction = handleDirectionChange(keyPressed, snakeXToChange, snakeYToChange);
    snakeXToChange = direction.snakeXToChange;
    snakeYToChange = direction.snakeYToChange;
    isMovingDown = direction.isMovingDown;
    isMovingUp = direction.isMovingUp;
    isMovingRight = direction.isMovingRight;
    isMovingLeft = direction.isMovingLeft;
  });
function Move()
{
  
}

startGame();