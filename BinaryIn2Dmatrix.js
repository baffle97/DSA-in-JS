let arr = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [28, 29, 37, 49],
  [33, 34, 38, 50],
  [41, 52, 55, 60],
];

function searchin2d(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;
  let pointer = matrix[row][col]
  console.log(pointer)
  while (row < matrix.length && col >= 0) {
    pointer = matrix[row][col]
    console.log(pointer)
    if (pointer == target) {
       console.log([row,col])
      return;
    } else if (pointer > target) {
      col--;
    } else {
      row++;
    }
  }
  console.log("not Found");
  return false;
}

// searchin2d(arr, 55);


