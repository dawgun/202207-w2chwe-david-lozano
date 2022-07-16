const lifeChecker = (gameBoard, column, row) => {
  const cellLivingCounter = 0;

  if (gameBoard[column - 1][row - 1].life === true) counter += 1;
  if (gameBoard[column - 1][row].life === true) counter += 1;
  if (gameBoard[column - 1][row + 1].life === true) counter += 1;
  if (gameBoard[column][row - 1].life === true) counter += 1;
  if (gameBoard[column][row + 1].life === true) counter += 1;
  if (gameBoard[column + 1][row - 1].life === true) counter += 1;
  if (gameBoard[column + 1][row].life === true) counter += 1;
  if (gameBoard[column + 1][row + 1].life === true) counter += 1;

  return cellLivingCounter;
};

export default lifeChecker;
