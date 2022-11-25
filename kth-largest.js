const kthlargest = (k,arr)=>{
const sortedarr = arr.sort((a,b)=>a-b)
console.log(sortedarr)
const answer = sortedarr[sortedarr.length - k]
return answer
}

console.log(kthlargest(3,[3,2,1,5,6,4]))