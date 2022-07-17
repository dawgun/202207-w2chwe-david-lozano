const gridChanger = (gameBoard) => {
  const htmlGrid = document.querySelectorAll(".game-of-life__pixel");

  htmlGrid.forEach((pixel) => {
    pixel.addEventListener("click", () => {
      if (!pixel.classList.contains("hidden-pixel")) {
        pixel.classList.toggle("pixel-alive");
        const htmlSelector = `${pixel.classList[1]} ${pixel.classList[2]}`;
        gameBoard.forEach((gameColumn) => {
          gameColumn.forEach((cellPosition) => {
            if (cellPosition.position === htmlSelector) {
              if (pixel.classList.contains("pixel-alive")) {
                cellPosition.life = true;
              } else {
                cellPosition.life = false;
              }
            }
          });
        });
      }
    });
  }, false);
};

export default gridChanger;
