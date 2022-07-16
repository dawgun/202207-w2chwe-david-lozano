const lifeChecker = (gameBoard, column, row) => {
  let cellLivingCounter = 0;

  if (gameBoard[column - 1][row - 1].life === true) cellLivingCounter += 1;
  if (gameBoard[column - 1][row].life === true) cellLivingCounter += 1;
  if (gameBoard[column - 1][row + 1].life === true) cellLivingCounter += 1;
  if (gameBoard[column][row - 1].life === true) cellLivingCounter += 1;
  if (gameBoard[column][row + 1].life === true) cellLivingCounter += 1;
  if (gameBoard[column + 1][row - 1].life === true) cellLivingCounter += 1;
  if (gameBoard[column + 1][row].life === true) cellLivingCounter += 1;
  if (gameBoard[column + 1][row + 1].life === true) cellLivingCounter += 1;

  return cellLivingCounter;
};

export default lifeChecker;
