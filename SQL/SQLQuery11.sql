INSERT INTO dbo.UserLogins (Username, Password, LoginTime, EmployeeID) 
VALUES ('Citty', 'password123', GETDATE(), 1);  -- Assuming EmployeeID is 1 for Citty
SELECT * FROM dbo.UserLogins WHERE Username = 'Citty' AND Password = 'password123';
SELECT * FROM dbo.UserLogins WHERE Username = 'Citty';
ALTER TABLE UserLogins ADD Role NVARCHAR(50);
