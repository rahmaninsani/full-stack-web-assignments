/*
Nama: Rahman Insani
Kelompok: 20 ASEAN Youth Organization
Mentor: Thoriq

Technical Assignment 21-MySQL-Lanjutan
*/

# Membuat Database "skilvulbookstore"
CREATE DATABASE IF NOT EXISTS skilvulbookstore;

# Menggunakan Database "skilvulbookstore"
USE skilvulbookstore;

# Membuat Tabel "penerbit"
CREATE TABLE IF NOT EXISTS penerbit
(
    id   INT(10)     NOT NULL AUTO_INCREMENT,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL,
    PRIMARY KEY (id)
);

# Membuat Tabel "penulis"
CREATE TABLE IF NOT EXISTS penulis
(
    id   INT(10)     NOT NULL AUTO_INCREMENT,
    nama VARCHAR(50) NULL,
    kota VARCHAR(50) NULL,
    PRIMARY KEY (id)
);

# Membuat Tabel "buku"
CREATE TABLE IF NOT EXISTS buku
(
    id       INT(10)     NOT NULL AUTO_INCREMENT,
    ISBN     VARCHAR(50) NULL,
    judul    VARCHAR(50) NULL,
    penulis  INT(10)     NULL,
    penerbit INT(10)     NULL,
    harga    INT(10)     NULL,
    stock    INT(10)     NULL,
    PRIMARY KEY (id),
    CONSTRAINT `buku_penulis_ibfk1` FOREIGN KEY (penulis) REFERENCES penulis (id) ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT `buku_penerbit_ibfk2` FOREIGN KEY (penerbit) REFERENCES penerbit (id) ON UPDATE CASCADE ON DELETE RESTRICT

);

# Melihat Daftar Tabel
SHOW TABLES;

# Insert & Select Data ke/dari Tabel "penerbit"
DESC penerbit;
INSERT INTO penerbit(nama, kota)
VALUES ('Gramedia', 'Yogyakarta'),
       ('Informatika', 'Bandung'),
       ('Graha Ilmu', 'Tangerang'),
       ('Erlangga', 'Jakarta')
;
SELECT *
FROM penerbit;

# Insert & Select Data ke/dari Tabel "penulis"
DESC penulis;
INSERT INTO penulis(nama, kota)
VALUES ('Adam', 'Bandung'),
       ('Yanuar', 'Jakarta'),
       ('Dita', 'Surabaya'),
       ('Yohana', 'Medan'),
       ('Rendi', 'Semarang')
;
SELECT *
FROM penulis;

# Insert & Select Data dari/ke Tabel "buku"
DESC buku;
INSERT INTO buku(ISBN, judul, penulis, penerbit, harga, stock)
VALUES ('ISBN-001', 'Belajar JavaScript', 1, 2, 60000, 145),
       ('ISBN-002', 'Buku Masakan Nusantara', 5, 1, 32000, 79),
       ('ISBN-003', 'Perjalanan Anak Desa', 3, null, 78000, 7),
       ('ISBN-004', 'Matematika', 3, null, 120000, 56)
;
SELECT *
FROM buku;

# INNER JOIN tabel "buku" dan tabel "penerbit"
SELECT buku.id       AS 'ID Buku',
       buku.ISBN,
       buku.judul    AS 'Judul Buku',
       penerbit.id   AS 'ID Penerbit',
       penerbit.nama AS 'Nama Penerbit',
       penerbit.kota AS 'Kota Penerbit'
FROM buku
         INNER JOIN penerbit ON buku.penerbit = penerbit.id
;

# LEFT JOIN tabel "buku" dan tabel "penerbit
SELECT buku.id       AS 'ID Buku',
       buku.ISBN,
       buku.judul    AS 'Judul Buku',
       penerbit.id   AS 'ID Penerbit',
       penerbit.nama AS 'Nama Penerbit',
       penerbit.kota AS 'Kota Penerbit'
FROM buku
         LEFT JOIN penerbit on buku.penerbit = penerbit.id
;

# LEFT RIGHT tabel "buku" dan tabel "penerbit
SELECT buku.id       AS 'ID Buku',
       buku.ISBN,
       buku.judul    AS 'Judul Buku',
       penerbit.id   AS 'ID Penerbit',
       penerbit.nama AS 'Nama Penerbit',
       penerbit.kota AS 'Kota Penerbit'
FROM buku
         RIGHT JOIN penerbit ON buku.penerbit = penerbit.id
;

# MAX tabel buku, kolom "harga" dengan jumlah stock < 10
SELECT MAX(harga) AS 'Harga Max'
FROM buku
WHERE stock < 10;

# MIN tabel buku, kolom "harga"
SELECT MIN(harga) AS 'Harga Min'
FROM buku;

# COUNT data tabel buku dengan "harga" < 100000
SELECT harga, COUNT(id) AS 'Jumlah Buku'
FROM buku
WHERE harga < 100000
GROUP BY harga;
