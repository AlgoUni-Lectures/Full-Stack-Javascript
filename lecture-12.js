// 1. Given an array of numbers and a target sum, find two numbers that add up to the target. Return their indices.

//  Example
// nums = [2, 7, 11, 15];
// target = 9;

// Answer: [0, 1] because nums[0] + nums[1] = 2 + 7 = 9

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [];
// }
// O(n^2)

// function twoSum(nums, target) {
//   const seen = {};

//   for (let i = 0; i < nums.length; i++) {
//     const res = target - nums[i];

//     if (res in seen) {
//       return [seen[res], i];
//     }

//     seen[nums[i]] = i;
//   }
// }
// O(n)

// console.log(twoSum([2, 15, 11, 7], 9));

// 2. Kids stand in a circle, passing a "hot potato" around. At random intervals, the music stops.
// Whoever is holding the potato is out.
// Repeat until one person remains.

// function hotPotato(players, num) {
//   const queue = [...players];

//   while (queue.length > 1) {
//     for (let i = 0; i < num; i++) {
//       queue.push(queue.shift());
//     }

//     const eliminated = queue.shift();
//     console.log(eliminated + " was eliminated");
//   }

//   return queue[0];
// }

// console.log(hotPotato(["Dan", "Eve", "Ana", "Bob", "Cara"], 3));
