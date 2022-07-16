import gridGenerator from "./gridGenerator";

describe("Given the gridGenerator function", () => {
  describe("When it's called and it recieves 2 and 2", () => {
    test("Then it should return an array with 2 arrays with 2 arrays into", () => {
      const firstNumber = 2;
      const secondNumber = 2;
      const expectedReturn = [
        [false, false],
        [false, false],
      ];

      const gridBoard = gridGenerator(firstNumber, secondNumber);

      expect(gridBoard).toEqual(expectedReturn);
    });
  });
});
