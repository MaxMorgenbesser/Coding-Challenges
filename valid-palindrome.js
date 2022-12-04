// Given a string s, 
// return true if it 
// is a palindrome, or false otherwise.


var isPalindrome = function(s) {

let str = s.replace(/[\W_]+/g,"")

let startPointer = 0
let endPointer = str.length -1

while (endPointer > startPointer){
if (str[startPointer].toUpperCase() == str[endPointer].toUpperCase()){
 endPointer--
 startPointer++   
}else{
    return false
}

}
return true
};


console.log(isPalindrome("A an, a plan, a canal: Panama"
))