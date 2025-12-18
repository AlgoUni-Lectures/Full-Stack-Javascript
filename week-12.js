// 1. დაწერეთ ალგორითმი, რათა იპოვოთ სტრინგი პალინდრომია თუ არა
// const isPalindrome = (str) => {
//   return str === str.split("").reverse().join("");
// };

// const isPalindrome = (str) => {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }

//   return str === reversedStr;
// };

// const isPalindrome = (str) => {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }

//   return true;
// };

// console.log(isPalindrome("level"));

// 2. დაწერეთ ალგორითმი, რათა დაადგინოთ არის თუ არა ორი სტრინგი ანაგრამა

// const isAnagram = (str1, str2) => {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// };

// const isAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   const count = {};

//   for (let char of str1) {
//     count[char] = (count[char] || 0) + 1; // logical operator short circuiting

//     // if (count[char]) {
//     //   count[char]++;
//     // } else {
//     //   count[char] = 1;
//     // }
//   }

//   for (let char of str2) {
//     if (!count[char]) return false;
//     count[char]--;
//   }

//   return true;
// };

// console.log(isAnagram("temowwwww", "omettdfre"));

// 3. მოცემული რიცხვების მასივის მიხედვით დავადგინოთ, არის თუ არა მასივში დუპლიკაცები.

// const hasDuplicate = (nums) => {
//   const seen = {};

//   for (let num of nums) {
//     if (num in seen) {
//       return true;
//     }
//     seen[num] = true;
//   }

//   return false;
// };

// const hasDuplicate = (nums) => {
//   const seen = new Map();

//   for (let num of nums) {
//     if (seen.has(num)) return true;
//     seen.set(num, true);
//   }

//   return false;
// };

console.log(hasDuplicate([1, 2, 3, 3, 4, 4, 4]));
