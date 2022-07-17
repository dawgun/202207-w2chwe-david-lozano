import cellChangeApplier from "../cellChangeApplier/cellChangeApplier.js";

const cellListChangeApplier = (gameBoard, cellMutatedList) => {
  const cellListChanged = [];
  let cellChanged;

  cellMutatedList.forEach((cellMutated) => {
    cellChanged = cellChangeApplier(gameBoard, cellMutated);
    cellListChangeApplier.push(cellChanged);
  });

  return cellListChanged;
};

export default cellListChangeApplier;
