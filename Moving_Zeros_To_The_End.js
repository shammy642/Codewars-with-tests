// function moveZeros(arr) {
//     var zerosCount = 0;
//     var outputArray = []
//     for (el of arr) {
//         if (el === 0) {zerosCount += 1}
//         else outputArray.push(el)
//     }
//     for (i=0; i<zerosCount; i++){
//         outputArray.push(0)
//     }
//     return outputArray
// }
function moveZeros(arr) {
    var outputArr = arr.filter(word => word!== 0)
    return outputArr.concat(arr.filter(word => word === 0))
}


// === means 0, == means either 0 or false

x = moveZeros([false,1,0,1,2,0,1,3,"a",0,null,123])
console.log(x)

module.exports = moveZeros;