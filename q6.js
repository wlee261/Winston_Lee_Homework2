// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development
// reduce, ternary operator

function findLongest(words) {
    wordArr = words.split(" ")
    return wordArr.reduce((longest, curr) => {
        return longest.length > curr.length ? longest:curr;
    });
}

console.log(findLongest("asdf asd as aasdfasdf"));