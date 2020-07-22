// Write a function called same, which accepts two arrays. 
// The function should return true if every value in the array 
// has it's corresponding value squared in the second array. 
// The frequency of values must be the same


// Naive Solution: O(n**2) because of nested loops
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
  
//   for (let i = 0; i < arr1.length; i++) {
//     let targetIndex = arr2.indexOf(arr1[i] ** 2);
//     if (targetIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(targetIndex, 1);
//   }
  
//   return true;
// }

// 2 separate loops reduces it to O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};


}



console.log(same([1, 2, 3, 2],[9, 1, 4, 4])) // true
console.log(same([1, 2, 3],[4, 1, 9])) // true
console.log(same([1, 2, 3],[1, 9])) // false
console.log(same([1, 2, 1],[4, 4, 1])) // false (must be same frequency)