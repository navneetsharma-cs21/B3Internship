// 9. Palindrome Number
// Problem: Return true if integer x is a palindrome, else false.

var isPalindrome = function(x) {
    let org = x;
    let n = 0;
    while(x > 0){
        let rem =  x%10;
        x = (x/10) | 0;
        n = n*10+rem;
    }
    if (n === org){
        return true;
    }
    else{
        return false;
    }
};

console.log(isPalindrome(121));  
console.log(isPalindrome(-121)); 
console.log(isPalindrome(10));   
console.log(isPalindrome(0)); 