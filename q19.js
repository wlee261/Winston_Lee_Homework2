// 19. Write a JavaScript function that returns array elements larger than a number. 

function greaterElements(arr, num) {
    output = [];
    return arr.filter((item) => {
        return item > num;
    })
}

console.log(greaterElements([1,2,3,4,5,6,7,8,9], 3));