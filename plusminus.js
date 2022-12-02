// Given an array of integers, calculate the ratios
//  of its elements that are positive, negative, and zero. Print the 
// decimal value of each fraction on a new line with  6 places after the decimal.

function plusMinus(arr) {
    // Write your code here
   let positives =0
   let negatives =0
   let zeros = 0
arr.map(num =>{
    if (num === 0){
        zeros++
    }else if(num <0){
        negatives++
    } else{
        positives++
    }
})

return `${(positives/arr.length).toFixed(6)}\n${(negatives/arr.length).toFixed(6)}\n${(zeros/arr.length).toFixed(6)}`
}
let arr = [-4, 3, -9, 0, 4, 1]
console.log(plusMinus(arr))