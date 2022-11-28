function findShort(s){
    let ascWordLengths = s.split(' ').map(word => word.length).sort()
    return ascWordLengths[0]
}
//this is better
function findShortBetter(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

module.exports = findShort;