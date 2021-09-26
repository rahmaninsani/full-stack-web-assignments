/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 1; i <= 100; i++) {
  if (i === 1) continue;

  let flag = 0;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      flag = 1;
      break;
    }
  }

  if (flag === 0) {
    console.log(i);
  }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop
let primeCounter = 0;
let fiftiethPrime;

let number = 2;

/// EDIT HERE
while (primeCounter != 50) {
  let flag = 0;

  for (let j = 2; j < number; j++) {
    if (number % j == 0) {
      flag = 1;
      break;
    }
  }

  if (flag == 0) {
    fiftiethPrime = number;
    primeCounter++;
  }

  number++;
}

console.log(fiftiethPrime);

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let angka = 0;

/// EDIT HERE
do {
  if (angka % 2 === 0) {
    angka++;
    continue;
  } else {
    oddCounter++;

    if (oddCounter === 50) {
      fiftiethOdd = angka;
    }
    angka++;
  }
} while (oddCounter < 50);

console.log(fiftiethOdd);
