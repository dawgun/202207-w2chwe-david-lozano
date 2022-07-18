import gridChanger from "../gridChanger/gridChanger.js";
import nextButton from "../nextButton/nextButton.js";
import resetButton from "../resetButton/resetButton.js";
import startButton from "../startButton/startButton.js";

const eventListeners = (gameBoard) => {
  gridChanger(gameBoard);
  resetButton(gameBoard);
  nextButton(gameBoard);
  startButton(gameBoard);
};

export default eventListeners;
