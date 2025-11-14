const person1 = {
  name: "Temo",
  age: 21,
  friend: {
    name: "Temo",
  },
};

const person2 = {
  name: "Temo",
  age: 21,
  friend: {
    name: "Temo",
  },
};

function isDeepEqual(obj1, obj2) {
  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (let key of objKeys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (isObject(value1) && isObject(value2)) {
      if (!isDeepEqual(value1, value2)) return false;
    } else if (value1 !== value2) return false;
  }

  return true;
}

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

console.log(isDeepEqual(person1, person2));
