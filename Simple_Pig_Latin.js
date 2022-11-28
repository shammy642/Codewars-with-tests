function pigIt(str){
    return str
    .split(' ')
    .map(word => {
        if (/[,.?!\-]/.test(word)) return word
        else return word.substr(1) + word.substr(0,1) + "ay";})
    .join(' ')
}

const x = pigIt('Hello world !')
console.log(x)