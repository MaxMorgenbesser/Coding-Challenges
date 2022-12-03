// Given a string s containing just the 2
// characters '(', ')', '{', '}', '[' and ']', determine if
// the input string is valid.

let isValid = function (s) {
let valid
let arr = []
//   s = s.replaceAll(" ", "");
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i])
  if (s[i] == '['|| s[i] =='{' || s[i] == '('){
    arr.push(s[i])
  }else{
    if (!arr){
        return false
    }else if (s[i] ===")"){
        // console.log("wodincwonc")
        // console.log(arr[arr.length -1])
        if (arr[arr.length -1] == '('){
            arr.pop()
        }
        else{
            return false
        }
    }else if (s[i]=="]"){
        if (arr[arr.length -1] == '['){
            arr.pop()
        }else{
            return false
        }
    }else if (s[i]=="}"){
        if (arr[arr.length -1] == '{'){
            arr.pop()
        }
        else{
            return false
        }
       
    }

    

   

  }
  }
//   console.log(arr)
  if (!arr.length){
    return true
}else{
    return false
}
};

console.log(isValid('([]{}())'))