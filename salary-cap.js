// Given a list of positive integers that represent salaries s
//alaries and a target budget budget, return an appropriate "salary cap".

// The "salary cap" is a cap(Maximum Integer Value) on salaries 
//so that the sum of all salaries stays below the budget budget.



const computeSalaryCap = (salaries, budget) => {
    let sum = 0;
for (let i =0; i < salaries.length; i ++){
    sum = sum + salaries[i]
}
if (sum == budget){
    return Math.max(...salaries)
}else {
let overpaid = 0
y = 0
let underpaid = 0
salaries.sort((a,b)=>{return a-b})
for (let x = 0; x < salaries.length; x++){
if (x < Math.floor(salaries.length/2)){
underpaid = underpaid + salaries[x]
console.log(underpaid)
}else{
overpaid = overpaid + salaries[x]
y++
console.log(overpaid , y)
}
}
budget = (budget-underpaid)/y
return budget
}
}


console.log(computeSalaryCap([100,100,20,30],800))