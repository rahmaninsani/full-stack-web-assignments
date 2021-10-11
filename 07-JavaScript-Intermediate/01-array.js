// Soal - 01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
  return arr.map((_, index) => arr[arr.length - 1 - index]);
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// Soal - 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  const avg = arr.reduce((prev, curr) => prev + curr) / arr.length;
  const result = arr.filter((value) => value > avg).length;

  return result;
}

console.log(getAverage(arr1));
console.log(getAverage(arr2));

// Soal - 03
const arr = [[10], [9, 7, 1], [2, 8]];

function searchInArray(arr, num) {
  arr = [].concat(...arr);
  const result = arr.findIndex((value) => value == num);

  return result >= 0 ? result : null;
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
