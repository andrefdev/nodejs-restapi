USE companydb;

CREATE TABLE employee (
    ID INT(11) NOT NULL AUTO_INCREMENT,
    NAME VARCHAR(45) DEFAULT NULL,
    SALARY INT(5) DEFAULT NULL,
    PRIMARY KEY (ID)
)

DESCRIBE employee

INSERT INTO employee VALUES 
    (1, 'John', 1),
    (2, 'Jane', 122),
    (3, 'Jane', 100);