/*
Nama: Rahman Insani
Kelompok: 20 ASEAN Youth Organization
Mentor: Thoriq

Technical Assignment 20-MySQL-Basic
*/

# Show Database
SHOW DATABASES;

# Create Database
CREATE DATABASE IF NOT EXISTS bookstore;

# Use Database
USE bookstore;

# Show All Table
SHOW TABLES;

# Create Table "books"
CREATE TABLE IF NOT EXISTS books
(
    id            INT          NOT NULL AUTO_INCREMENT,
    author1       VARCHAR(100) NOT NULL,
    author2       VARCHAR(100) NULL,
    author3       VARCHAR(100) NULL,
    title         VARCHAR(100) NULL,
    description   TEXT         NULL,
    place_sell    CHAR(3)      NULL,
    stock         INT      DEFAULT 0,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

# Add Column "price" and "status"
ALTER TABLE books
    ADD COLUMN price INT DEFAULT 0;

ALTER TABLE books
    ADD COLUMN status ENUM ('available', 'out of stock', 'limited');

# Drop Column "place_sell"
ALTER TABLE books
    DROP COLUMN place_sell;

# Insert Data
INSERT INTO books(author1, author2, author3, title, description, stock, price, status)
VALUES ('Rahman A1', 'Rahman A2', 'Rahman A3', 'JavaScript', 'Belajar JavaScript Pemula', 20, 10000, 'available'),
       ('Rahman B1', 'Rahman B2', 'Rahman B3', 'Ruby', 'Belajar Ruby', 2, 15000, 'limited')
;

INSERT INTO books(author1, title, description, status)
VALUES ('Rahman', 'Golang', 'Belajar Golang Lanjutan', 'out of stock');

# SELECT All Rows
SELECT *
FROM books;

# SELECT with Alias
SELECT id      AS ID,
       author1 AS A1,
       author2 AS A2,
       author3 AS A3
FROM books;

# SELECT WHERE "id"
SELECT *
FROM books
WHERE id = 2;

# SELECT WHERE with AND
SELECT *
FROM books
WHERE stock > 0
  AND stock <= 20;

# SELECT WHERE with OR
SELECT *
FROM books
WHERE status = 'available'
   OR status = 'limited';

# SELECT WHERE with NOT
SELECT *
FROM books
WHERE NOT title = 'Javascript';

# ORDER BY "id" ASCENDING
SELECT *
FROM books
ORDER BY id ASC;

# SELECT All Rows LIMIT 2
SELECT *
FROM books
LIMIT 2;

# UPDATE ROW
UPDATE books
SET author1 = 'Rahman Insani',
    price   = 20000
WHERE id = 3;

# DELETE ROW
DELETE
FROM books
WHERE description = 'Belajar Ruby';