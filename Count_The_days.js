//codewars tests are a bit broken for this one...
function countDays(d){

    let output = ((d - new Date())/86400000) //milliseconds in a day
    if (output < 0) return "The day is in the past!"
    else if (output == 0 ) return "Today is the day!"
    else return Math.round(output) + " days"
}

console.log(countDays(new Date("September 6, 2022")))