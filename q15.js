// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 

function exponential(b, n) {
    if (n == 0) return 1;
    var total = b;
    for(var i = 2; i <= Math.abs(n); i++) {
        total *= b;
    }

    return n > 0 ? total:1/total;
}

console.log(exponential(2, 3));
console.log(exponential(2, -3));