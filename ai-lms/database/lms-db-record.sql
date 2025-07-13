INSERT INTO users (name, email, password) VALUES ('Alice Johnson', 'alice@example.com', 'alice123'), ('Bob Smith', 'bob@example.com', 'bob123'), ('Charlie Lee', 'charlie@example.com', 'charlie123'), ('Daniel Rose', 'daniel@lms.com', 'daniel123');

INSERT INTO courses (course_name, description) VALUES ('HTML Basics', 'Introduction to HTML and web structure.'), ('CSS Design', 'Learn how to style websites using CSS.'), ('MySQL for Beginners', 'Basic concepts of relational databases.');

INSERT INTO enrollments (user_id, course_id, enrollment_date) VALUES (1, 1, '2024-01-10'), (1, 3, '2024-02-05'), (2, 2, '2024-02-15'), (3, 1, '2024-03-01'), (4, 2, '2025-07-13');

INSERT INTO assessments (course_id, title, max_score) VALUES (1, 'HTML Quiz 1', 100), (2, 'CSS Midterm', 80), (3, 'MySQL Final Test', 90);

