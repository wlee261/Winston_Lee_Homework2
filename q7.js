// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
// .includes()

function countVowels(sentence) {
    output = 0;
    vowels = ['a', 'e', 'i', 'o', 'u'];
    for(var i = 0; i < sentence.length; i++) {
        if(vowels.includes(sentence[i].toLowerCase())) {
            output += 1;
        }
    }
    return output;
}

console.log(countVowels("asdfiaaee"));