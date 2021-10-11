// Soal - 01
const person = {
  name: "person A",
  age: 100,
  favDrinks: ["coffee", "jamu temulawak", "tea"],
  greeting: function (name) {
    return `Hello, ${name}`;
  },
};

/// EDIT HERE

person.name = "Rahman Insani";
person.favDrinks[1] = "tap water";

/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));

// Soal - 02
function getObjectValue(obj, path) {
  if (path === undefined) return obj;

  path = path.split(".");

  const nestedVal = path.reduce((prev, curr) => {
    return prev[curr];
  }, obj);

  return nestedVal ?? null;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1,
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5,
    },
  },
};

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// Soal - 03
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
  let objResult = {
    btc: 0,
    doge: 0,
    eth: 0,
  };

  items.reduce((accumulator, currentValue) => {
    for (let key of Object.keys(objResult)) {
      objResult[key] = accumulator[key] + (currentValue[key].sell - currentValue[key].buy);
    }
    return objResult;
  }, objResult);

  return objResult;
};

console.log(calculateIncome(items));
