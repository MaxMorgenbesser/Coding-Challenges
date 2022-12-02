// It is a concatenation of one or more words consisting of English letters.

// All letters in the first word are lowercase.

// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.


function camelcase(s) {
    // Write your code here
let words = 1
for (let i= 0; i<s.length; i++){
if (s[i] === s[i].toUpperCase()){
    
    words++
} 
}
return words
}

console.log(camelcase('oneTwoThree'))