// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2 
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

function allSubsets(arr) { 
    output = [];
    for(var i = 0; i < arr.length-1; i++) {
        for(var j = i+1; j < arr.length; j++) {
            output.push([arr[i], arr[j]]);
        }
    }
    
    return output;

}

console.log(allSubsets([1,2,3,4,5]));