CREATE DATABASE TodoDB

USE TodoDB;

CREATE TABLE TodosTable(
id VARCHAR(100),
title VARCHAR(150),
description VARCHAR(500),
deadline DATE,
completed BIT DEFAULT 0
)




DROP TABLE TodosTable