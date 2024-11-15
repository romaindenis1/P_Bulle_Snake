
//import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { GetRandomPos, SpawnApple } from "./food.js";
//import { handleDirectionChange } from "./controls.js";
//import { checkCollision, checkWallCollision } from "./collision.js";
//import { drawScore } from "./score.js";


const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval = 10; // Variable pour stocker l'identifiant de l'intervalle
let snakeX = 0;
let snakeY = 0;


const gameWidth = gameCanvas.width - 45;
const gameHeight = gameCanvas.height - 45;


function checkKey(e) {
  var event = window.event ? window.event : e;
  console.log(event.keyCode)
}

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  /*
  snake = initSnake();
  */
  food = SpawnApple(box, canvas);
  
  gameInterval = setInterval(Move, gameSpeed); // Stockage de l'identifiant de l'intervalle
  gameInterval = setInterval(Move, gameSpeed);
}

function Move() {
  ctx.beginPath();
  ctx.clearRect(snakeX-5, snakeY-5, 55, 55);
  snakeX+=1;
  snakeY+=1;
  ctx.rect(snakeX, snakeY, 45, 45);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fillRect(snakeX, snakeY, 45, 45);
}

startGame();

window.setInterval(Move, 1);
