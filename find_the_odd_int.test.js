const findOdd = require('./find_the_odd_int')

test('-1', () => {
    expect(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])).toBe(-1);
});