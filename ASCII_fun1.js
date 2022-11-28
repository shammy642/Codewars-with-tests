function makeX(n){
  var output = []
  for (i=1; i<n+1; i++){
    if (i<n+1 )
    output.push(makeLine(n,i))
  }
  return output.join('\n')
}

function makeLine(width, rowNo){
  const line = [...Array(width).fill("□")]
    line[rowNo-1] = "■";
    line[line.length-rowNo] = "■";
    return line.join('')
}


console.log(makeX(80))



module.exports = makeX;


//create line