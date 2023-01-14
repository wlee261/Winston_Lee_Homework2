// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox 
// ForEach doesn't modify or return an array, use map
// charAt and slice

function capitalize(sentence) {
    sentenceArr = sentence.split(' ');
    const output = sentenceArr.map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
    output.join(' ');
    return output;
}

console.log(capitalize("asdf fdsa asdf"))
