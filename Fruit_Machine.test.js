const fruit = require('./Fruit_Machine');

var reel = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
var spin = [0,0,0];
test('', () => {
    expect(fruit([reel,reel,reel],spin)).toBe(100);});

var reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
var reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
var reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
var spin = [5,4,3];
test('', () => {
    expect(fruit([reel1,reel2,reel3],spin)).toBe(0);});

var reel1 = ["King", "Cherry", "Bar", "Jack", "Seven", "Queen", "Star", "Shell", "Bell", "Wild"];
var reel2 = ["Bell", "Seven", "Jack", "Queen", "Bar", "Star", "Shell", "Wild", "Cherry", "King"];
var reel3 = ["Wild", "King", "Queen", "Seven", "Star", "Bar", "Shell", "Cherry", "Jack", "Bell"];
var spin = [0,0,1];
test('', () => {
    expect(fruit([reel1,reel2,reel3],spin)).toBe(3);});


var reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
var reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
var reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
var spin = [0,5,0];
test('', () => {
    expect(fruit([reel1,reel2,reel3],spin)).toBe(30);});
