SELECT * FROM UserLogins WHERE Username = 'testuser' AND Password = 'password';
INSERT INTO UserLogins (Username, Password, LoginTime, LogoutTime)
VALUES ('testuser', 'password', '2024-06-27T12:00:00Z', '2024-06-27T12:30:00Z');
