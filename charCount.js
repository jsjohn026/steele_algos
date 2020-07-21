// function charCount(str) {
//   var result = {};

//   for(let i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if(/[a-z0-9]/.test(char)) {
//       if(result[char]) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }

// function charCount(str) {
//   var result = {};

//   for(let char of str) {
//     char = char.toLowerCase();
//     if(/[a-z0-9]/.test(char)) {
//       (result[char]) ? result[char]++ : result[char] = 1;
//     }
//   }
//   return result;
// }

function charCount(str) {
  var result = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && 
     !(code > 64 && code < 91) && 
     !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}

console.log(charCount("hello"));
console.log(charCount("hello hi"));