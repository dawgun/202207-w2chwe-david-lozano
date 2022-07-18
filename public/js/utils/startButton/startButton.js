import cellListChangeApplier from "../cellListChangeApplier/cellListChangeApplier.js";
import cellSearcher from "../cellSearcher/cellSearcher.js";

const startButton = (gameBoard) => {
  const startButtonHtml = document.querySelector(".game-buttons__button-start");

  startButtonHtml.addEventListener("click", () => {
    setInterval(() => {
      const cellMutatedList = cellSearcher(gameBoard);
      cellListChangeApplier(gameBoard, cellMutatedList);
    }, 1000);
  });
};

export default startButton;
