import gridGenerator from "../gridGenerator/gridGenerator.js";
import eventListeners from "../eventListeners/eventListeners.js";

const gameOfLife = () => {
  const boardGame = gridGenerator(18, 18);
  eventListeners(boardGame);
};

export default gameOfLife;
