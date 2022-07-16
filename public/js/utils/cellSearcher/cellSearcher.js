import cellStateChanger from "../cellStateChanger/cellStateChanger.js";
import lifeChecker from "../lifeChecker/lifeChecker.js";

const cellSearcher = (gridGame) => {
  const cellMutatedList = [];
  let cellLivingCounter;
  let cellMutated;

  for (let column = 1; column < 4; column += 1) {
    for (let row = 1; row < 4; row += 1) {
      cellLivingCounter = lifeChecker(gridGame, column, row);
      cellMutated = cellStateChanger(gridGame[column][row], cellLivingCounter);
      if (cellMutated !== undefined) cellMutatedList.push(cellMutated);
    }
  }
  return cellMutatedList;
};

export default cellSearcher;
