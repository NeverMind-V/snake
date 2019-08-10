export default function getCoord(i = 0) {
  const min = 0;
  const max = 27;
  return (Math.floor(Math.random() * (max - min) + min) + i);
}
