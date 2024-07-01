INSERT INTO UserLogins (Username, Password, Role, LoginTime, LogoutTime)
VALUES ('admin', 'adminpassword', 'admin', GETDATE(), NULL);
ALTER TABLE UserLogins
ALTER COLUMN LoginTime DATETIME NULL;
INSERT INTO UserLogins (Username, Password, Role)
VALUES ('admin', 'adminpassword', 'admin');
