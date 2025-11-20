// 1672. Richest Customer Wealth
// Problem: Given a 2D array accounts where accounts[i][j] is the amount of money
// the i-th customer has in the j-th bank, return the maximum wealth among all customers.


var maximumWealth = function(accounts) {
    let max = 0;
    
    for(let i=0; i<accounts.length; i++){
        let sum = 0;
        for(let j=0; j<accounts[i].length; j++){
            sum += accounts[i][j];
        }
        if(sum > max){
            max = sum;
        }       
    }
    return max; 
};


console.log(maximumWealth([[1,2,3],[3,2,1]])); 
console.log(maximumWealth([[1,5],[7,3],[3,5]]));
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))