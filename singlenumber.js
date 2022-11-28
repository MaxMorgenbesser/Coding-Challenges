// Given a non-empty array of integers nums, every element appears 
// twice except for one. Find that single one.

// You must implement a solution with a linear runtime 
// complexity and use only constant extra space.

var singleNumber = function(nums) {
let thisnum;
let check = 0;
let x = nums.length-1
let match = false
let answer;
while (check < nums.length-1){
thisnum = nums[check]
if ((nums[check]===nums[x]) && check !==x){
   check++
} else if (check == nums.length -1){
    check = 0
    return nums[nums.length-1]
}
   else if (x == 0) {
    x = nums.length-1
} else {
    x--
}
console.log(x,check)
}
return answer
}; 


const nums = [1,1,2,2,3,3,3,1,8]

console.log(singleNumber(nums))