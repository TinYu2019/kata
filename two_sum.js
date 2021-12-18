const numbers = [1,3,4,5,7,10,11];
const target = 9;

// First Solution: O(n2). We have loop over the array 2 times
function firstTwoSum(numbers, target){
    for(let first of numbers) {
        for(let second of numbers) {
            if(first === second) continue;
            result = first + second;
            if(result === target) return console.log("first solution",[first, second]);
        }
    }
};

// Second Solution: O(n2)
// for-loop = O(n) + includes = O(n)
function secondTwoSum(numbers, target){
    const expected = [];
    
    for(let number of numbers) {
        if(!expected.includes(number)){
            expected.push(target-number);
            continue;
        }
        return console.log("second solution", [target-number, number]);
}}

// Third Solution(the best one)
// O(n), when we use has from Set, time complexity = O(1)
function thirdTwoSum(numbers, target){
    const expected = new Set();
   
    for(let number of numbers) {
        if(!expected.has(number)){
            expected.add(target-number);
            continue;
        }
    return console.log("thrid solution", [target-number, number]);
}}

firstTwoSum(numbers, target);
secondTwoSum(numbers, target);
thirdTwoSum(numbers, target);