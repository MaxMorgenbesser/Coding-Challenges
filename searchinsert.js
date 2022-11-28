var searchInsert = function(nums, target) {
    if (nums.includes(target)){
        return nums.indexOf(target)
     }
    if (target <= nums[0] ){
     return 0   
    }
 if (target >= nums[nums.length -1]){
     return nums.length
 }
 let num
 
     for (let i = 0; i < nums.length - 1; i++){
      num = nums[i]
     if (num === target){
        // console.log("hello")
         return i
        
     }
      if (target > nums[i] && target < nums[i+1]){
        // console.log("hello")
          return i+1
      }
     }
 }


 console.log(searchInsert([1,3,4,5,6,9], 8))