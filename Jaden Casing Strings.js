String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  };


var str = "How can mirrors be real if our eyes aren't real";

test('sum is 23', () => {
  str = "Step into the night garden and party with the stars"
  expect(str.toJadenCase()).toBe("Step Into The Night Garden And Party With The Stars");
});

module.exports = String.prototype.toJadenCase;