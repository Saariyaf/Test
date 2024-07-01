USE [webw];
GO
ALTER TABLE UserLogins
ALTER COLUMN LoginTime DATETIME NULL;
GO
USE [webw];
GO
INSERT INTO UserLogins (Username, Password, Role, LoginTime, LogoutTime)
VALUES ('admin', 'adminpassword', 'admin', GETDATE(), NULL);
GO
SELECT * FROM UserLogins WHERE Username = 'admin';
