// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list   :
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateToken(len){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var output = "";
    for(var i = 0; i < len; i++){
        output += chars[Math.floor(Math.random()*62)];
    }

    return output;
}

console.log(generateToken(20));