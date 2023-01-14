// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.

function binarySearch(arr, val) {
    var left = 0;
    var right = arr.length-1;
    
    while(left <= right) {
        var mid = Math.floor((left+right)/2);
        if(arr[mid] == val) {
            return mid;
        }
        else if(arr[mid] > val) {
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
    return -1;
}


console.log(binarySearch(arr, 92));
console.log(binarySearch(arr, 100));