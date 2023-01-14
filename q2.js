// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

function findPalindrome(sequence) {
    arr = [];
    half = Math.floor(sequence.length/2);
    
    for(let i = 0; i < half; i++) {
        arr.push(sequence[i]);
    }

    for(let i = sequence.length-half; i < sequence.length; i++) {
        if(arr.pop() != sequence[i]){
            return false;
        }
    }

    return true;
    
}

console.log(findPalindrome("sdsa"))