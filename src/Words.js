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
    await fetch(wordBank)
    .then(resp => {
        return resp.text()
    })
    .then (resp => {
        const wordArr = resp.split('\n'); 
        wordSet = new Set(wordArr)
    })
    return {wordSet}; 
}