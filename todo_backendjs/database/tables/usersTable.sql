USE TodoDB;


CREATE TABLE usersTable(
id VARCHAR(100),
email VARCHAR(150),
password VARCHAR(500),
role VARCHAR(30) DEFAULT 'user',
issent BIT DEFAULT 0
)