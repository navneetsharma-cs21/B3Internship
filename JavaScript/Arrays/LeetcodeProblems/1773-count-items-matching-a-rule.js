// 1773. Count Items Matching a Rule
// Problem: Return the number of items that match the given rule.

var countMatches = function(items, ruleKey, ruleValue) {
    let keyindex;
    if(ruleKey == "type") keyindex = 0;
    else if(ruleKey == "color") keyindex = 1;
    else if(ruleKey == "name") keyindex = 2;

    let count = 0;
    for(let item of items){
        if(item[keyindex] == ruleValue){
            count++;
        }
    }
    return count;
};


console.log(countMatches(
    [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
    "color", "silver"
)); 


console.log(countMatches(
    [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
    "type", "phone"
)); 


console.log(countMatches(
    [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
    "name", "pixel"
)); 
