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
    description varchar(10240),
    employer_logo varchar(255),
    job_category varchar(255),
    stationary_or_remote varchar(255),
    location varchar(255),
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

INSERT INTO joboffers (id, employer, description, employer_logo, job_category, stationary_or_remote, location, salary_min, salary_max)
VALUES
  (1, 'Tech Innovations Inc.', 'Senior Software Engineer with expertise in AI and Machine Learning', 'techinnovations_logo.png', 'Information Technology', 'Remote', 'Global', 80000, 100000),
  (2, 'Data Analytics Co.', 'Data Scientist with strong analytical skills', 'dataanalytics_logo.png', 'Data Science', 'Stationary', 'New York', 70000, 90000),
  (3, 'Design Creations Ltd', 'Graphic Designer for creative branding projects', 'designcreations_logo.png', 'Design', 'Stationary', 'Los Angeles', 55000, 75000),
  (4, 'Healthcare Solutions', 'Medical Research Scientist for vaccine development', 'healthcare_logo.png', 'Medical Research', 'Remote', 'Global', 90000, 120000),
  (5, 'Financial Consulting Group', 'Financial Analyst for investment planning', 'financialconsulting_logo.png', 'Finance', 'Stationary', 'Chicago', 60000, 80000);
```

drops
```sql
DROP TABLE users;
DROP TABLE joboffers;
```
