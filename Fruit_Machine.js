function fruit(reels, spin){
    let inputArr = [reels[0][spin[0]],reels[1][spin[1]],reels[2][spin[2]]]
    var counts = {}
    for (const num of inputArr)   {
        counts[num] = (counts[num] || 0) + 1
    }
    if (Object.keys(counts).length === 3) return 0
    else if (Object.keys(counts).length === 2) {
        result = scores_two_of_same.get(Object.keys(counts).find(key => counts[key] === 2))
        if (counts.Wild === 1) return result*2
        else return result
    }
    else return scores_two_of_same.get(Object.keys(counts).find(key => counts[key] === 3))*10
}

// function fruit(reels, spins){
//     let map = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'];
//     let [a, b, c] = reels
//     .map((reel, i) => map.indexOf(reel[spins[i]]) + 1)
//     .sort((a, b) => a - b);

//     console.log(a,b,c)
// }

var reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
var reel2 = ["Bar", "Wild", "Queen", "Bell", "King", "Seven", "Cherry", "Jack", "Star", "Shell"];
var reel3 = ["Bell", "King", "Wild", "Bar", "Seven", "Jack", "Shell", "Cherry", "Queen", "Star"];
var spin = [5,4,3];

const scores_two_of_same = new Map([["Jack",1], ["Queen",2], ["King",3], ["Bar", 4], ["Cherry", 5], 
                            ["Seven", 6], ["Shell", 7], ["Bell", 8], ["Star", 9], ["Wild", 10]])

console.log(fruit([reel1,reel2,reel3],spin))                     
module.exports = fruit;