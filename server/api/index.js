'use strict'

const router = require('express').Router()
const { Candy } = require('../db/database');

router.use('/candies', require('./candies'));

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
