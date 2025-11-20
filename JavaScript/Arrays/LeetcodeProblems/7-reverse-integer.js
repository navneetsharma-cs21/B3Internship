// 7. Reverse Integer
// Problem: Reverse digits of a signed 32-bit integer.
// If the reversed integer overflows, return 0.

var reverse = function(x) {
    let n = 0;
    while(x != 0 ){
        let rem = x % 10;
        x = (x/10) | 0;
        n = n * 10 + rem;
    }

    if (n > 2147483647 || n < -2147483648) {
            return 0;
        }

    return n;
};

console.log(reverse(123));    
console.log(reverse(-123));   
console.log(reverse(120));    
console.log(reverse(0));      
