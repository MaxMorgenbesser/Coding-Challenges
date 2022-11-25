// move all of ther even numbers to 
// the beginning of the array 
// all of the odd numbers follow the even numbers
// in O(n) time


const oddeven = (arr)=>{
let oddpointer = arr.length-1
let evenpointer = 0
let num1
let num2

while ( oddpointer > evenpointer ){
    
console.log(evenpointer, '-----', oddpointer)
if(arr[evenpointer] % 2 !== 0){
 num1 = arr[evenpointer]
 num2 = arr[oddpointer]
 arr[evenpointer] = num2
 arr[oddpointer] = num1
 
 if (arr[evenpointer] %2 ==0){
    evenpointer++
 }else if (arr[oddpointer]%2 != 0){
    oddpointer--
 }

 }else{ evenpointer++}
 console.log(arr)


}
return arr
}

const arr = [90,91,30,50,52,51,99,88,76]

console.log(oddeven(arr))