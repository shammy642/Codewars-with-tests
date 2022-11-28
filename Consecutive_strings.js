// function longestConsec(strarr, k) {
//     var concatList = []
//     for (el of strarr){
//         var concatWord = el
//         for(i = 0; i<k; i++){
//             if (k==1) break
//             concatWord = concatWord + strarr[i]
//         }
//         concatList.push(concatWord)
//     }
//     return concatList
// }

// function longestConsec2(strarr, k) {
//     //create wordList
//     var highest = ""
//     console.log("start highest : " + highest)
//     for (var i = 0; i < strarr.length-k+1; i++){
//         var word = ""
//         for (var x = 0; x < k; x++){
//             word = word + strarr[i+x]
//         }
//         if (word.length > highest.length){
//             highest = word;
//         }
//     }
//     return highest
// }

// let x = longestConsec2(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 2)
// console.log(x)

//console.log(x)

// function filter_list(l) {
//     temp_list = []
//     for (el of l){
//       if (typeof el == 'number'){
//         temp_list.push(el);
//       }
//     }
//     return temp_list;
// }

// x = filter_list([1,2,"aasf","1","123",123])
// console.log(x)
// console.log("moos3".toUpperCase())

// function isIsogram(strInput){
//     let str = strInput.toLowerCase()
//     let hasNumbers =/\d/.test(str)
//     for (i=0; i<str.length; i++){

//         if (str.includes(str[i],i+1) || hasNumbers == true) {
            
//           return false
//           }
//     }
//     return true
//     }

// x = isIsogram("moOse")  
// console.log(x)

function XO(strInput) {
    var xCount = 0;
    var oCount = 0;
    let str = strInput.toLowerCase()
    if (str.includes("x"||"o") == false)
        {return true}
    for (i = 0; i<str.length; i++){
        if (str.charAt(i) === "x"){
            xCount += 1;
            }
        if (str.charAt(i) === "o"){
            oCount += 1;
            }
        }
    if (xCount == oCount) return true
    else return false
}

let x = (XO("xxoo"))
console.log(x)