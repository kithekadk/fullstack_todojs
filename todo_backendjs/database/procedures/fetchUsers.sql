CREATE OR ALTER PROCEDURE fetchUsers(@email VARCHAR(150))
AS 
BEGIN
    SELECT * FROM usersTable WHERE email=@email
END