// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are:

function minimumNumber(n, password) {
        let additions = 0
        let digit=false
        let lowercase=false
        let uppercase=false
        let special=false
       let numbers = "0123456789"
      let  lower_case = "abcdefghijklmnopqrstuvwxyz"
     let   upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       let special_characters = "!@#$%^&*()-+"

  // Return the minimum number of characters to make the password strong
for (let i = 0; i<password.length; i++){
if (numbers.includes(password[i])){
    digit = true
}
if (lower_case.includes(password[i])){
    lowercase = true
}
if (upper_case.includes(password[i])){
    uppercase = true
}
if (special_characters.includes(password[i])){
    special = true
}

}

if (!digit ){
    additions++
}
if (!lowercase ){
    additions++
}
if (!uppercase ){
    additions++
}
if (!special ){
    additions++
}
console.log(additions , "---", 6-n)
if (6-n > additions){
    return 6-n
}
else{
    return additions
}


// return additions
}

console.log(minimumNumber(3, "Ab1"));
