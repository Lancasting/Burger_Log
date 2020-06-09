-- ### Schema
DROP DATABASE IF EXISTS burger_loggerdb;
CREATE DATABASE burger_loggerdb;
USE burger_loggerdb;

CREATE TABLE burgers
( 	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(250) NOT NULL,
 	devoured BOOLEAN DEFAULT false,
 	PRIMARY KEY (id)
);
