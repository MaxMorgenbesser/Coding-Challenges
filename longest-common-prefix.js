const longestCommon = (arr) => {
    // console.log(arr[0][3])
  let ans = "";
  const shortest = arr.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });

  
let i = 0 
//   console.log(shortest)
  while  (i <= arr.length) {
    
    for (let x = 0; x < shortest.length; x++) {
     console.log(i,x) 
      if (shortest[x] == arr[i][x] ){
        ans += shortest[x]
      }
      if (shortest[i] != arr[i][x] ) {
        return ans;
      }
    //   ans = ans + arr[i][x];
      if (i != arr.length-1){
        i++
      }
      console.log(ans)
    }
    // console.log(x)
  }
  return ans;
};

console.log(longestCommon(
    ["dog","dacecar","dayyy"]));
