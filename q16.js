// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function uniqueChars(str) {
    chars = []
    for(var i = 0; i < str.length; i++) {
        if (!chars.includes(str[i])) {
            chars.push(str[i]);
        }
    }
    return chars.join('');
}

console.log(uniqueChars("asdfasdfasdfasdfasdf"));