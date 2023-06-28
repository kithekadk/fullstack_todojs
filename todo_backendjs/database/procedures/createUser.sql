CREATE PROCEDURE createUser(@id VARCHAR(100) , @email VARCHAR(150) , @password VARCHAR(500))
AS
BEGIN

INSERT INTO usersTable(id, email,password) VALUES(@id,@email,@password)
END