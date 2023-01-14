// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
//sort split and join

function sortAlph(word) {
    return word.split('').sort().join('');
}

console.log(sortAlph("ebacd"));
