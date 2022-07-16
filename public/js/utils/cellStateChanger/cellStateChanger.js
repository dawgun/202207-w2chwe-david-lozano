const cellStateChanger = (cellPosition, livingCells) => {
  if (cellPosition.life === true && (livingCells < 2 || livingCells > 3))
    cellPosition.life = false;
  if (cellPosition.life === false && livingCells === 3)
    cellPosition.life = true;

  return cellPosition;
};

export default cellStateChanger;
