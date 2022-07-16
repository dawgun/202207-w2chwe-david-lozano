const gridGenerator = (rowLength, columnLength) => {
  const gameOfLifeBoard = new Array(3);
  for (let column = 0; column < columnLength; column += 1) {
    gameOfLifeBoard[column] = new Array(3);
    for (let row = 0; row < rowLength; row += 1) {
      gameOfLifeBoard[column][row] = {
        position: `column${column} row${row}`,
        life: false,
      };
    }
  }
  return gameOfLifeBoard;
};

export default gridGenerator;
