/**
 * Updates the HTML element with the current score.
 *
 * @param {number} score - The current score to display.
 */
/**
 * Draws the score and timer on the canvas.
 */
import { score, timeElapsed } from './main.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
export function drawScoreAndTimer(gameWidth, gameHeight) {
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 30);
  ctx.fillText(`Time: ${timeElapsed}s`, gameWidth - 100, 30);
}