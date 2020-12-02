const calc = require("./expense-report");

test('adding two input numbers', () => {
    expect(calc(1, 2)).toBe(3);
  });