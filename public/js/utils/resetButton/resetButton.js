const resetButton = (gameBoard) => {
  const resetButtonHtml = document.querySelector(".game-buttons__button-reset");

  resetButtonHtml.addEventListener("click", () => {
    const htmlGrid = document.querySelectorAll(".game-of-life__pixel");

    htmlGrid.forEach((pixel) => {
      pixel.classList.remove("pixel-alive");
    });

    gameBoard.forEach((gameColumn) => {
      gameColumn.forEach((cellPosition) => {
        cellPosition.life = false;
      });
    });
  });
};

export default resetButton;
