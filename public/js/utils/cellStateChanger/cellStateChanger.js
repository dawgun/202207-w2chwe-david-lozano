const cellStateChanger = (cellPosition, livingCells) => {
  const cellMutated = { ...cellPosition };

  if (cellPosition.life === true && (livingCells < 2 || livingCells > 3)) {
    cellMutated.life = false;
    return cellMutated;
  }

  if (cellPosition.life === false && livingCells === 3) {
    cellMutated.life = true;
    return cellMutated;
  }
  return undefined;
};

export default cellStateChanger;
