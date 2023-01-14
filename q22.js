// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string.

function numOccurences(str, letter) {
    output = 0
    for(var i = 0; i < str.length; i++) {
        if(str[i] == letter) output += 1
    }

    return output;;
}

console.log(numOccurences("asdfasdfasaa", "a"));