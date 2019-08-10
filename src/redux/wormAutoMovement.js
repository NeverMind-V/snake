import swapCoords from './swapCoords';

export default function wormAutoMovement(dir, wormPosition) {
  let nextCoord;
  let nextPosition;
  switch (dir) {
    case 'up':
      nextCoord = swapCoords(wormPosition.top - 1) === undefined
        ? wormPosition.top - 1
        : swapCoords(wormPosition.top - 1);
      nextPosition = {
        ...wormPosition,
        top: nextCoord,
      };
      break;
    case 'down':
      nextCoord = swapCoords(wormPosition.top + 1) === undefined
        ? wormPosition.top + 1
        : swapCoords(wormPosition.top + 1);
      nextPosition = {
        ...wormPosition,
        top: nextCoord,
      };
      break;
    case 'right':
      nextCoord = swapCoords(wormPosition.left + 1) === undefined
        ? wormPosition.left + 1
        : swapCoords(wormPosition.left + 1);
      nextPosition = {
        ...wormPosition,
        left: nextCoord,
      };
      break;
    case 'left':
      nextCoord = swapCoords(wormPosition.left - 1) === undefined
        ? wormPosition.left - 1
        : swapCoords(wormPosition.left - 1);
      nextPosition = {
        ...wormPosition,
        left: nextCoord,
      };
      break;
    default:
  }
  return nextPosition;
}
