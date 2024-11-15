/*
import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";
*/

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval = 10; // Variable pour stocker l'identifiant de l'intervalle
let appleHeight = 45;
let appleWidth = 45;
let appleX;
let appleY;
let appleNumber = 1;
const appleColor = "red"
let snakeX = 0;
let snakeY = 0;

const gameWidth = gameCanvas.width - appleWidth;
const gameHeight = gameCanvas.height - appleHeight;



/*
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});
*/
function startGame() {
  /*
  snake = initSnake();
  food = generateFood(box, canvas);
  */
  gameInterval = setInterval(Move, gameSpeed); // Stockage de l'identifiant de l'intervalle
  gameInterval = setInterval(Move, gameSpeed);
}


function Move() {
  ctx.beginPath();
  ctx.clearRect(x-5, x-5, 55, 55);
  x+=1;
  ctx.rect(x, x, 45, 45);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fillRect(x, x, 45, 45);
}

startGame();










function GetRandom()
{
  let randomNumber = Math.floor(Math.random() * (gameHeight + 1));
  return randomNumber;
}

function SpawnApple()
{
  appleX = GetRandom();
  appleY = GetRandom();

  ctx.rect(appleX, appleY, appleWidth , appleHeight);
  ctx.stroke();
  ctx.fillStyle = appleColor;
  ctx.fillRect(appleX, appleY, appleWidth , appleHeight);

  console.log("X de pomme " + appleNumber + ": " + appleX);
  console.log("Y de pomme " + appleNumber + ": " + appleY);
}
let x = 0;

window.setInterval(Move, 10);

SpawnApple();
appleNumber+=1;
SpawnApple();