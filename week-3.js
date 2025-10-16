const prompt = require("prompt-sync")();

// 1. დაწერეთ პროგრამა, რომელიც გამოთვლის კენტი რიცხვების ჯამს 1-დან 100-ის ჩათვლით და დაბეჭდავს შედეგს.

// 1.1 დავბეჭდოთ 1-დან 100-ის ჩათვლით რიცხვები while loop-ის გამოყენებით
// 1.2 დავბეჭდოთ კენტი რიცხვები 1-დან 100-ის ჩათვლით while loop-ის გამოყენებით
// 1.3 დავბეჭდოთ კენტი რიცხვების ჯამი 1-დან 100-ის ჩათვლით while loop-ის გამოყენებით

// პირველი ვარიანტი - while loop

// let number = 0;
// let sum = 0;
// while (number <= 100) {
//   if (number % 2 === 1) {
//     sum += number;
//   }
//   number++;
// }

// მეორე ვარიანტი - do while loop

// let number = 0;
// let sum = 0;
// do {
//   if (number % 2 === 1) {
//     sum += number;
//   }
//   number++;
// } while (number <= 100);

// მესამე ვარიანტი - for loop

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
// }

// console.log(sum);

// 2. დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის და do while-ის გამოყენებით.

// პირველი ვარიანტი - while loop
// let secret = 7;
// let tries = 0;
// let guess;

// do {
//   guess = Number(prompt("Guess the secret number between 1 and 10: "));
//   if (guess > 10 || guess < 1) {
//     console.log("Please enter a number between 1 and 10.");
//   }

//   tries++;
//   console.log(`You have tried ${tries} times.`);
//   if (tries >= 3 && guess !== secret) {
//     console.log("You have exceeded the maximum number of tries.");
//     break;
//   }

//   if (guess === secret) {
//     console.log("Congratulations! You guessed the secret number.");
//   }
// } while (guess !== secret);

// მეორე ვარიანტი - do while loop

// let secret = 7;
// let tries = 0;
// let guess;

// while (guess !== secret) {
//   guess = Number(prompt("Guess the secret number between 1 and 10: "));
//   if (guess > 10 || guess < 1) {
//     console.log("Please enter a number between 1 and 10.");
//   }

//   tries++;
//   console.log(`You have tried ${tries} times.`);
//   if (tries >= 3 && guess !== secret) {
//     console.log("You have exceeded the maximum number of tries.");
//     break;
//   }

//   if (guess === secret) {
//     console.log("Congratulations! You guessed the secret number.");
//   }
// }

// 3. გამოიყენეთ for loop 4-ის გამრავლების ცხრილის დასაბეჭდად (4 × 1-დან 4 × 10-მდე)

// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40

// let number = Number(prompt("Enter a number"));
// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

// 4. გამოიყენეთ for loop 20-დან 10-მდე რიცხვების დასაბეჭდად.

// for (let i = 20; i >= 10; i--) {
//   console.log(i);
// }

/*5. Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3


თუ გაგიჭირდათ, მინიშნებასაც გადახედეთ: You can start with a program that prints out the numbers 1 to 7, which you can derive by making a few modifications to the even number printing example given earlier in the chapter, where the for loop was introduced.

Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (+= 1). You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing program.

*/

// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// for (let line = "#"; line.length <= 7; line += "#") {
//   console.log(line);
// }

/*6. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

თუ გაგიჭირდათ, მინიშნებასაც გადახედეთ: Going over the numbers is clearly a looping job, and selecting what to print is a matter of conditional execution. Remember the trick of using the remainder (%) operator for checking whether a number is divisible by another number (has a remainder of zero).

In the first version, there are three possible outcomes for every number, so you’ll have to create an if/else if/else chain.

The second version of the program has a straightforward solution and a clever one. The simple solution is to add another conditional “branch” to precisely test the given condition. For the clever solution, build up a string containing the word or words to output and print either this word or the number if there is no word, potentially by making good use of the || operator.
*/

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 === 0) {
//     output += "Fizz";
//   }
//   if (i % 5 === 0) {
//     output += "Buzz";
//   }
//   console.log(output || i); // logical operator short-circuit evaluation
// }

/* 7
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboa

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

თუ გაგიჭირდათ, მინიშნებასაც გადახედეთ: You can build the string by starting with an empty one ("") and repeatedly adding characters. A newline character is written "\n".

To work with two dimensions, you will need a loop inside of a loop. Put braces around the bodies of both loops to make it easy to see where they start and end. Try to properly indent these bodies. The order of the loops must follow the order in which we build up the string (line by line, left to right, top to bottom). So the outer loop handles the lines, and the inner loop handles the characters on a line.

You’ll need two bindings to track your progress. To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2).

Terminating a line by adding a newline character must happen after the line has been built up, so do this after the inner loop but inside the outer loop.
*/

let size = 8;
let chessboard = "";

for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= size; j++) {
    if ((i + j) % 2 === 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);

/*

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

i = 1, j = 1 -> chessboard = " "
i = 1, j = 2 -> chessboard = "#"
i = 1, j = 3 -> chessboard = " "
i = 1, j = 4 -> chessboard = "#"
i = 1, j = 5 -> chessboard = " "
i = 1, j = 6 -> chessboard = "#"
i = 1, j = 7 -> chessboard = " "
i = 1, j = 8 -> chessboard = "#"


i = 2, j = 1 -> chessboard = "#"
i = 2, j = 2 -> chessboard = " "
i = 2, j = 3 -> chessboard = "#"
i = 2, j = 4 -> chessboard = " "
i = 2, j = 5 -> chessboard = "#"
i = 2, j = 6 -> chessboard = " "
i = 2, j = 7 -> chessboard = "#"
i = 2, j = 8 -> chessboard = " "
i = 2 -> chessboard = " # # # #\n# # # # \n"
*/
