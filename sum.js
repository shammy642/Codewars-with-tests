function isIsogram(str){
    let hasNumbers =/\d/.test(str)
    if (hasNumbers == true){
      return false
    }
    var strArray = str.split('')
    for (let char in strArray){
    if (strArray.includes(char.indexOf(char)+1)){
        return false
        }
    }
    return true
    }

x = isIsogram("Dermatoglyphics")  
console.log(x)