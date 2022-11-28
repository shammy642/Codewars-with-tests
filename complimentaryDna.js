function DNAStrand(dna){
    return dna.split('').map(letter => {
        if (letter == 'A') return 'T'
        if (letter == 'T') return 'A'
        if (letter == 'C') return 'G'
        if (letter == 'G') return 'C'}).join('')
}



//These are alternative options.... You can add functions as values!!

function DNAStrand2(dna){
    function square(x){return x*x}
    let  pairs = {'A': 'T','T':'A','C':'G','G':'C'};
    return dna.split('').map(letter => {return pairs[letter]}).join('');
}



// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }
module.exports = DNAStrand;