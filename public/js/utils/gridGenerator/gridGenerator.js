const gridGenerator = (row, column) => {
  const gameOfLifeBoard = new Array(row).fill(false);

  for (let i = 0; i < row; i += 1) {
    gameOfLifeBoard[i] = new Array(column).fill(false);
  }
  return gameOfLifeBoard;
};

export default gridGenerator;
