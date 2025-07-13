const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel');

router.post('/', async (req, res) => {
  const course = await Course.create(req.body);
  res.send(course);
});

router.get('/', async (req, res) => {
  const courses = await Course.find().populate('schoolId');
  res.send(courses);
});

module.exports = router;
