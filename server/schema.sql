CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  messagetext VARCHAR(100) NOT NULL,
  userid INTEGER NOT NULL REFERENCES users(id),
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

