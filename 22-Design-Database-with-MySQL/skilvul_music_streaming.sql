/*
Nama: Rahman Insani
Kelompok: 20 ASEAN Youth Organization
Mentor: Thoriq

Technical Assignment 22-Design-Database-with-MySQL
*/

# Membuat database "skilvul_music_streaming"
CREATE DATABASE IF NOT EXISTS skilvul_music_streaming;

# Melihat daftar database yang telah dibuat
SHOW DATABASES;

# Menggunakan database "skilvul_music_streaming"
USE skilvul_music_streaming;

# Membuat tabel "users"
CREATE TABLE IF NOT EXISTS users
(
    user_id  INT          NOT NULL AUTO_INCREMENT,
    name     VARCHAR(40)  NOT NULL,
    email    VARCHAR(255) NOT NULL UNIQUE,
    password TEXT         NOT NULL,
    PRIMARY KEY (user_id)
);

# Membuat tabel "singers"
CREATE TABLE IF NOT EXISTS singers
(
    singer_id INT         NOT NULL AUTO_INCREMENT,
    name      VARCHAR(40) NOT NULL,
    PRIMARY KEY (singer_id)
);

# Membuat tabel "albums"
CREATE TABLE IF NOT EXISTS albums
(
    album_id  INT          NOT NULL AUTO_INCREMENT,
    name      VARCHAR(255) NOT NULL,
    singer_id INT          NOT NULL,
    PRIMARY KEY (album_id),
    CONSTRAINT `albums_singers_ibfk_1` FOREIGN KEY (singer_id) REFERENCES singers (singer_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

# Membuat tabel "tracks"
CREATE TABLE IF NOT EXISTS tracks
(
    track_id  INT          NOT NULL AUTO_INCREMENT,
    title     VARCHAR(255) NOT NULL,
    singer_id INT          NOT NULL,
    album_id  INT          NOT NULL,
    PRIMARY KEY (track_id),
    CONSTRAINT `tracks_singers_ibfk_1` FOREIGN KEY (singer_id) REFERENCES singers (singer_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT `tracks_albums_ibfk_2` FOREIGN KEY (album_id) REFERENCES albums (album_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

# Membuat tabel "playlist"
CREATE TABLE IF NOT EXISTS playlist
(
    playlist_id INT          NOT NULL AUTO_INCREMENT,
    name        VARCHAR(255) NOT NULL,
    user_id     INT          NOT NULL,
    PRIMARY KEY (playlist_id),
    CONSTRAINT `playlist_users_ibfk_1` FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

# Membuat tabel "tracks_playlist"
CREATE TABLE IF NOT EXISTS tracks_playlist
(
    track_id    INT NOT NULL,
    playlist_id INT NOT NULL,
    CONSTRAINT `tracks_playlist_tracks_ibfk_1` FOREIGN KEY (track_id) REFERENCES tracks (track_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT `tracks_playlist_playlist_ibfk_2` FOREIGN KEY (playlist_id) REFERENCES playlist (playlist_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

# Melihat daftar tabel
SHOW TABLES;