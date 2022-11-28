const DNAStrand = require('./complimentaryDna');



test('Should be TTTT', () => {
  expect(DNAStrand("AAAA")).toBe("TTTT");});

test('Should be TAACG', () => {
    expect(DNAStrand("ATTGC")).toBe("TAACG");});

test('Should be CATA', () => {
expect(DNAStrand("GTAT")).toBe("CATA");});
