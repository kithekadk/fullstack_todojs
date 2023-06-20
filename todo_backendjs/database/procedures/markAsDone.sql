CREATE OR ALTER PROCEDURE markAsDone(@id VARCHAR(100))
AS
BEGIN

Update TodosTable SET completed = 1 WHERE id=@id
END