// Anagrams
// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram 
// is a word, phrase, or name formed by rearranging the 
// letters of another, such as cinema, formed from iceman

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let counter1 = {};
//   let counter2 = {};

//   for (let val of str1) {
//     counter1[val] = (counter1[val] || 0) + 1;
//   }

//   for (let val of str2) {
//     counter2[val] = (counter2[val] || 0) + 1;
//   }

//   for (let key in counter1) {
//     if (!(key in counter2)) {
//       return false;
//     }
//     if ((counter1[key] !== counter2[key])) {
//       return false;
//     }
//   }
  
//   return true;
// }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('','')) // true
console.log(validAnagram('aaz','zza')) // false
console.log(validAnagram('anagram','nagaram')) // true
console.log(validAnagram('rat','car')) // false
console.log(validAnagram('awesome','awesom')) // false
console.log(validAnagram('qwerty','qeywrt')) // true
console.log(validAnagram('texttwisttime','timetwisttext')) // true



// SOLUTION:
// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')