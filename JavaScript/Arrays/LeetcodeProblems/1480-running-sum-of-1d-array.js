// 1480. Running Sum of 1d Array
// Problem: Given an array nums, return the running sum where
// runningSum[i] = sum(nums[0] ... nums[i]).

var runningSum = function(nums) {
    const ans = []
    let sum = 0
    for (let i=0; i<nums.length; i++){
        sum += nums[i];
        ans.push(sum); 
    }
    return ans; 
};

console.log(runningSum([1,2,3,4])); 
console.log(runningSum([1,1,1,1,1])); 
console.log(runningSum([3,1,2,10,1]));