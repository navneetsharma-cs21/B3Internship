// 1281. Subtract the Product and Sum of Digits of an Integer
// Problem: Given an integer n, return the difference between
// the product of its digits and the sum of its digits.

var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;

    while(n>0){
        let rem = n % 10;
        product *= rem;
        sum += rem;
        n = (n/10)|0;   
    }
    return product - sum;
};


console.log(subtractProductAndSum(234)); 
console.log(subtractProductAndSum(4421)); 
console.log(subtractProductAndSum(99)); 
