// Write a function called sumZero which accepts a sorted array of integers. The functions should find the first pair where the sum is 0 Return an array that includes both values that sum to zero of undefined if a pair does not exist. 

// Naive solution: Time O(n^2) Space O(1)
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) { //sets up a pointer looking at 1 element
//     for (let j = 1 + 1; j < arr.length; j++) { // looks at rest of array
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined

// Refactored Solution: Time O(n) Space O(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}