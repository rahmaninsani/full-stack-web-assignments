1. Apa perbedaan antara static web server dan dynamic web server?

   Static Web Server merupakan komputer (hardware) dengan server HTTP (software) yang mengirimkan file yang dihosting secara statis atau dengan kata lain konten yang ditampilkan itu tidak berubah-ubah.  
   Dynamic Web Server juga memiliki fungsi yang sama seperti Static Web Server, bedanya ialah biasanya dilengkapi dengan Database Server sehingga konten yang tampil pada aplikasi bisa berubah-ubah sesuai dengan kondisi yang ditentukan.
   <br>

2. Jelaskan arsitektur static site dan dynamic site!

   a. Dalam arsitektur Static Site, web server akan menerima permintaan (Request) dari client melalui protokol HTTP dengan GET Method. Setelah itu server akan mengembalikan (Response) file-file yang diminta oleh client seperti halaman website yang terdiri dari HTML, CSS, dan JavaScript yang kontennya statis melalui HTTP kembali.  
   b. Sedangkan di dalam arsitektur Dynamic Site terdapat tambahan yaitu web application dan database. Web Application akan memeriksa request dari client seperti URL, HTTP Method, Cookies, Authentication, Authorization, dan lain-lain sebagai kondisi yang akan menentukan konten seperti apa yang harus diberikan kepada client. Adapun sumber data yang ditampilkan biasanya berasal dari Database Server.  
   <br>

3. Apa saja yang dapat kita buat pada sisi server?

   a. Media penyimpanan dan pengiriman informasi yang efisien, karena setiap informasi dapat dikelola dengan terstruktur dan dinamis.  
   b. Data-data tertentu yang berada di server bisa diolah dan dianalisis agar memberikan User Experience yang lebih baik kepada pengguna saat menggunakan aplikasi kita.  
   c. Mengontrol hak akses setiap konten yang ada di server sesuai role pengguna yang mengaksesnya sehingga lebih aman dan terjaga.
   <br>

4. Mohon jelaskan apa itu RESTful?

   RESTful API atau REST API merupakan penerapan dari API (Application Programming Interface). Sedangkan REST (Representional State Transfer) merupakan sebuah arsitektur metode komunikasi yang menggunakan protokol HTTP untuk pertukaran data. Dengan tujuannya adalah untuk menjadikan sistem memiliki performa yang baik, cepat dan mudah untuk di kembangkan (scale) terutama dalam pertukaran dan komunikasi data.
   <br>

5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)?

   a. GET, berfungsi untuk membaca data/resource dari REST server.  
    b. POST, berfungsi untuk membuat sebuah data/resource baru di REST server.  
    c. PUT, berfungsi untuk memperbaharui data/resource di REST server.  
    d. DELETE, berfungsi untuk menghapus data/resource dari REST server.  
   e. OPTIONS, berfungsi untuk mendapatkan operasi yang disupport pada resource dari REST server.  
   <br>

6. Apa fungsi dari Response Codes?  
   HTTP Response Codes merupakan kode standarisasi yang berfungsi menginformasikan hasil Request kepada client apakah itu berhasil, gagal, tidak diizinkan, error, atau tidak ditemukan.
