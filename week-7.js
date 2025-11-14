/* 1. შექმენით პროდუქტის პროტოტიპი, რომელსაც ექნება მეთოდი პროდუქტის ფასის საჩვენებლად. პროტოტიპზე დაყრდნობით შექმენით რამდენიმე პროდუქტის ობიექტი, 
რომელთაც ექნებათ სახელისა და ფასის ფროფერთები. შექმენით კალათის პროტოტიპი რომელზე დაყრდნობითაც შეიქმნება კალათის ობიექტები. კალათის ობიექტში უნდა გვქონდეს მასივი, 
სადაც შეგვეძლება პროდუქტის ობიექტების დამატება. პროტოტიპშივე უნდა იყოს მეთოდი, რომელიც დაამატებს მასივში ახალ პროდუქტებს და მეთოდი, რომელიც დაითვლის კალათაში 
არსებული ყველა პროდუქტის ჯამურ ფასს.
*/

// Product
/*
const productProto = {
  getPrice() {
    return this.price;
  },
};

const product1 = Object.create(productProto);
product1.name = "Product 1";
product1.price = 10;
// console.log(product1);
// console.log(product1.getPrice());

const product2 = Object.create(productProto);
product2.name = "Product 2";
product2.price = 20;
// console.log(product2);
// console.log(product2.getPrice());

const product3 = Object.create(productProto);
product3.name = "Product 3";
product3.price = 30;
// console.log(product3);
// console.log(product3.getPrice());

const cartProto = {
  addProduct(...products) {
    this.cart.push(...products);
  },
  priceSum() {
    // let sum = 0;
    // for (let product of this.cart) {
    //   sum += product.price;
    // }
    // return sum;

    return this.cart.reduce((sum, product) => sum + product.price, 0);
  },
};

// Cart

function Cart() {
  const cart = Object.create(cartProto);
  cart.cart = [];
  return cart;
}

const cart1 = new Cart();
cart1.addProduct(product1);
console.log(cart1.cart);
console.log(cart1.priceSum());

const cart2 = new Cart();
cart2.addProduct(product2, product3);
console.log(cart2.cart);
console.log(cart2.priceSum());
*/

/* 2. Object Prototype Extension: Write a function that extends an object's prototype with additional methods. The additional methods should perform
specific operations on the object's properties. For example, extend the Array prototype with a method called sum() that calculates the sum of all elements
in the array.
*/

// let arr = [1, 2, 3, 4, 5];
// Array.prototype.sum = function () {
//   let sum = 0;
//   for (let number of this) {
//     sum += number;
//   }
//   return sum;
// };

// Array.prototype.push = function () {
//   console.log("hi");
// };

// let arr1 = [100, 200, 300];
// console.log(arr.sum());
// console.log(arr1.sum());

/* 3. Object Deep Comparison: Write a function that compares two objects deeply and returns true if they are equal, and false otherwise.
The function should handle nested objects and arrays. For example, given the objects { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } },
the function should return true.
*/

let obj1 = { a: 1, b: { c: 2, d: { e: 5, f: { g: 6 } } } };
let obj2 = { a: 1, b: { c: 2, d: { e: 6 } } };
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// let jsonObj1 = JSON.stringify(obj1);
// console.log(typeof jsonObj1);
// let parsedObj1 = JSON.parse(jsonObj1);
// console.log(typeof parsedObj1);

const deepEqual = (obj1, obj2) => {
  let objKeys1 = Object.keys(obj1); // ['a', 'b']
  let objKeys2 = Object.keys(obj2); // ['a', 'b']

  if (objKeys1.length !== objKeys2.length) return false;

  for (let key of objKeys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (isObject(value1) && isObject(value2)) {
      if (!deepEqual(value1, value2)) return false;
    } else if (value1 !== value2) return false;
  }

  return true;
};

const isObject = (obj) => {
  return obj !== null && typeof obj === "object";
};

console.log(deepEqual(obj1, obj2));
