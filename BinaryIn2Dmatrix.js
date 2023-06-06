


function searchin2d(matrix,target){
    let row = 0;
    let col = matrix.length-1;
    while(row<matrix.length && col>=0){
        if(matrix[row][col] == target){
            console.log([row,col])
            return;
        } else if(matrix[row][col]>target){
            col--
        } else{
            row ++
        }
    }
    console.log("not Found")
    return false
}


// searchin2d(arr,39)

module.exports = {
    binary : searchin2d
}