// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments : 'abacddbec' 
// Expected output : 'e' 

function firstNonRepeat(str) {
    dict = {}
    for(var i = 0; i < str.length; i++) {
        if(str[i] in dict) dict[str[i]] += 1;
        else dict[str[i]] = 1;
    }

    for(var i = 0; i < str.length; i++) {
        if(dict[str[i]] === 1) return str[i];
    }

    return -1;
}

console.log(firstNonRepeat("aassddffeoe"));
console.log(firstNonRepeat("asdfasdf"));