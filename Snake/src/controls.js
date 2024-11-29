/**
 * Gère le changement de direction du serpent en fonction de l'entrée de l'utilisateur.
 *
 * Cette fonction est appelée chaque fois qu'une touche directionnelle est pressée.
 * Elle vérifie que la nouvelle direction n'est pas opposée à la direction actuelle
 * (pour éviter que le serpent se retourne sur lui-même) et retourne la nouvelle direction
 * si elle est valide.
 *
 * @param {KeyboardEvent} event - L'événement clavier qui contient les informations sur la touche pressée.
 * @param {string} currentDirection - La direction actuelle du serpent (peut être "UP", "DOWN", "LEFT", ou "RIGHT").
 * @returns {string} - La nouvelle direction du serpent après traitement, ou la direction actuelle si le changement n'est pas valide.
 */
const MoveAmount = 24;
const Direction = Object.freeze({
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
});
  //TODO utiliser une enum a la place de 4 bools
  export function handleDirectionChange(keyPressed, currentDirection, snakeXToChange, snakeYToChange) {
    switch (keyPressed.key) {
      case "w": // Move Up
        if (currentDirection !== Direction.DOWN) {
          snakeXToChange = 0;
          snakeYToChange = -24; // Set the change in Y direction (move up)
          currentDirection = Direction.UP;
        }
        break;
      case "s": // Move Down
        if (currentDirection !== Direction.UP) {
          snakeXToChange = 0;
          snakeYToChange = 24; // Set the change in Y direction (move down)
          currentDirection = Direction.DOWN;
        }
        break;
      case "a": // Move Left
        if (currentDirection !== Direction.RIGHT) {
          snakeXToChange = -24; // Set the change in X direction (move left)
          snakeYToChange = 0;
          currentDirection = Direction.LEFT;
        }
        break;
      case "d": // Move Right
        if (currentDirection !== Direction.LEFT) {
          snakeXToChange = 24; // Set the change in X direction (move right)
          snakeYToChange = 0;
          currentDirection = Direction.RIGHT;
        }
        break;
      default:
        break;
    }
    return { snakeXToChange, snakeYToChange, currentDirection };
  }