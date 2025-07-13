SELECT * FROM users;

SELECT u.name, c.course_name FROM enrollments e JOIN users u ON e.user_id = u.user_id JOIN courses c ON e.course_id = c.course_id WHERE u.user_id = 1;

UPDATE users SET email = 'alice.new@example.com' WHERE user_id = 1;

DELETE FROM enrollments WHERE enrollment_id = 2;

INSERT INTO users (name, email, password) VALUES ('Daniel Rose', 'daniel@lms.com', 'daniel123');

SELECT course_id FROM courses WHERE course_name = 'CSS Design';

INSERT INTO enrollments (user_id, course_id, enrollment_date) VALUES ((SELECT user_id FROM users WHERE email = 'daniel@lms.com'), (SELECT course_id FROM courses WHERE course_name = 'CSS Design'), '2025-07-13');

SELECT users.name, users.email, courses.course_name
FROM users
JOIN enrollments ON users.user_id = enrollments.user_id
JOIN courses ON enrollments.course_id = courses.course_id;
