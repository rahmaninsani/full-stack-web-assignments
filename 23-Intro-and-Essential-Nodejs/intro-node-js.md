1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?

   Node.js merupakan Runtime Environment untuk bahasa pemrograman JavaScript yang bersifat open source dan cross platform yang berjalan di V8 Engine.
   V8 Engine adalah engine JavaScript dan WebAssembly dari Google untuk proyek Chromium/Chrome yang bersifat open source dan ditulis dalam bahasa pemrograman C++.  
   Perbedaannya dengan JavaScript yaitu, JavaScript merupakan bahasa pemrograman sedangkan Node.js merupakan "wadah" atau "tempat" JavaScript berjalan di luar browser sehingga bisa langsung berinteraksi langsung dengan Sistem Operasi, hardware, jaringan komputer, dan lain sebagainya.  
   <br>

2. Mohon jelaskan arsitektur dari Node.js?

   Arsitektur Node.js yaitu Single Thread dengan Event Loop serta Asynchronous dan Non-Blocking. Artinya Node.js hanya menggunakan pemroses tunggal (single thread), namun dengan fitur asynchronous dan non-blocking membuat setiap prosesnya dapat dieksekusi tanpa saling tunggu. Adapun fitur event loop/queue berfungsi sebagai penampung ketika terdapat perintah baru yang akan dieksekusi. Dengan arsitektur demikian membuat Node.js menjadi efisien, ringan, scalable, dan tampak seperti menggunakan multi-thread.  
   <br>

3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?

   a. Built-in Module merupakan modules atau fitur bawaan dari JavaScript/Node.js itu sendiri.  
   b. External Module merupakan modules atau fitur yang dibuat oleh developer lain dan dapat kita gunakan.  
   c. Custom Module merupakan modules yang kita buat atau sesuaikan agar sesuai dengan kebutuhan pada proyek yang dibangun.  
   <br>

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

   a. Contoh Built-in Module adalah "console", "http", dan "url".  
   b. Contoh External Module adalah "express", "mysql2", dan "sequelize".  
   c. Contoh Custom Module adalah sebuah function yang kita buat untuk melakukan penjumlahan angka dari array of number.  
   <br>
