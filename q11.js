// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4 

function q11(arr){
    var output = [];
    arr.sort((a,b) => {
        return a-b;
    });
    output.push(arr[1]);
    output.push(arr.slice(-2)[0]);
    return output;

}

arr = [55,7,1,2,3,4,6,1];
// console.log(arr.sort((a,b) => {
//     return a-b;
// }));
console.log(q11(arr));