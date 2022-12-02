
//There are  hourglasses in . 
//An hourglass sum is the sum of an hourglass' values. 
//Calculate the hourglass sum for every hourglass in , then print the 
//maximum hourglass sum. The array will always be .

let arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(arr) {
    // Write your code here
    let sum = [];
    x = 0 
    for (let i = 0; x < 7; i++){
        // console.log(i)
    if (i == 6){
        x++
        i=0
        }
        console.log(x)
    }
sum.push(arr[0],arr[1],arr[2])

}

console.log(hourglassSum(arr))

