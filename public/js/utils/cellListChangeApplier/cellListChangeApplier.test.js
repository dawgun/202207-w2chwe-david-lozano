import cellListChangeApplier from "./cellListChangeApplier.js";

describe("Given the cellListChangeApplier function", () => {
  describe("When it's called and it recieves the array of arrays of Game of Life and the object with cell list changes", () => {
    test("Then it should return an array with a list objects changed", () => {
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
      const secondValue = [
        { position: "column0 row0", life: true },
        { position: "column2 row0", life: false },
      ];

      const expectedReturn = [
        { position: "column0 row0", life: true },
        { position: "column2 row0", life: false },
      ];

      const cellListChanged = cellListChangeApplier(firstValue, secondValue);

      expect(cellListChanged).toEqual(expectedReturn);
    });
  });
});
