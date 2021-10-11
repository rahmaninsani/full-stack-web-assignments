// Soal - 01
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
/* 
Jawaban : Program akan menampilkan isi dari method yang tersedia di dalam const obj. Method fun1 menampilkan "fun1" dan hasil dari keyword this. Sedangkan fun2 menampilkan "fun2" dan hasil dari keyword this.
*/

// 2. Apakah hasil dari fun1 dan fun2 itu sama?
/* 
Jawaban : Berbeda. 
Hasil fun1 -> fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
Hasil fun2 -> fun2 {}
*/

// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
/*
Jawaban : Keyword this pada fun1 akan mengembalikan property/method kepunyaan object obj yaitu fun1 dan fun2. Hal tersebut karena fun1 menggunakan deklarasi anonymous function yang mana bisa mengakses global property/method milik parent-nya. 
Sedangkan keyword this pada fun2 tidak mengembalikan property/method kepunyaan object obj bahkan tidak mengembalikan apapun. Hal tersebut karena fun2 menggunakan deklarasi arrow function yang mana tidak bisa mengakses global property/method milik parent-nya. 
*/

const obj = {
  fun1: function () {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  },
};

obj.fun1();
obj.fun2();

// Soal - 02
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
/*
Jawaban : Encapsulation adalah cara untuk membatasi akses langsung ke properti atau method dari sebuah objek. Kita membutuhkan encapsulation karena agar data atau property tertentu tidak bisa akses dan diubah oleh entitas luar (user). Property yang dimaksud adalah property sensitif yang harusnya tidak bisa diakses oleh user atau property yang jika diubah akan mengakibatkan anomali data. 
*/

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
/*
Jawaban : Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah proses (method) dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut. Kita membutuhkan abstraction karena user tidak memerlukan bagaimana sebuah proses dilakukan, yang user perlukan hanyalah hasil
*/

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
/*
Jawaban : Inheritance dalam OOP adalah sebuah proses dimana sebuah class dapat mewariskan property dan method yang dimilikinya ke class lain atau childnya. Kita membutuhkan inheritance agar tidak perlu menulis property/method yang sama di banyak kelas, cukup turunkan dan lakukan penyesuaian jika diperlukan.
*/

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/*
Jawaban : Polymorphism merupakan kemampuan dari suatu class untuk memiliki banyak bentuk tetapi dengan nama yang sama. Bentuk disini merupakan method yang memiliki nama yang sama tetapi dengan parameter yang berbeda-beda. Kita membutuhkannya karena agar kita dapat membuat sebuah method/proses dengan nama yang sama tetapi parameternya bisa beraneka ragam atau sesuai kondisi yang ditentukan.
*/

// Soal - 03
class Phone {
  #brand = "";
  #storage = 0;
  #ram = 0;

  constructor(brand, storage, ram) {
    this.#brand = brand;
    this.#storage = storage;
    this.#ram = ram;
  }

  setBrandName(brand) {
    this.#brand = brand;
  }

  getBrandName() {
    return this.#brand;
  }

  setSpecification(storage, ram) {
    this.#storage = storage;
    this.#ram = ram;
  }

  printSpecification() {
    console.log(`Ponsel ini memiliki storage: ${this.#storage}GB dan RAM: ${this.#ram}GB`);
  }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co");
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// Soal - 04
class Course {
  constructor(subject, quota, minAttendance) {
    this.subject = subject;
    this.quota = quota;
    this.minAttendance = minAttendance;
  }

  getSubject() {
    return this.subject;
  }

  getAttendance() {
    return this.minAttendance;
  }

  decreaseQuota() {
    return this.quota--;
  }
}

class CourseOffering extends Course {
  constructor(course, grade = 0, attendance = 0) {
    super(course.subject, course.quota, course.minAttendance);
    this.grade = grade;
    this.attendance = attendance;
  }
}

class Student {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.courseOfferings = [];
  }

  takeNewCourse(course) {
    const courseSubject = course.getSubject();

    for (let i = 0; i < this.courseOfferings.length; i++) {
      if (courseSubject === this.courseOfferings[i].subject) {
        return;
      }
    }

    course.decreaseQuota();
    this.courseOfferings.push(new CourseOffering(course));
  }

  courseAttendance(course) {
    const courseSubject = course.getSubject();

    for (let i = 0; i < this.courseOfferings.length; i++) {
      if (courseSubject === this.courseOfferings[i].subject) {
        this.courseOfferings[i].attendance++;
        return;
      }
    }
  }

  takeATest(course) {
    const courseSubject = course.getSubject();

    let index = null;

    for (let i = 0; i < this.courseOfferings.length; i++) {
      if (courseSubject === this.courseOfferings[i].subject) {
        index = i;
        break;
      }
    }

    if (index === null) return;

    if (this.courseOfferings[index].attendance >= course.minAttendance) {
      const grade = Math.ceil(Math.random() * 100);
      this.courseOfferings[index].grade = grade;
    } else {
      console.log("Please fill your absen");
    }
  }
}
const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson);
