snail = function(array) {
    let arr = [].concat.apply([],array)
    let index = arr.map(element => arr.indexOf(element))
    let rowLength = array[0].length
    


    return arr
  }



let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// [1,2,3][6]
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
