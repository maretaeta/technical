/** @format */

function combineStrings(str1, str2, str3) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i] + str3[i];
  }
  return result;
}

// Test cases
console.log(combineStrings("dog", "cat", "pig"));
console.log(combineStrings("123", "456", "789"));
console.log(combineStrings("hello", "world", "again"));
