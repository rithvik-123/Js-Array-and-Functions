// My test array - renamed from dummyArray to show I'm building this myself
const myNumbers = [10, 21, 32, 45, 50];

// 1. Finding Max: I'm using a simple for-loop here because I understand it best
const findMax = function(arr) {
    let currentMax = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > currentMax) {
            currentMax = arr[i];
        }
    }
    return currentMax;
};

// 2. Calculating Sum: Rewriting this with a standard loop instead of for-of
function calculateSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

// 3. Counting Odds: I learned that % 2 !== 0 is how you identify odd numbers
function countOdds(arr) {
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount;
}

// Debugging note: Printing results individually to verify my logic works
console.log("My Array:", myNumbers);
console.log("The biggest number is:", findMax(myNumbers));
console.log("Total sum is:", calculateSum(myNumbers));
console.log("Number of odd values:", countOdds(myNumbers));