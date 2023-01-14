// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function add(...arguments){
    var output = 0
    nums = arguments[0];
    nums.forEach((item) => {
        output += item;
    });
    return output;
}

function mathOnNums(func, ...args) {
    return func(args);
}

console.log(mathOnNums(add, 1,2,3,4,5));