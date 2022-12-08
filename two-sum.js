var twoSum = function(nums, target) {
    let map = {} 
    let remainder
for (let i = 0 ; i<nums.length; i++){
    remainder = target - nums[i]
  if (map[remainder] != undefined){
    return [map[remainder],i]
  }
  else {
    map[nums[i]] = i
}
}
};

let nums = [5,5,4]
console.log(twoSum(nums,9))