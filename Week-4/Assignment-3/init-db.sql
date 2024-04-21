CREATE DATABASE assignment;
USE assignment;

CREATE TABLE user (
    user_id integer PRIMARY KEY AUTO_INCREMENT,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_creation_date TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO user (user_email, user_password) VALUES ("honey_badger@gmail.com", "goodpass1111"), ("goofy_oyster@yandex.ru", "321hihi");