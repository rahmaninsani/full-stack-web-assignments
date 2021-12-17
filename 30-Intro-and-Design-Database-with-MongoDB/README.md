1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi _Skiljek_ dan relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:

- **Full Name**
- **Email**
- **Phone Number**

> **Relasi: One to One - Embedded**

> **Skema Relasi:**

```js

{
  _id: "<ObjectId1>",
  full_name: "Bob",
  contact: {
    email: "bob@mail.example.com",
    phone: "08123456789"
  }
}

```

2. Buatlah skema untuk kebutuhan data alamat pengguna _SkilShop_ dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:

- **Full Name**
- **Phone Number**
- **Address (Max 2)**

> **Relasi: One to Few/Many - Embedded**  
> Menggunakan One to Few/Many Relationship dikarenakan seorang pengguna bisa memiliki lebih dari satu alamat maksimal dua. Lalu digunakan paradigma Embedded dikarenakan alamat tersebut pasti mempunyai pemilik atau memerlukan \_id pengguna. Sehingga digunakan array of object dalam satu document di dalam collection yang sama.

> **Skema Relasi:**

```js

{
  _id: "<ObjectId1>",
  full_name: "Bob",
  phone: "08123456789",
  addresses: [
    {
      name: "Villa",
      street: "Jl. Melati No. 12",
      city: "Bandung"
    },
    {
      name: "Home",
      street: "Jl. Cendrawasih No. 23",
      city: "Jakarta"
    }
  ]
}

```

3. Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi _SkilShop_. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Contoh data yang dibutuhkan adalah:

- **Product**

  - Product Name: Kaos Polos
  - Brand Name: SkilShirt

- **Varian Pertama**

  - Varian Name 1: Kaos Polos Hitam
  - Color: Hitam
  - Quantity: 12
  - Price: Rp 99.000

- **Varian Kedua**
  - Varian Name 2: Kaos Polos Navy
  - Color: Navy
  - Quantity: 10
  - Price: Rp 99.000

> **Relasi: One to Many - Reference**  
> Menggunakan One to Many Relationship dikarenakan sebuah product bisa memiliki banyak variant. Lalu digunakan paradigma Reference pada document di collection variants yang merujuk ke document di collection products.

> **Skema Relasi:**

```js

// products

{
  _id: "kaos",
  name: "Kaos Polos",
  brand: "SkilShirt"
}

```

```js

// variants

{
  _id: "variant1",
  product_id: "kaos",
  name: "Kaos Polos Hitam",
  color: "Hitam",
  quantity: 12,
  price: 99.000
}

{
  _id: "variant2",
  product_id: "kaos",
  name: "Kaos Polos Navy",
  color: "Navy",
  quantity: 10,
  price: 99.000
}

```

4. Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama _SkilFlix_. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Contoh Data yang dibutuhkan:

- **Cinemas**

  - _First Cinema_

    - Cinema Name: CGF
    - Films:
      - Venom 2
      - Spiderman No Way Home
    - Location: Pondok Indah Mall

  - _Second Cinema_

    - Cinema Name: Cinema31
    - Films:
      - Venom 2
      - Spiderman No Way Home
    - Location: Mall Kelapa Gading

> **Relasi: Many to Many - Reference**

> Menggunakan Many to Many Relationship dikarenakan satu cinema bisa memutar banyak film dan satu film bisa diputar di banyak cinema. Lalu digunakan paradigma Reference di collection cinemas dan di collection films agar saling terhubung.

> **Skema Relasi:**

```js

// cinemas

{
  _id: "cinema1",
  name: "CGF",
  location: "Pondok Indah Mall",
  films: ["film1", "film2"]
}

{
  _id: "cinema2",
  name: "Cinema31",
  location: "Mall Kelapa Gading",
  films: ["film1", "film2"]
}

```

```js

// films

{
  _id: "film1",
  name: "Venom 2",
  cinemas: ["cinema1", "cinema2"]
}

{
  _id: "film2",
  name: "Spiderman No Way Home",
  cinemas: ["cinema1", "cinema2"]
}

```
