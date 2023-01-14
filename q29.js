// 29. Write a JavaScript function to get the function name.

function getFuncName(func) {
    return func.name;
}

function emptyNameFunc() {}

console.log(getFuncName(emptyNameFunc));