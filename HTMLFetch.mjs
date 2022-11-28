import fetch from 'node-fetch';
import syllables from 'syllables';
var WordPOS = require('wordpos');
wordpos = new WordPOS();


wordpos.getAdjectives('The angry bear chased the frightened little squirrel.', function(result){
    console.log(result);
});



async function getTrumpQuote(){
    let response = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
    let data = await response.json();
    console.log("message: " + data.message +"\n")
    return createCompleteArray(data.message, data.nlp_attributes.quote_structure)
}

const createCompleteArray = (message, structure) => {
    var messageArr = splitToSentenceArr(message)
    var outputArray = new Set();
    for (var i=0; i<structure.length; i++){
        var quote = messageArr[i].split(' ')
        var typesArr = structure[i]
        console.log("strucure length: " + typesArr.length + ", Message word count: " + quote.length)
        if (typesArr.length === quote.length){
            console.log("Structure length matches word count \n")
            for (var x=0; x<typesArr.length; x++){
                outputArray.add({word: quote[x], type: structure[x], syllable: syllables(quote[x])})
            }

        }
        else {
            console.log("Sentence structure length doesn't match amount of words in quote")
            continue
        }
    }
    return outputArray
}

const splitToSentenceArr = str => {return str.match(/[^\.!\?]+[^\.!\?]/g);}

const library = getTrumpQuote()




