// 10. Write a JavaScript function which returns the n rows by n columns identity matrix

function eye(x) {
    var output = []
    for(var i = 0; i < x; i++){
        var row = []
        for(var j = 0; j < x; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        output.push(row);
    }
    return output;
}

console.log(eye(5))