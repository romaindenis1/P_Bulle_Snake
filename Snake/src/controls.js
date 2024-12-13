export let direction = 'RIGHT';

export function handleControls() {
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'w':
        if (direction !== 'DOWN') direction = 'UP';
        break;
      case 's':
        if (direction !== 'UP') direction = 'DOWN';
        break;
      case 'a':
        if (direction !== 'RIGHT') direction = 'LEFT';
        break;
      case 'd':
        if (direction !== 'LEFT') direction = 'RIGHT';
        break;
      default:
      break;
    }
  });
}