const prompt = require("prompt-sync")();

// 1. დაწერეთ ფუქნცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს და ორ ქოლბექ ფუქნციას. თუ პირველი რიცხვი მეტია მეორეზე,
//  გამოიძახეთ პირველი ქოლბექი, თუარადა გამოიძახეთ მეორე ქოლბექ ფუნქცია.

// function foo(num1, num2, callback1, callback2) {
//   if (num1 > num2) {
//     callback1();
//   } else {
//     callback2();
//   }
// }

// foo(
//   5,
//   10,
//   () => console.log("metia"),
//   () => console.log("ar aris meti")
// );

// 2. შექმენით ფრომისი, რომელიც დარეზოლვდება 2 წამის შემდეგ და გამოიტანს წარამტების შეტყობინებას.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 2000);
// });

// promise.then((message) => {
//   console.log(message);
// });

// 3. შექმენით ფრომისი, რომელიც დაარეზოლვებს შემთხვევების 50%-ში და დანარჩენ 50%-ში დაარეჯექთებს. გაუმკლავდით ორივე ვარიანტს then და catch-ით.

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   if (random > 0.5) {
//     resolve({
//       message: "Success",
//     });
//   } else {
//     reject({
//       message: "Failed",
//     });
//   }
// });

// promise
//   .then((result) => {
//     console.log(result.message);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// console.log("hello");

// 4. შექმენით Promise Chain (მინიმუმ 3 ფრომისით), სადაც თითოეული დარეზოლვდება 1 წამში და გამოიტანს განსხვავებულ წარმატების შეტყობინებებს.

// const generatePromise = (message, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, delay);
//   });
// };

// generatePromise("Success promise 1", 1000)
//   .then((message1) => {
//     console.log(message1);

//     return generatePromise("Success promise 2", 2000);
//   })
//   .then((message2) => {
//     console.log(message2);

//     return generatePromise("Success promise 3", 3000);
//   })
//   .then((message3) => {
//     console.log(message3);
//   });

// 5. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება დადებით რიცხვს და დაითვლის მაგ რიცხვამდე. თითოეული რიცხვი უნდა გამოკონსოლდეს 1 წამის ინტერვალით.

// const num = Number(prompt("Enter the number: "));

// let i = 1;
// const intervalId = setInterval(() => {
//   console.log(i);
//   i++;

//   if (i > num) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// 6. დაწერეთ პროგრამა, რომელსაც API-დან მოაქვს ორი განსხვავებული ინფორმაცია და დაბეჭდოს, როდესაც ორივეს მიიღებს.

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const links = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

// Promise.all(links.map((link) => fetch(link)))
//   .then((responses) => {
//     return Promise.all(responses.map((response) => response.json()));
//   })
//   .then((data) => {
//     console.log(data);
//   });

// ---------
// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch todo");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// fetchData();

// 7. დაწერეთ პროგრამა, რომელიც API-დან წამოიღებს სამ განსხვავებულ დატას და დაბეჭდავს იმას, რომელსაც ყველაზე მალე მიიღებს.

// Promise.race(links.map((link) => fetch(link)))
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// 8. დაწერეთ ფუნქცია სახელად promptAge, რომელიც შეეკითხება მომხმარებელს თავის ასაკს და თუ არასწორად იქნება ასაკი შემოყვანილი, გაისვრის ერორს.
// ეს ფუნქცია გამოიძახეთ isAdult ფუნქციაში, რომელიც ადგენს არის თუ არა მომხმარებელი სრულწლოვანი. გამოიყენეთ try/catch ერორების გასამკლავებლად.

// class MyError extends Error {}

// const promptAge = () => {
//   try {
//     const age = "temo";
//     if (isNaN(age)) {
//       throw new Error("Wrong Age Input");
//     }
//     return age;
//   } catch (error) {
//     console.log(error.message);

//     throw new MyError("Failed");
//   }
// };

// const isAdult = () => {
//   try {
//     const age = promptAge();
//     if (age >= 18) {
//       return "Adult";
//     } else {
//       return "Minor";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log(isAdult());

/*
function isAdult() {
  let age = promptAge();
  try {
    if (isNaN(age) || age <= 0 || age > 100) {
      throw new Error("wrong input!");
    } else if (age < 18) {
      throw new Error("User is not an adult!");
    } else {
      console.log("User is an adult");
    }
  } catch (error) {
    console.log(error.message);
  }
}

*/

for (let x = 1; x <= 20; x++) {
  if (x % 2 === 0) {
    console.log(x);
  }
}
