//Given a 2D matrix (which is m x n) 
//find the given element with value value. If the matrix contains the value return true, otherwise return false.

const search = (matrix, target) => {
    let test = false
  
    for (let i =0; i < matrix.length ; i++){
console .log(i , '==--', matrix.length-1)
console.log(matrix[i])
    if (matrix[i][matrix.length-1] >target){
        if (matrix[i-1].includes(target) && i !== matrix.length-1) test = true
    } else if (matrix[i] && i === matrix.length-1 && matrix[i].includes(target)){
    console.log("that works")
    test = true
    }
    return test
    }}
    

    console.log(
        search([[0,1,2,3],[4,5,6,7],[8,9,10,11]],22))