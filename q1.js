// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

function reverse(number) {
    strNum = String(number);
    output = "";
    for(let i = strNum.length - 1; i > -1; i--){
        output += strNum[i]
    }
    return parseInt(output);
}

console.log(reverse(32243));