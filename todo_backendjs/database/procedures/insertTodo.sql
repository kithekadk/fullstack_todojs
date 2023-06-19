CREATE PROCEDURE insertTodo(@id VARCHAR(100) , @title VARCHAR(150) , @description VARCHAR(300) , @deadline date)
AS
BEGIN

INSERT INTO TodosTable(id, title,description,deadline) VALUES(@id,@title,@description, @deadline)
END