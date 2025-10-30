// 1. დაწერეთ პროგრამა, რომ იპოვოთ მასივში ყველა ლუწი რიცხვის ჯამი.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function evenSum(arr) {
//   let sum = 0;
//   //   for (let i = 0; i < arr.length; i++) {
//   //     if (arr[i] % 2 === 0) {
//   //       sum += arr[i];
//   //     }
//   //   }
//   for (let number of arr) {
//     if (number % 2 === 0) {
//       sum += number;
//     }
//   }
//   return sum;
// }

// console.log(evenSum(arr));

// 2. დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

// let arr = [5, 2, 3, 4, 1, 1000]; // [1, 2, 3, 4, 5]

// arr.sort((a, b) => a - b);

// console.log(arr);

// 3. დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

// let arr = [3, 2, 5, 7, 4];
// arr.sort((a, b) => b - a);
// console.log(arr[0]);

// console.log(Math.max(...arr));

// function findMax(arr) {
//   let max = arr[0];
//   for (let number of arr) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// }

// console.log(findMax(arr));

// 4. დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

// function removeElement(arr, element) {
//   let index = arr.indexOf(element);

//   if (index === -1) {
//     return "Element Not Found";
//   }

//   arr.splice(index, 1);

//   return arr;
// }

// console.log(removeElement(["temo", "nika", "beqa", "luka"], "temo"));

// 5. დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

function commonElements(...arrays) {
  let common = [];
  //   for (let number of arr1) {
  //     if (arr2.includes(number)) {
  //       common.push(number);
  //     }
  //   }
  //   return common;

  console.log(arrays);
  let targetArr = arrays[0];

  for (let number of targetArr) {
    let includes = true;
    for (let i = 1; i < arrays.length; i++) {
      if (!arrays[i].includes(number)) {
        includes = false;
        break;
      }
    }

    if (includes) {
      common.push(number);
    }
  }

  return common;
}

console.log(commonElements([1, 2, 4, 7], [1, 2, 4, 5, 7], [2, 3, 9, 4]));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let [a, b, ...c] = [...arr1, ...arr2];
// console.log(a, b, c);

// let person = {
//   name: "temo",
//   age: 20,
//   profession: "programmer",
// };

// let { name: saxeli, age: asaki, profession: profesia } = person;
// console.log(saxeli, asaki, profesia);

// let obj1 = {
//   a: 5,
// };

// let obj2 = {
//   b: 10,
// };

// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
