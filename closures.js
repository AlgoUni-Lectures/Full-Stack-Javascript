// Closures

// function createGreeter(name) {
//   return function () {
//     console.log("Hello, " + name);
//   };
// }

// const greetTemo = createGreeter("Temo");
// const greetSaba = createGreeter("Saba");
// greetTemo();
// greetSaba();

// --------

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// --------------
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, 100);
//   })(i);
// }

// ------- Currying
// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(1, 2, 3));

// // Curried version
// function curriedAdd(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// // const funcA = curriedAdd(1);
// // const funcB = funcA(2);
// // const result = funcB(3);
// // console.log(result);

// const result = curriedAdd(1)(2)(3);
// console.log(result);

// -----

function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
