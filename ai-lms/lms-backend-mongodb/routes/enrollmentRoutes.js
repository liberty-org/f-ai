const express = require('express');
const router = express.Router();
const Enrollment = require('../models/enrollmentModel');

router.post('/', async (req, res) => {
  const enrollment = await Enrollment.create(req.body);
  res.send(enrollment);
});

router.get('/', async (req, res) => {
  const enrollments = await Enrollment.find().populate('courseId');
  res.send(enrollments);
});

module.exports = router;
