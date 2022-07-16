import lifeChecker from "./lifeChecker.js";

describe("Given the an array of arrays", () => {
  describe("When it's called and it recieves an object of Game of Life, value 1 and value 1", () => {
    test("Then it should return 3", () => {
      const firstValue = [
        [
          { position: "column0 row0", life: false },
          { position: "column0 row1", life: false },
          { position: "column0 row2", life: true },
        ],
        [
          { position: "column1 row0", life: false },
          { position: "column1 row1", life: false },
          { position: "column1 row2", life: true },
        ],
        [
          { position: "column2 row0", life: true },
          { position: "column2 row1", life: false },
          { position: "column2 row2", life: false },
        ],
      ];
      const secondValue = 1;
      const thirdValue = 1;
      const expectedReturn = 3;

      const cellLivingCounter = lifeChecker(
        firstValue,
        secondValue,
        thirdValue
      );

      expect(cellLivingCounter).toEqual(expectedReturn);
    });
  });
});
