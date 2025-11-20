// 1929. Concatenation of Array
// Problem: Given an array nums of length n, return an array ans of length 2n
// where ans[i] = nums[i] and ans[i+n] = nums[i].

var getConcatenation = function(nums) {
    const ans = [];
    for(let i=0; i < 2*nums.length; i++){
        ans[i] = nums[i%nums.length];
    }
    return ans;
};

console.log(getConcatenation([1,2,1]));
console.log(getConcatenation([1,3,2,1]));
console.log(getConcatenation([5,6]));   
