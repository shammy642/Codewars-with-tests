function dirReduc(arr){
    const opposite = {NORTH:"SOUTH", EAST:"WEST", SOUTH:"NORTH", WEST:"EAST"};
    var tempArr = arr.map(el => el.toUpperCase());
    var i = 0;
    while (i+1 < tempArr.length) {
        if (tempArr[i] === opposite[tempArr[i+1]]){
            tempArr.splice(i,2)
            i = 0;
        } else {
            i++}
    }
    return tempArr
  }

const x = dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
console.log(x)