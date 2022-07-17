const cellChangeApplier = (gameBoard, cellMutated) => {
  let cellChanged;

  gameBoard.forEach((gridColumn) => {
    gridColumn.find((cellPosition) => {
      if (cellPosition.position === cellMutated.position) {
        cellPosition.life = cellMutated.life;
        cellChanged = cellPosition;
      }
    });
  });
  return cellChanged;
};

export default cellChangeApplier;
