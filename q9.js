// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number,
// string, and undefined

function findType(variable) {
    return(typeof variable);
}

let x;
console.log(findType("asdf"));
console.log(findType(false));
console.log(findType(5));
console.log(findType({'a':3}));
console.log(findType(findType));
console.log(findType(x));
