const cellChangeApplier = (gameBoard, cellMutated) => {
  let cellChanged;

  gameBoard.forEach((gameColumn) => {
    gameColumn.forEach((cellPosition) => {
      if (cellPosition.position === cellMutated.position) {
        cellPosition.life = cellMutated.life;
        cellChanged = cellPosition;
        const htmlPosition = cellPosition.position.split(" ");
        document
          .querySelector(`.${htmlPosition[0]}.${htmlPosition[1]}`)
          .classList.toggle("pixel-alive");
      }
    });
  });
  return cellChanged;
};

export default cellChangeApplier;
