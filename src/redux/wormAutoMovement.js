// import swapCoords from './swapCoords';

export default function wormAutoMovement(dir, wormPosition) {
  const wormBody = [...wormPosition];
  const wormHead = wormPosition[wormPosition.length - 1];
  switch (dir) {
    case 'up':
      wormHead.top -= 1;
      break;
    case 'down':
      wormHead.top += 1;
      break;
    case 'right':
      wormHead.left += 1;
      break;
    case 'left':
      wormHead.left -= 1;
      break;
    default:
  }
  wormBody.push(wormHead);
  wormBody.shift();
  return wormBody;
}
