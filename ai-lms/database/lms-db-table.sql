CREATE DATABASE lms_db;

USE lms_db;

CREATE TABLE users ( user_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE, password VARCHAR(255) );

CREATE TABLE courses ( course_id INT AUTO_INCREMENT PRIMARY KEY, course_name VARCHAR(100), description TEXT );

CREATE TABLE enrollments ( enrollment_id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, course_id INT, enrollment_date DATE, FOREIGN KEY (user_id) REFERENCES users(user_id), FOREIGN KEY (course_id) REFERENCES courses(course_id) );

CREATE TABLE assessments ( assessment_id INT AUTO_INCREMENT PRIMARY KEY, course_id INT, title VARCHAR(100), max_score INT, FOREIGN KEY (course_id) REFERENCES courses(course_id) );

CREATE TABLE instructors ( instructor_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) UNIQUE );