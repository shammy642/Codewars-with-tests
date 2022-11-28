const solution = require('./multiplesOf3Or5')

test('sum is 23', () => {
    expect(solution(10)).toBe(3+5+6+9);
});

test('sum is 23', () => {
    expect(solution(20)).toBe(3+5+6+9+10+12+15+18);
});
