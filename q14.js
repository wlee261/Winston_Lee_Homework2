// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

function amountToCoins(amount) {
    output = [];
    while (amount > 25) {
        amount -= 25;
        output.push(25);
    }

    while (amount > 10) {
        amount -= 10;
        output.push(10);
    }

    while (amount > 5) {
        amount -= 5;
        output.push(5);
    }

    while (amount > 2) {
        amount -= 2;
        output.push(2);
    }

    while (amount > 0) {
        amount -= 1;
        output.push(1);
    }

    return output;

}

console.log(amountToCoins(51));