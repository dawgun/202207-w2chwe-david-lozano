import cellStateChanger from "./cellStateChanger.js";

describe("Given the function cellStateChanger", () => {
  describe("When it's called and it recieves the object { position: 'column0 row1', life: false } and 2", () => {
    test("Then it should mutate the object to { position: 'column0 row1', life: true }", () => {
      const firstValue = { position: "column0 row1", life: false };
      const secondValue = 3;
      const expectedMutation = { position: "column0 row1", life: true };

      const cellState = cellStateChanger(firstValue, secondValue);

      expect(cellState).toEqual(expectedMutation);
    });
  });
  describe("When it's called and it recieves the object { position: 'column0 row1', life: true } and 1", () => {
    test("Then it should mutate the object to { position: 'column0 row1', life: false }", () => {
      const firstValue = { position: "column0 row1", life: true };
      const secondValue = 1;
      const expectedMutation = { position: "column0 row1", life: false };

      const cellState = cellStateChanger(firstValue, secondValue);

      expect(cellState).toEqual(expectedMutation);
    });
  });
});
