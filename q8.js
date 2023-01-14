// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function checkPrime(number) {
    if(number == 0) return false;
    if(number < 3) return true;
    for(var i = 2; i < number; i++) {
        if(number/i == Math.floor(number/i)) return false;
    }
    return true;
}

console.log(checkPrime(51));