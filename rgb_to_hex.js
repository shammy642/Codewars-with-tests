function rgb(r, g, b){
    return [r,g,b]
        .map(value => {
            if (value<0) {return "00"}
            else if (value>255) {return "FF"}
            else {return (value.toString(16).length<2) ? "0" + value.toString(16).toUpperCase() : value.toString(16).toUpperCase()}
        })
        .join('')
  }


console.log(rgb(256,-20,0))