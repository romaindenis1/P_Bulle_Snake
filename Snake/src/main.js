
//import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { GetRandomPos, SpawnApple } from "./food.js";
import { handleDirectionChange } from "./controls.js";
//import { checkCollision, checkWallCollision } from "./collision.js";
//import { drawScore } from "./score.js";


const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let isMovingRight = false;
let isMovingUp = false;
let isMovingLeft = false;
let isMovingDown = false;
let score = 0;
let gameInterval = 10;

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
  food = SpawnApple(box, canvas);
  
  gameInterval = setInterval(Move, gameSpeed);
  game2Interval = setInterval(Move, gameSpeed / 2);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
