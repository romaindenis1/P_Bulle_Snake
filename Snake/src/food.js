/**
 * Génère de manière aléatoire la position de la nourriture sur la grille du jeu.
 *
 * La nourriture est placée à une position aléatoire sur la grille, en s'assurant
 * que les coordonnées sont alignées sur la grille en fonction de la taille des cases (box).
 * La position générée est dans les limites du canvas, définies par sa largeur et sa hauteur.
 *
 * @param {number} box - La taille d'une case de la grille en pixels.
 * @param {HTMLCanvasElement} canvas - L'élément canvas représentant la surface de jeu.
 * @returns {{x: number, y: number}} - Un objet contenant les coordonnées `x` et `y` de la nourriture générée.
 */

const appleColor = "red"
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let appleX;
let appleY;
let appleHeight = 24;
let appleWidth = 24;
let gameHeight = 600 - appleHeight;
let gameWitdh = 600 - appleWidth;
let appleNumber = 1;
let isAppleTouched = false;

/**
 * Dessine la nourriture sur le canvas à la position spécifiée.
 *
 * Cette fonction utilise le contexte de rendu 2D pour dessiner un rectangle représentant
 * la nourriture à l'emplacement indiqué par les coordonnées `x` et `y`. La taille du rectangle
 * est déterminée par la taille d'une case (box) sur la grille.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {{x: number, y: number}} food - Un objet contenant les coordonnées `x` et `y` où la nourriture doit être dessinée.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de la nourriture.
 */

function getRandomPos()
{
  return Math.floor(Math.random() * (600 / 24)) * 24;
}

export function spawnApple()
{
  appleX = getRandomPos();
  appleY = getRandomPos();
}
export function drawApple()
{
  if (isAppleTouched)
  {
    SpawnApple();
  }
  ctx.rect(appleX, appleY, appleWidth , appleHeight);
  ctx.stroke();
  ctx.fillStyle = appleColor;
  ctx.fillRect(appleX, appleY, appleWidth , appleHeight);

  console.log("X de pomme " + appleNumber + ": " + appleX);
  console.log("Y de pomme " + appleNumber + ": " + appleY);
  appleNumber++;
}

