/*
import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";
*/

/*
const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle
*/

/*
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  snake = initSnake();
  food = generateFood(box, canvas);

  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

function draw() {
  // A compléter
}

startGame();
*/

let randomNumber;
let appleHeight = 45;
let appleWidth = 45;
let appleX;
let appleY;
const appleColor = "red"


const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gameWidth = gameCanvas.width - appleWidth;
const gameHeight = gameCanvas.height - appleHeight;


ctx.beginPath();
ctx.rect(0, 0, 45, 45);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 45, 45);



function GetRandom()
{
  randomNumber = Math.floor(Math.random() * (gameHeight + 1));
  return randomNumber;
}

function SpawnApple()
{
  appleX = GetRandom();
  appleY = GetRandom();

  ctx.beginPath();
  ctx.rect(appleX, appleY, appleWidth , appleHeight);
  ctx.stroke();
  ctx.fillStyle = appleColor;
  ctx.fillRect(appleX, appleY, appleWidth , appleHeight);
}

SpawnApple();
console.log("Y: " + appleY);
console.log("X: " + appleX);