// 1431. Kids With the Greatest Number of Candies
// Problem: Return a boolean array where result[i] is true if
// kid i can have the greatest number of candies after receiving extraCandies.

var kidsWithCandies = function(candies, extraCandies) {
    let maxcandies = candies[0]
    let res = []

    for(let i = 0; i< candies.length; i++){
        if(candies[i]>maxcandies){
            maxcandies = candies[i]
        }
    }

    for(let i = 0; i< candies.length; i++){
        res.push(candies[i]+extraCandies >= maxcandies)
    }
    return res;
};

console.log(kidsWithCandies([2,3,5,1,3], 3)); 

console.log(kidsWithCandies([4,2,1,1,2], 1)); 

console.log(kidsWithCandies([12,1,12], 10)); 