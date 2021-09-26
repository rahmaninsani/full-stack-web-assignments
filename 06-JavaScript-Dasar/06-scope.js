/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*

Dalam JavaScript terdapat tiga (3) jenis variable scope diantaranya, global scope, local scope, dan block scope.

1. Global scope, di mana variabel yang bertipe ini bisa diakses atau dimanipulasi dari seluruh bagian kode pada sebuah file JavaScript
2. Local scope, variabel bertipe ini hanya bisa diakses pada bagian atau blok tertentu. Misalnya di dalam sebuah function
3. Block scope, sama seperti local variabel yang hanya bisa diakses pada bagian atau blok tertentu, namun dengan ruang lingkup yang lebih kecil. Contohnya pada for loop

Contoh penggunaan dari ketiga scope tersebut adalah sebagai berikut:

*/

function sum(numbers) {
  let result = 0; // variabel result merupakan local scope

  // variabel i pada for loop di bawah ini merupakan block scope
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}

let numbers = [1, 2, 3]; // variabel numbers merupakan global scope
console.log(sum(numbers));

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/*
Yang tampil adalah Mariah.
Hal tersebut karena variabel name (dengan value John Watson) merupakan variabel dengan scope global. Sedangkan nilai yang diterima oleh function melalui parameter name merupakan varibel dengan scope local. Lalu nilai yang akan dikembalikan oleh function printFirstName(name) adalah hasil manipulasi dari local variable/parameter name. Manipulasi yang dilakukan adalah split() (memisahkan) string nama dengan delimiter/separator spasi yang akan menghasilkan array, kemudian diambil nilai array indeks ke 0 yaitu Mariah.
*/
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
