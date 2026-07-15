// Dummy array for testing as requested in the sample output
const dummyArray = [4, 8, 2, 11, 6, 7, 10];

// ==========================================
// 1. Anonymous Function Expression
// ==========================================
const findMax = function(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// ==========================================
// 2. Arrow Function
// ==========================================
const calculateSum = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};

// ==========================================
// 3. Standard Function Declaration
// ==========================================
function countOdds(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // If the remainder of division by 2 is NOT 0, it is odd
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

// ==========================================
// CONSOLE OUTPUT (Matching Sample Output)
// ==========================================
console.log("Ex Array:- [" + dummyArray.join(", ") + "]");
console.log("Maximum number: " + findMax(dummyArray));
console.log("Sum of all elements: " + calculateSum(dummyArray));
console.log("Count of odd numbers: " + countOdds(dummyArray));