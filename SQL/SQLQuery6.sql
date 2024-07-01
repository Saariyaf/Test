ALTER TABLE Employees
ADD Username NVARCHAR(50),
    Password NVARCHAR(50);
-- Insert Citty
INSERT INTO Employees (Username, Password, Name, Description, Age, Gender)
VALUES ('citty', 'password123', 'Citty', 'Hobbies: Eat, Food: Tuna, Movie: The pet life', 6, 'Female');

-- Insert King
INSERT INTO Employees (Username, Password, Name, Description, Age, Gender)
VALUES ('king', 'password123', 'King', 'Hobbies: Sleep, Food: Whiskas, Movie: Stuart little', 8, 'Male');

-- Insert Saariya
INSERT INTO Employees (Username, Password, Name, Description, Age, Gender)
VALUES ('saariya', 'password123', 'Saariya', 'Hobbies: Annoy Citty & King, Food: Mandi, Movie: Kung fu panda', 22, 'Female');
SELECT * FROM Employees;
