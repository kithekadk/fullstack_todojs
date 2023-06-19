CREATE OR ALTER PROCEDURE updateTodo(@id VARCHAR(100) , @title VARCHAR(150) , @description VARCHAR(500) , @deadline DATE)
AS
BEGIN

Update TodosTable SET title = @title ,description= @description, deadline = @deadline WHERE id=@id
END