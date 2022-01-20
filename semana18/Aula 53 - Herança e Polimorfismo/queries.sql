-- Queries executadas pelo workbench

CREATE TABLE `character` (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    gender ENUM ("MALE", "FEMALE", "OTHER"),
    description VARCHAR(255) DEFAULT "No description provided"
);


INSERT INTO `character` (name, gender) 
VALUES
	("Storm", "FEMALE"),
   ("Colossus","MALE");


INSERT INTO `character` (name, gender, description) 
VALUES
	("Deadpool", "OTHER", "Sexy motherf***");
    


SELECT * FROM `character`;
