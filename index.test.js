const fiboAddEven = require("./index");
test("fiboAddEven", () => {
  expect(fiboAddEven(1, 400000)).not.toBe(400000);
});