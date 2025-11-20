// 509. Fibonacci Number
// Problem: Given n, return the n-th Fibonacci number.

var fib = function(n) {
   if(n <= 0){
            return 0;
        }
        let a = 0;
        let b = 1;
        let count = 2;
        while(count <= n){
            let next = a+b;
            a = b;
            b = next;
            count++;
        }
        return b;
    };  

console.log(fib(0));  
console.log(fib(1));  
console.log(fib(2));  
console.log(fib(3));  
console.log(fib(4));  
console.log(fib(10));