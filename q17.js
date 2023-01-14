// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified
// string.

function numLetters(str) {
    output = {}
    for(var i = 0; i < str.length; i++) {
        if(!(str[i] in output)) output[str[i]] = 1;
        else output[str[i]] += 1;
    }
    return output;
}

console.log(numLetters("asdfas"));
