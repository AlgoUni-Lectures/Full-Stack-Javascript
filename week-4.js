const prompt = require("prompt-sync")();

// 1. დაწერეთ ფუნქცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".

// function sayHello() {
//   console.log("Hello, World");
// }

// sayHello();

// 2. დაწერეთ ფუნქცია, სახელად greet, რომელიც პარამეტრად მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"

// function greet(name = "უცნობო") {
//   console.log("გამარჯობა, " + name);
// }

// greet("თემო");

// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და დააბრუნებს მათ შორის უდიდესს. გამოიყენეთ სამივე - Function Declaration, Function Expression, Arrow Function.

// function declaration - ფუნქციის დეკლარაცია
// function max(x, y) {
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y;
//   }
//   return "ტოლია";
// }

// function expression - ფუნქციის გამოსახულება
// const max = function (x, y) {
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y;
//   }
//   return "ტოლია";
// };

// arrow function - ისრიანი ფუნქცია
// const max = (x, y) => {
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y;
//   }
//   return "ტოლია";
// }

// console.log(max(15, 10));

// 4. დაწერეთ ფუნქცია სახელად sumDigits, რომელიც პარამეტრად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს

// 4.1
// function sumDigits(number) {
//   let sum = 0;
//   while (number > 0) {
//     let digit = number % 10;
//     sum += digit;

//     number = Math.floor(number / 10);
//   }

//   return sum;
// }

// console.log(sumDigits(145));

/*

145 % 10 = 5
14 % 10 = 4
1 % 10 = 1


145 / 10 = Math.floor(14.5) -> 14
14 / 10 = Math.floor(1.4) -> 1
1 / 10 = Math.floor(0.1) -> 0

*/

// 4.2
// let string = "Hello, World";

// for (let i = 0; i < string.length; i++) {
//   console.log(string[i]);
// }

// const sumDigits = (number) => {
//   let sum = 0;
//   const strNumber = number.toString();
//   for (let i = 0; i < strNumber.length; i++) {
//     sum += Number(strNumber[i]);
//   }
//   return sum;
// };

// console.log(sumDigits(1451));

// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.

// function isPalindrome(string) {
//   let reversedStr = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedStr += string[i];
//   }
//   return string === reversedStr;
//   if (string === reversedStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("level"));

/* 6
დაწერეთ პროგრამა, რომელიც:

მოუწოდებს მომხმარებელს, აირჩიოს თამაშის დონე,
. თუ მომხმარებელი არ ჩაწერს 1, 2 ან 3-ს, პროგრამამ იგივე შეკითხვა კვლავ უნდა დასვას.

შემთხვევითობის პრინციპით წარმოქმნის ათ (10) მათემატიკურ ამოცანას, ფორმატირებულს, როგორც X + Y = , სადაც თითოეული X და Y არის დადებითი მთელი რიცხვი.

სთხოვს მომხმარებელს, გადაჭრას თითოეული ეს პრობლემა. თუ პასუხი არ არის სწორი (ან საერთოდ, რიცხვი არაა), პროგრამამ უნდა დაწეროს EEE და კვლავ იგივე ამოცანა დაუბეჭდოს მომხმარებელს, რაც მომხმარებელს საშუალებას მისცემს, ამ პრობლემის გადასაჭრელად სულ სამი ცდა გამოიყენოს. თუ მომხმარებელი სწორ პასუხს სამი ცდის შემდეგაც ვერ დაწერს, პროგრამამ სწორი პასუხი თვითონ უნდა დაუწეროს.

საბოლოო ჯამში, პროგრამამ უნდა დაბეჭდოს მომხმარებლის ქულა: სწორი პასუხების რაოდენობა 10-დან.

შექმენით თქვენი პროგრამა შემდეგნაირად, სადაც ერთი ფუნქცია მოუწოდებს (და საჭიროების შემთხვევაში ხელახლა ეკითხება) მომხმარებელს თამაშის დონის არჩევისკენ და აბრუნებს 1, 2 ან 3-ს; მეორე ფუნქცია - აბრუნებს შემთხვევით გენერირებულ დადებით მთელ რიცხვს, დონის ციფრების გათვალისწინებით, ან ბეჭდავს შეცდომის შეტყობინებას (error message), თუ დონე არ არის 1, 2 ან 3.

მაგალითად:

> Level: 1
> 2 + 8 = 10
> 3 + 7 = 10
> 9 + 4 = 10
> EEE
> 9 + 4 = 11
> EEE
> 9 + 4 = 12
> EEE
> 9 + 4 = 13
> 4 + 7 = 11

> 1 + 4 = cat
> EEE
> 1 + 4 = dog
> EEE
> 1 + 4 = bird
> EEE
> 1 + 4 = 5
> 9 + 3 = 12
> 2 + 2 = 4
> 0 + 0 = 0
> Score: 8

*/

// function promptLevel() {
//   let level;
//   do {
//     level = Number(prompt("Enter level: "));
//   } while (level !== 1 && level !== 2 && level !== 3);
//   return level;
// }

// function generateRandomNumber(level) {
//   return Math.floor(Math.random() * Math.pow(10, level));
// }

// function guess(level) {
//   let randX = generateRandomNumber(level);
//   let randY = generateRandomNumber(level);

//   let correctAnwer = randX + randY;
//   let userAnswer;

//   let tries = 0;

//   do {
//     userAnswer = Number(prompt(`${randX} + ${randY} = `));
//     tries++;
//     if (userAnswer !== correctAnwer) {
//       console.log("EEE");
//       if (tries === 3) {
//         console.log(`${randX} + ${randY} = ${correctAnwer}`);
//         break;
//       }
//     } else {
//       score++;
//       break;
//     }
//   } while (true);
// }

// let score = 0;
// function main() {
//   const level = promptLevel();
//   for (let i = 0; i < 10; i++) {
//     guess(level);
//   }
//   console.log(`Score: ${score}`);
// }

// main();
