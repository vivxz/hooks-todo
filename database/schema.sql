DROP DATABASE IF EXISTS hooksTodo;

CREATE DATABASE hooksTodo;

USE hooksTodo;

CREATE TABLE todos (
  id INT AUTO_INCREMENT,
  task VARCHAR(225) NOT NULL,
  completed BOOLEAN,
  PRIMARY KEY (id)
);

INSERT INTO todos (id, task, completed) VALUES (1, 'complete this app', false);
INSERT INTO todos (id, task, completed) VALUES (2, 'pineapples', false);
INSERT INTO todos (id, task, completed) VALUES (3, 'read interview cake', false);
INSERT INTO todos (id, task, completed) VALUES (4, 'pineapples', false);
INSERT INTO todos (id, task, completed) VALUES (5, 'kill zombies', false);
INSERT INTO todos (id, task, completed) VALUES (6, 'pineapples', false);
INSERT INTO todos (id, task, completed) VALUES (7, 'sleep', false);
