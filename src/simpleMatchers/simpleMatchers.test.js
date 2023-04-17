const { myArray, myObject } = require("./simpleMatchers");

describe("array , object test", () => {
  it("Test myArray", () => {
    expect(myArray).toEqual([1, 2, 3, 4, 5]);
    expect(myArray).toHaveLength(5);
    expect(myArray).toContain(3);
    expect(myArray).not.toContain(6);
  });

  it("Test myObject", () => {
    expect(myObject).toEqual({ name: "Ahmad", age: 26 });
    expect(myObject).toHaveProperty("name", "Ahmad");
    expect(myObject).toHaveProperty("age", expect.any(Number));
    expect(myObject).not.toHaveProperty("gender");
  });
});
