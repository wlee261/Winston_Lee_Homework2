// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters.

function nonRepeating(str) {
    var dict = {};
    var longest = "";
    var curr = "";
    
    for (var i = 0; i < str.length; i++) {
        if (!(str[i] in dict) || dict[str[i]] == 0) {
            dict[str[i]] = 1;
            curr += str[i];
            longest = longest.length > curr.length ? longest:curr
  
        }
        else {
            extra = str[i];
            dict[extra] += 1;
            while(dict[extra] > 1) {
                var [a, ...rest] = curr;
                dict[a] -= 1;
                curr = rest.join("");
            }
        }
    }
    return longest;
}

console.log(nonRepeating("asdfaghj"));
