const resetButton = (gameBoard) => {
  const resetButton = document.querySelector(".game-buttons__button-reset");

  resetButton.addEventListener("click", () => {
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
