// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.

function longestPalindrome(str) { 
    if (str.length < 1) return "";
        var start = 0;
        var end = 0;
        for (var i = 0; i < str.length; i++) {
            var len1 = expandAroundCenter(str, i, i);
            var len2 = expandAroundCenter(str, i, i + 1);
            var len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return str.substring(start+1, end + 1);
    
    function expandAroundCenter(str, left, right) {
        var L = left;
        var R = right;
        while (L >= 0 && R < str.length && str.charAt(L) == str.charAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }
}

console.log(longestPalindrome("pokasdffdsaokp"));