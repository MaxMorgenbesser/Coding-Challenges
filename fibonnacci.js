var fib = function(n) {
    let sum=0
for (let i = n-1 ; i > 1; i--){
 sum = sum + i   
}
    return sum
};

console.log(fib(4))