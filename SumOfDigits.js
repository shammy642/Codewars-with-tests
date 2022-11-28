function digitalRoot(n) {
    var output = getSum(n)
    do {
        output = getSum(output) 
    }
    while (output > 9)
    return output
}

var getSum = int => {    
    const arr = int.toString().split('')
    var output = 0;
    for (digit of arr){
    output += parseInt(digit)
    }
return output
} 

//wtf
function digital_root2(n) {
    return (n - 1) % 9 + 1;
}

console.log(digital_root2(456))

module.exports = digitalRoot;