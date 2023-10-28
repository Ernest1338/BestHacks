# BACKEND Kicior Blancior


# DB
```sql
CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    password TEXT,
    phone_number VARCHAR(15),
    description TEXT,
    cv TEXT,
    img LONGBLOB
);

CREATE TABLE joboffers(
    id INT NOT NULL PRIMARY KEY,
    employer varchar(255),
    description varchar(1024),
    employer_logo varchar(255),
    salary_min INT,
    salary_max INT
);
```

inserts
```sql
INSERT INTO users (id, name, surname, email, password, phone_number, description, cv, img)
VALUES
    (1, 'John', 'Doe', 'john@example.com', 'hashed_password', '123-456-7890', 'A software developer', 'cv', NULL),
    (2, 'Jane', 'Smith', 'jane@example.com', 'another_password', '555-123-4567', 'Web Developer', 'cv', NULL),
    (3, 'Alice', 'Johnson', 'alice@example.com', 'secure_password', '987-654-3210', NULL, 'cv', NULL),
    (4, 'Bob', 'Williams', 'bob@example.com', 'strong_password', NULL, NULL, 'cv', NULL),
    (5, 'Eva', 'Brown', 'eva@example.com', 'complex_password', '111-222-3333', 'Data Analyst', 'cv', NULL);

INSERT INTO joboffers (id, employer, description, employer_logo, salary_min, salary_max)
VALUES
  (1, 'ABC Inc.', 'Software Engineer', 'abc_logo.png', 60000, 80000),
  (2, 'XYZ Corporation', 'Data Analyst', 'xyz_logo.png', 50000, 70000),
  (3, 'Tech Solutions Ltd', 'UX Designer', 'techsolutions_logo.png', 55000, 75000),
  (4, 'Global Innovations', 'Marketing Manager', 'globalinnovations_logo.png', 70000, 90000),
  (5, 'Acme Corporation', 'Sales Representative', 'acme_logo.png', 45000, 60000);
```

drops
```sql
DROP TABLE users;
DROP TABLE joboffers;
```
