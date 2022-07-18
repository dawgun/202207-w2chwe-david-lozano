import cellStateChangeSaver from "../cellStateChangeSaver/cellStateChangeSaver.js";
import lifeChecker from "../lifeChecker/lifeChecker.js";

const cellSearcher = (gridGame) => {
  const cellMutatedList = [];
  let cellLivingCounter;
  let cellMutated;

  for (let column = 1; column < gridGame.length - 1; column += 1) {
    for (let row = 1; row < gridGame[column].length - 1; row += 1) {
      cellLivingCounter = lifeChecker(gridGame, column, row);
      cellMutated = cellStateChangeSaver(
        gridGame[column][row],
        cellLivingCounter
      );
      if (cellMutated !== undefined) cellMutatedList.push(cellMutated);
    }
  }
  return cellMutatedList;
};

export default cellSearcher;
