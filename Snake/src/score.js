/**
 * Updates the HTML element with the current score.
 *
 * @param {number} score - The current score to display.
 */
export function drawScore(score) {
  const scoreElement = document.getElementById('scoreDisplay');
  if (scoreElement) {
    scoreElement.textContent = `Score: ${score}`;
  }
}
