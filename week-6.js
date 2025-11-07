// 1. რიცხვების მასივის გათვალისწინებით, გამოიყენეთ ფილტრი ახალი მასივის შესაქმნელად, რომელიც შეიცავს მხოლოდ ლუწ რიცხვებს.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let even = arr.filter((number) => number % 2 === 0);

// console.log(even);

// 2. მომხმარებლების გაფილტვრა ასაკის მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით, თვისებების სახელით და ასაკის მიხედვით, გამოიყენეთ ფილტრი 18 წელზე უფროსი ასაკის მომხმარებელთა მასივის შესაქმნელად.

// const users = [
//   {
//     name: "Temo",
//     age: 21,
//   },
//   {
//     name: "Beqa",
//     age: 22,
//   },
//   {
//     name: "nika",
//     age: 13,
//   },
//   {
//     name: "luka",
//     age: 17,
//   },
//   {
//     name: "ani",
//     age: 18,
//   },
// ];

// const adults = users.filter((user) => user.age >= 18);
// console.log(adults);

// 3. მომხმარებლის ობიექტების მასივის გათვალისწინებით, შექმენით მასივი,სადაც მხოლოდ მომხმარებლის სახელები იქნება.

// const users = [
//   {
//     name: "Temo",
//     age: 21,
//   },
//   {
//     name: "Beqa",
//     age: 22,
//   },
//   {
//     name: "nika",
//     age: 13,
//   },
//   {
//     name: "luka",
//     age: 17,
//   },
//   {
//     name: "ani",
//     age: 18,
//   },
// ];

// let names = users.map((user) => user.name);
// console.log(names);

// 4. იპოვეთ რიცხვების მასივში ყველა ლუწი რიცხვის ჯამი.ვიყენებთ მაღალი დონის ფუნქციებს.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let number of arr) {
//   if (number % 2 === 0) {
//     sum += number;
//   }
// }
// console.log(sum);

// let sum = arr.reduce((sum, number) => {
//   if (number % 2 === 0) {
//     sum += number;
//   }
//   return sum;
// }, 0);

// console.log(sum);

// 5. მომხმარებლების დალაგება სახელების მიხედვით: მომხმარებლის ობიექტების მასივის გათვალისწინებით,დავაბრუნოთ მასივი რომელიც დალაგებული იქნება  ანბანურად მომხმარებლის სახელის მიხედვით.

// const users = [
//   {
//     name: "თემო",
//     age: 21,
//   },
//   {
//     name: "ბექა",
//     age: 22,
//   },
//   {
//     name: "ნიკა",
//     age: 13,
//   },
//   {
//     name: "ლუკა",
//     age: 17,
//   },
//   {
//     name: "ანი",
//     age: 18,
//   },
// ];

// let usersClone = [...users];

// let sortedArr = usersClone.sort((a, b) => a.name.localeCompare(b.name));

// console.log(sortedArr);

// console.log(users);

// 6. რიცხვების მასივის გათვალისწინებით, გამოიყენეთ every, რათა შეამოწმოთ არის თუ არა ყველა რიცხვი დადებითი.

// let arr = [5, 1, 2, 3, -2, 3, 1];

// let isEveryPositive = arr.every((number) => number > 0);
// console.log(isEveryPositive);
// 7. რიცხვების მასივის გათვალისწინებით, გამოიყენეთ some, რათა შეამოწმოთ არის თუ არა ზოგიერთი  რიცხვი დადებითი.

// let arr = [-5, -1, -2, -3, -2, -3, 0];

// let isSomePositive = arr.some((number) => number > 0);
// console.log(isSomePositive);

// 8. დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// function capitalizeWords(string) {
//   let words = string.split(" ");
//   let upperWords = [];
//   for (let word of words) {
//     upperWords.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return upperWords.join(" ");
// }

// function capitalizeWords(string) {
//   let words = string.split(" ");
//   let upperWords = words.map((word) => word[0].toUpperCase() + word.slice(1));
//   let joinedString = upperWords.join(" ");
//   return joinedString;
// }

// const capitalizeWords = (string) =>
//   string
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");

// console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"

// 9. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

// let arr = [
//   {
//     name: "temo",
//     age: 25,
//   },
//   {
//     name: "temo",
//     age: 22,
//   },
//   {
//     name: "nika",
//     age: 19,
//   },
//   {
//     name: "temo",
//     age: 25,
//   },
//   {
//     name: "ani",
//     age: 25,
//   },
// ];

// function uniqueValues(arr, key) {
//   let names = arr.map((element) => element[key]);
//   console.log(names);
//   let uniqueValues = new Set(names);
//   return [...uniqueValues];
// }

// function uniqueValues(arr, key) {
//   let names = arr.map((element) => element[key]);
//   console.log(names);
//   let uniqueValues = names.filter(
//     (name, index) => index === names.indexOf(name)
//   );
//   return uniqueValues;
// }

// function uniqueValues(arr, key) {
//   return arr
//     .map((element) => element[key])
//     .filter((name, index, currentArr) => index === currentArr.indexOf(name));
// }

// console.log(uniqueValues(arr, "name")); // ["temo", "nika", "ani"]

// 10. დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".

// function formatString(string) {
//   let words = string.split(" ");
//   let missedWords = ["the", "a", "is"];
//   let filteredWords = words.filter((word) => !missedWords.includes(word));
//   let uniqueWords = [...new Set(filteredWords)];
//   let sortedArr = uniqueWords.sort();
//   return sortedArr;
// }

// const formatString = (string) =>
//   [
//     ...new Set(
//       string
//         .split(" ")
//         .filter((word) => word !== "the" && word !== "a" && word !== "is")
//     ),
//   ].sort();

// console.log(formatString("the cat is on the roof and the cat is happy"));

// 11. დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// function commonElements(...arrays) {
//   let targetArr = arrays[0];
//   let commons = [];

//   for (let number of targetArr) {
//     let common = true;
//     for (let i = 0; i < arrays.length; i++) {
//       if (!arrays[i].includes(number)) {
//         common = false;
//       }
//     }

//     if (common) {
//       commons.push(number);
//     }
//   }
//   return commons;
// }

// function commonElements(...arrays) {
//   let targetArr = arrays[0];
//   return targetArr.filter((number) =>
//     arrays.every((arr) => arr.includes(number))
//   );
// }

// const commonElements = (...arrays) =>
//   arrays[0].filter((number) => arrays.every((arr) => arr.includes(number)));
// console.log(commonElements([1, 2, 3], [2, 3, 4], [3, 4, 5, 2]));
