// 1832. Check if the Sentence Is Pangram
// Problem: Return true if sentence contains every letter a-z at least once.

// in this i learn about set.
// - In JavaScript, a Set is a collection of unique values.
// - When you pass a string (like sentence) into the Set constructor, JavaScript treats the string as an iterable — meaning it will break it down into individual characters.
// - So new Set(sentence) creates a set containing all distinct characters from the string.


var checkIfPangram = function(sentence) {
    let set = new Set(sentence)
        return set.size == 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode")); 
console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyz"));



