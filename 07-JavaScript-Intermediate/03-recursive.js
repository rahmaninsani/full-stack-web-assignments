// Soal - 01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
  return arr.length === 0 ? 0 : arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal - 02
const avg1 = sumOfArray(arr1) / arr1.length; // 5
const avg2 = sumOfArray(arr2) / arr2.length; // 7.2

function countAboveAvg(arr, avg) {
  if (arr.length === 0) {
    return;
  }

  if (arr[0] <= avg) {
    arr.shift();
    countAboveAvg(arr, avg);
  } else {
    countAboveAvg(arr.slice(1), avg);
  }

  return arr.length;
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Soal - 03
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
  if (arr.length === 0) {
    return "Angka tidak ditemukan";
  }

  if (arr[arr.length - 1] === num) {
    return `Angka ditemukan pada index: ${arr.length - 1}`;
  }

  return searchInArray(arr.slice(0, -1), num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// Soal - 04
function trianglePattern(a, b) {
  if (a === 0) {
    return;
  }

  let whitespace = "";

  for (let i = 0; i < b; i++) {
    if (i < a - 1) {
      whitespace += " ";
    } else {
      whitespace += String.fromCharCode(64 + (b - a + (i - a) + 2));
    }
  }
  console.log(whitespace);
  trianglePattern(a - 1, b);
}

trianglePattern(5, 5);
