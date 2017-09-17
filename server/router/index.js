'use strict';
//THIS IS WHERE I SET UP DIRECTING MY ROUTES

const express = require('express');
const router = express.Router();
const patients = require('./patients');
const users = require('./users');

router.use('/patients', patients);
router.use('/users', users)

router.use(function (req, res) {
  res.status(404).end();
});


module.exports = router;