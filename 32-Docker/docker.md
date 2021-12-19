1. Jelaskan apa yang dimaksud dengan **Container** pada Docker!

   > Docker Container merupakan sebuah wadah untuk membungkus aplikasi mulai dari kode yang kita buat, libraries atau dependencies yang dibutuhkan oleh aplikasi, konfigurasi, sampai ke database. Aplikasi yang dibungkus dan berjalan di dalam Docker Container tidak terpengaruh oleh faktor luar karena terisolasi.

2. Jelaskan apa perbedaan antara konsep **Container** dengan **Virtual Machine**!

   > Docker Container hanya membungkus aplikasi beserta komponen pendukungnya saja tanpa memerlukan Guest OS karena Docker Container melakukan virtualisasi langsung pada Host OS di mana ia berjalan.  
   > Sedangkan Virtual Machine (VM) membutuhkan Guest OS untuk menjalankan aplikasi sehinggan VM lebih memakan banyak resource dan waktu untuk booting jika dibandingkan dengan Docker Container karena melakukan virtualisasi pada host hardware-nya.

3. Apa yang dimaksud dengan **Docker File**?

   > Docker File adalah blueprint yang memuat skrip yang terdiri dari serangkaian perintah yang akan dieksekusi secara otomatis dan berurutan untuk membuat Docker Image.

4. Apa yang dimaksud dengan **Docker Registry** ?

   > Docker Registry merupakan sebuah repository atau tempat penyimpanan Docker Image mirip seperti GitHub Repository yang bisa melakukan push (upload) dan pull (download).

5. Jelaskan bagaimana cara untuk menjalankan lebih dari satu Docker Container secara bersamaan dan saling terhubung!
   > Untuk dapat menjalankan Multi-Docker Container yang saling terhubung dan secara bersamaan, kita dapat menggunakan Docker Compose. Aplikasi-aplikasi yang hendak dibungkus menjadi satu didefinisikan di dalam file berekstensi yml atau yaml, umumnya bernama docker-compose.yaml. Di dalam file tersebut memuat informasi dan konfigurasi aplikasi-aplikasi yang akan dibungkus, seperti nama dan image aplikasi, port, environment, network, dan lain sebagainya. Setelah itu, kita dapat mengeksekusinya menggunakan perintah `docker-compose docker-compose-filename.yaml up`.
