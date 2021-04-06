function fib(n) {
    // base condition
    if(n<=1) {
        return n;
    } 
    return fib(n-1) + fib(n-2);

}

// function calFib(n) {
//     const arr = [];
//     fib(n, arr);
//     return arr;
// }

console.log(fib(5));