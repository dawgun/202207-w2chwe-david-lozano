const gridGenerator = (rowLength, columnLength) => {
  const gameOfLifeBoard = new Array(rowLength);
  for (let column = 0; column < columnLength; column += 1) {
    gameOfLifeBoard[column] = new Array(columnLength);
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
