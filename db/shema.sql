CREATE DATABASE burgerapp_db;
USE burgerapp_db;

CREATE TABLE burger (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (250) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);