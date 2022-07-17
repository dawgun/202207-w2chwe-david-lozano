import cellListChangeApplier from "../cellListChangeApplier/cellListChangeApplier.js";
import cellSearcher from "../cellSearcher/cellSearcher.js";

const nextButton = (gameBoard) => {
  const nextButtonHtml = document.querySelector(".game-buttons__button-next");

  nextButtonHtml.addEventListener("click", () => {
    const cellMutatedList = cellSearcher(gameBoard);
    cellListChangeApplier(gameBoard, cellMutatedList);
  });
};

export default nextButton;
