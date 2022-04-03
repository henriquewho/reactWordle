import wordBank from './wordle-bank.txt'

export const boardDefault = [
    ["", "", "", "", "",], 
    ["", "", "", "", "",], 
    ["", "", "", "", "",], 
    ["", "", "", "", "",], 
    ["", "", "", "", "",], 
    ["", "", "", "", "",] 
]

export const generateWordSet = async () => {
    let wordSet; 
    let todaysWord; 
    await fetch(wordBank)
    .then(resp => {
        return resp.text()
    })
    .then (resp => {
        const wordArr = resp.split('\n'); 
        todaysWord = wordArr[Math.floor(Math.random()*wordArr.length)]; 
        wordSet = new Set(wordArr)
    })
    return {wordSet, todaysWord}; 
}