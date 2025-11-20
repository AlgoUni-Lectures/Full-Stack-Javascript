let string = '{"name: "temo"}';

try {
  console.log(JSON.parse(string));
} catch (error) {
  console.log("დაფიქსირდა შეცდომა", error.message);
}

console.log("hello");
