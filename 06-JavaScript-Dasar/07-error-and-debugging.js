/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/* 
a. Type Error
Akan muncul jika dilakukan operasi pada tipe data yang salah.

Contoh:
let num = 10;
num.toUpperCase();

TypeError akan muncul dikarenakan memanggil built-in function toUpperCase() pada variabel num yang nilainya bertipe data Number. Sedangkan function toUpperCase() merupakan function untuk memanipulasi nilai bertipe data String.

b. Reference Error
Akan muncul jika referensi variabel/nilai yang dituju atau diakses tidak ada.

Contoh:
console.log(student);

ReferenceError akan muncul karena variabel student tidak terdeklarasi atau terinisialisasi sebelumnya.

c. Range Error
Akan muncul jika nilai yang diakses tidak ada atau berada di luar rentang nilai yang tersedia atau diijinkan.

Contoh:
let num = 10;
num.toFixed(-2);

RangeError akan muncul karena argumen yang dimasukkan ke dalam built-in function toFixed() adalah nilai negatif, sedangkan nilai yang diminta adalah dalam range 0 sampai 100.

d. Syntax Error
Akan muncul jika menuliskan baris kode (syntax) yang tidak sesuai atau tidak dapat dibaca oleh Interpreter JavaScript, misalnya typo. 

Contoh:
lets name = "Rahman Insani";

SyntaxError akan muncul karena identifier lets tidak dikenali, harusnya let

*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/* 

a. console.log(salaryWithVar);
Walaupun baris kode ini dieksekusi sebelum pendeklarasian atau penginisialisasian variabel yang digunakannya, tetapi identifier yang digunakan adalah var. Sehingga akan menghasilkan undefined karena identifier var akan menyebabkan hoisting atau variabelnya terangkat ke atas.

b. console.log(salaryWithConst);
Akan memunculkan ReferenceError karena konstanta salaryWithConst dieksekusi sebelum konstanta tersebut dideklarasi atau diinisialisasi terlebih dahulu sehingga tidak ditemukan referensi atau rujukan dari konstanta tersebut.

*/
console.log(salaryWithVar);
console.log(salaryWithConst);

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
