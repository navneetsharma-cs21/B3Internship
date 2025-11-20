// 1920. Build Array from Permutation
// Problem: Given a zero-based permutation nums, build an array ans
// where ans[i] = nums[nums[i]] for each i.

var buildArray = function(nums) {
    const ans = [];
    for (let i = 0; i < nums.length; ++i) {
        ans.push(nums[nums[i]]);
    }
    return ans;
};

console.log(buildArray([0,2,1,5,3,4])); 
console.log(buildArray([5,0,1,2,3,4])); 
console.log(buildArray([0,1,2]));      
