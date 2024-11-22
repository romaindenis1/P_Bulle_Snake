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
export function handleDirectionChange(event, isMovingRight, isMovingLeft, isMovingDown, isMovingUp, snakeXToChange, snakeYToChange) {
  switch (event.key) {
    case "ArrowUp":
    case "w":
      if (!isMovingDown) { 
        snakeXToChange = 0;
        snakeYToChange = -24;

        
        isMovingUp = true;
        isMovingRight = false;
        isMovingDown = false;
        isMovingLeft = false;
      }
      break;

    case "ArrowDown":
    case "s":
      if (!isMovingUp) { 
        snakeXToChange = 0;
        snakeYToChange = 24;

        
        isMovingDown = true;
        isMovingUp = false;
        isMovingRight = false;
        isMovingLeft = false;
      }
      break;

    case "ArrowLeft":
    case "a":
      if (!isMovingRight) { 
        snakeXToChange = -24;
        snakeYToChange = 0;

        
        isMovingLeft = true;
        isMovingUp = false;
        isMovingRight = false;
        isMovingDown = false;
      }
      break;

    case "ArrowRight":
    case "d":
      if (!isMovingLeft) { 
        snakeXToChange = 24;
        snakeYToChange = 0;

        
        isMovingRight = true;
        isMovingUp = false;
        isMovingDown = false;
        isMovingLeft = false;
      }
      break;

    default:
      break; 
  }

  
  return { snakeXToChange, snakeYToChange, isMovingDown, isMovingLeft, isMovingRight, isMovingUp };
}
