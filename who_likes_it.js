function likes(names) {
    let length = names.length;
    console.log(length)
    if (names.length == 0) {return 'no one likes this'}
    else if (names.length < 2) return names[0] + " likes this"
    else if (names.length < 3) return names[0] + " and " + names[1] + " like this"
    else if (names.length < 4) return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else if (names.length >= 4) return names[0] + ", " + names[1] + " and " + (length-2).toString() + " others like this"
}

console.log((likes(['Alex', 'Jacob', 'Mark', 'Max'])))

module.exports = likes;