//Given an integer num, reverse num to get reversed1, 
//then reverse reversed1 to get reversed2. Return true if 
//reversed2 equals num. Otherwise return false.
var isSameAfterReversals = function(num) {
    let snum = `${num}`
    let reversed1 =''
    let reversed2 = ''
for (let i = snum.length-1; i>=0;i-- ){
    reversed1 = reversed1 + snum[i] 
}

reversed1 = Number(reversed1)
reversed1 = String(reversed1)
console.log(reversed1)
for (let x = reversed1.length-1; x>=0; x--){
    reversed2 = reversed2 + reversed1[x]
}
reversed2 = Number(reversed2)

// console.log(reversed2, '---', num)
if (reversed2 == num){
    return true
} else {
    return false
}
// console.log(reversed1)
    

};


console.log(isSameAfterReversals(1800))