// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function longestCountryName(arr) {
    return arr.reduce((longest, curr) => {
        return longest.length > curr.length ? longest:curr;
    });
}

var countries = ["Australia", "Germany", "United States of America"];
console.log(longestCountryName(countries));