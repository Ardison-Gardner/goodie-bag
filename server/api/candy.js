const router = require('express').Router();
const { Candy } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await Candy.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
