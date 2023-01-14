// 13. Write a JavaScript function to compute the factors of a positive integer.

function factors(number) {
    output = []
    for(var i = 1; i < Math.floor(Math.sqrt(number))+1; i++) {
        if (number%i == 0) {
            output.push(i);
            output.push(number/i);
        }
    }
    return output;
}

console.log(factors(1024));