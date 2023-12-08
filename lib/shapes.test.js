const Square = require("./Square");
const Circle = require("./Circle");
const Triangle = require("./Triangle");

describe("Square", () => {
  test("Should create a blue Square", () => {
    const expected =
      '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="90" y="40" width="120" height="120" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text></svg>';
    const shape = new Square();
    shape.setShapeColor("blue");
    const output = shape.render();
    expect(output).toEqual(expected);
  });
  test("Should create a purple Square", () => {
    const expected =
      '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="90" y="40" width="120" height="120" fill="purple"/><text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text></svg>';
    const shape = new Square();
    shape.setShapeColor("purple");
    const output = shape.render();
    expect(output).toEqual(expected);
  });
});

describe("Circle", () => {
  test("Should create a blue Circle", () => {
    const expected =
      '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text></svg>';
    const shape = new Circle();
    shape.setShapeColor("blue");
    const output = shape.render();
    expect(output).toEqual(expected);
  });
});

describe("Triangle", () => {
  test("Should create a blue Triangle", () => {
    const expected =
      '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text></svg>';
    const shape = new Triangle();
    shape.setShapeColor("blue");
    const output = shape.render();
    expect(output).toEqual(expected);
  });
});