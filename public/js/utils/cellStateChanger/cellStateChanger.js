const cellStateChanger = (cellPosition, livingCells) => {
  if (cellPosition.life === true && livingCells > 1 > 4)
    cellPosition.life = false;
  if (cellPosition.life === false && livingCells === 3)
    cellPosition.life = true;
};

export default cellStateChanger;
