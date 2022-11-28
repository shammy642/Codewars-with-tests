function findOdd(A) {
    let uniqueNumbers = new Set(A);
    for (value of A){
        if(countOccurances(A, value) % 2 == 1 ) return value
    }
}
//iterate through an array and return number of occurances
const countOccurances = (array, value) => {
    return array.reduce((a,v) => (v === value ? a + 1 : a), 0)
} 


module.exports = findOdd;