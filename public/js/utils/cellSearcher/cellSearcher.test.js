import cellSearcher from "./cellSearcher.js";

describe("Given the cellSearcher function", () => {
  describe("When it's called and it recieves the arrays of arrays from Game of Life", () => {
    test("Then it should return an array with a list modified objects from Game of Life", () => {
      const uniqueValue = [
        [
          { position: "column0 row0", life: false },
          { position: "column0 row1", life: false },
          { position: "column0 row2", life: false },
          { position: "column0 row3", life: false },
          { position: "column0 row4", life: false },
        ],
        [
          { position: "column1 row0", life: false },
          { position: "column1 row1", life: false },
          { position: "column1 row2", life: true },
          { position: "column1 row3", life: false },
          { position: "column1 row4", life: false },
        ],
        [
          { position: "column2 row0", life: false },
          { position: "column2 row1", life: false },
          { position: "column2 row2", life: true },
          { position: "column2 row3", life: false },
          { position: "column2 row4", life: false },
        ],
        [
          { position: "column3 row0", life: false },
          { position: "column3 row1", life: false },
          { position: "column3 row2", life: true },
          { position: "column3 row3", life: false },
          { position: "column3 row4", life: false },
        ],
        [
          { position: "column4 row0", life: false },
          { position: "column4 row1", life: false },
          { position: "column4 row2", life: false },
          { position: "column4 row3", life: false },
          { position: "column4 row4", life: false },
        ],
      ];

      const expectedReturn = [
        { position: "column1 row2", life: false },
        { position: "column2 row1", life: true },
        { position: "column2 row3", life: true },
        { position: "column3 row2", life: false },
      ];

      const mutationList = cellSearcher(uniqueValue);

      expect(mutationList).toEqual(expectedReturn);
    });
  });
});
