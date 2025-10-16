const prompt = require("prompt-sync")();

// 1. დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
// const number = Number(prompt("შეიყვანეთ რიცხვი:"));

if (number % 2 === 0) {
  console.log("ლუწია");
} else {
  console.log("კენტია");
}

// 2. დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
// let str = "           ";

// if (str.trim().length === 0) {
//   console.log("ცარიელია");
// } else {
//   console.log("არ არის ცარიელი");
// }

// 3. დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას. 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე - if/else if/else და switch.
// let score = Number(prompt("შეიყვანეთ ქულა:"));

// if (score < 0 || score > 100) {
//   console.log("არასწორი ქულა");
// } else if (score >= 91 && score <= 100) {
//   console.log("A");
// } else if (score >= 81) {
//   console.log("B");
// } else if (score >= 71) {
//   console.log("C");
// } else if (score >= 61) {
//   console.log("D");
// } else if (score >= 51) {
//   console.log("E");
// } else {
//   console.log("ჩაიჭრა");
// }

// switch (true) {
//   case score < 0 || score > 100:
//     console.log("არასწორი ქულა");
//     break;
//   case score >= 91 && score <= 100:
//     console.log("A");
//     break;
//   case score >= 81:
//     console.log("B");
//     break;
//   case score >= 71:
//     console.log("C");
//     break;
//   case score >= 61:
//     console.log("D");
//     break;
//   case score >= 51:
//     console.log("E");
//     break;
//   default:
//     console.log("ჩაიჭრა");
// }

// 4. დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

// const month = Number(prompt("შეიყვანეთ თვის რიცხვი:"));

// if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// ) {
//   console.log("31 დღე");
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   console.log("30 დღე");
// } else if (month === 2) {
//   console.log("28 ან 29 დღე");
// } else {
//   console.log("არასწორი თვის რიცხვი");
// }

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 დღე");
//     break;
//   case 2:
//     console.log("28 ან 29 დღე");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 დღე");
//     break;
//   default:
//     console.log("არასწორი თვის რიცხვი");
// }
