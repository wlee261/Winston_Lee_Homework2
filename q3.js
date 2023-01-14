// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g

function getCombinations(word) {
    output = []
    for(let i = 0; i < word.length; i++) {
        temp = word[i];
        output.push(temp);
        for(let j = i+1; j < word.length; j++) {
            temp += word[j];
            output.push(temp);
        }
    }

    return output;
}

console.log(getCombinations("12345"));