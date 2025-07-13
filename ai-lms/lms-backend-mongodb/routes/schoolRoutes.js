const express = require('express');
const router = express.Router();
const School = require('../models/schoolModel');

router.post('/', async (req, res) => {
  const school = await School.create(req.body);
  res.send(school);
});

router.get('/', async (req, res) => {
  const schools = await School.find();
  res.send(schools);
});

module.exports = router;
