const cellStateChanger = (cellPosition, livingCells) => {
  const cellMutated = { ...cellPosition };

  if (cellPosition.life === true && (livingCells < 2 || livingCells > 3))
    cellMutated.life = false;

  if (cellPosition.life === false && livingCells === 3) cellMutated.life = true;

  return cellMutated;
};

export default cellStateChanger;
