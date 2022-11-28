const toJadenCase = require('./Jaden Casing Strings')

test('sum is 23', () => {
    str = "Step into the night garden and party with the stars"
    expect(str.toJadenCase()).toBe("Step Into The Night Garden And Party With The Stars");
});

