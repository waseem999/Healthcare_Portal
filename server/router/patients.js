const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Patient = models.patient;
const bodyParser = require('body-parser');


router.post('/', (req, res, next) => {
  Patient.findOne({
    where : {
      username : req.body.username
    }
  })
  .then(patient => {
    if (patient){
        var err = new Error('Username Exists');
            err.status = 401;
            throw err;
    }
    else {
        Patient.create(req.body)
    }
  })
  .catch(next);
})

router.get('/', (req, res, next) => {
  Patient.findAll({})
  .then(patients => {
    res.json(patients)
  })
  .catch(next);
})

module.exports = router;