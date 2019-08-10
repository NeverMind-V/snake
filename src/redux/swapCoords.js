export default function swapCoords(coord) {
  const minCoord = -1;
  const maxCoord = 28;
  let resultCoord;
  if (coord === minCoord) {
    resultCoord = maxCoord - 1;
  } else if (coord === maxCoord) {
    resultCoord = minCoord + 1;
  }
  return resultCoord;
}
