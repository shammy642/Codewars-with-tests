import fetch from 'node-fetch';
import syllables from 'syllables';


async function fetch_data() {
    let response = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random");
    let data = await response.text();
    return data
}

const parseData = async (callback) => {
    const parsedData = JSON.parse(await fetch_data())
    const messageArr = parsedData.message.split(' ')
    const sentenceStructure = mergeList(parsedData.nlp_attributes.quote_structure)
    const syllableList = createSyllableList(messageArr)
    console.log(messageArr, sentenceStructure, syllableList)
    //sometimes the sentence structure count doesn't match the length of the message array (natural language processing is HARD)
    
    if (messageArr.length == sentenceStructure.length){
        callback(messageArr, sentenceStructure, syllableList)
    }
    
    else {
        console.log("Sentence Structure length does not match quote length \n")
    } 
}

//create list of number of syllables in word
const createSyllableList = (quote) => {
    var outputList = [];
    for (var i in quote){
        outputList.push(syllables(quote[i]))
    }
    return outputList
} 

//If quote longer than 1 sentence, merge quote_structure into 1 list.
const mergeList = (array) => {
    var output = [];
    for (var i in array){
        output.push(...array[i])
    }
    return output
}

//create an array which contains each word, the word type and the syllable count
const createArray = (messageArr, sentenceStructure, syllableList) => {
    var outputArr = []
    for (var i in messageArr){
        outputArr.push({word: messageArr[i], Type: sentenceStructure[i], syllables: syllableList[i]} )
        }
    outputArr.forEach(print)
    return outputArr
}

var print = (input) => console.log(input);

var find = (array, type, maxSyllables) => array.filter(o => o.Type === type && o.syllables <= maxSyllables);


const trumpArray = parseData(createArray)

//Work out which word types there are.

const generateHaikuFirstLine = (array) => {
    var syllablesCount = 5;
    var outputString = "";
    for (syllablesCount; syllablesCount>0; syllablesCount - x){
        var words = find(array, 'Noun', 4)
        if (words = 0) {

        }

}
}