import gridGenerator from "./gridGenerator.js";

describe("Given the gridGenerator function", () => {
  describe("When it's called and it recieves 2 and 2", () => {
    test("Then it should return an array with 2 arrays with 2 arrays into with an object in each", () => {
      const firstNumber = 2;
      const secondNumber = 2;
      const expectedReturn = [
        [
          { position: "column0 row0", life: false },
          { position: "column0 row1", life: false },
        ],
        [
          { position: "column1 row0", life: false },
          { position: "column1 row1", life: false },
        ],
      ];

      const gridBoard = gridGenerator(firstNumber, secondNumber);

      expect(gridBoard).toEqual(expectedReturn);
    });
  });
});
