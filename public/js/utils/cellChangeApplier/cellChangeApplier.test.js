import cellChangeApplier from "./cellChangeApplier.js";

describe("Given the cellChangeApplier function", () => {
  describe("When it's called and it recieves the array of arrays of Game of Life and the object with cell changes", () => {
    test("Then it should return an object with changes applied from object argument", () => {
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
      const secondValue = { position: "column0 row0", life: true };

      const expectedReturn = { position: "column0 row0", life: true };

      const cellChanged = cellChangeApplier(firstValue, secondValue);

      expect(cellChanged).toEqual(expectedReturn);
    });
  });
});
