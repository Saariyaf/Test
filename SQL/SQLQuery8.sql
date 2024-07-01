ALTER TABLE UserLogins
ADD CONSTRAINT FK_UserLogins_Employees
FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID);
