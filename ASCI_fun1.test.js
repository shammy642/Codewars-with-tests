const makeX = require('./ASCII_fun1');


test('', () => {
    expect(makeX(3)).toBe("■□■\n□■□\n■□■");});

test('', () => {
    expect(makeX(5)).toBe("■□□□■\n□■□■□\n□□■□□\n□■□■□\n■□□□■");});