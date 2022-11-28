const digitalRoot = require('./SumOfDigits');


test('7', () => {
    expect(digitalRoot(16)).toBe(7);});

test('6', () => {
    expect(digitalRoot(456)).toBe(6);});    