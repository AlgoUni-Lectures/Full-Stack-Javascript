// // Bubble sort algorithm

// let arr = [5, 6, 15, 7, 45, 73, 1, 9]; // n = 8

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

// // Time Complexity - O(n ^ 2)

// ----------------

// Searching Algorithms

// let arr = [6, 4, 1, 9, 10, 5, -10];

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch(arr, -10));

// Time Conmplexity - O(n)

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([2, 3, 5, 7, 8, 10, 12, 15, 18, 20], 70));

// Time Complexity - O(logn) -> log1000 ~ 10
