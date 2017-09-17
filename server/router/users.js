const express = require('express');
const router = express.Router();
const models = require('../db/models');
const User = models.users;
const bodyParser = require('body-parser');

router.post('/', (req, res, next) => {
let currentuser;
let name = req.body.username
   User.findOne({
       where : {
           username: name
       }
   })
   .then(user => {
       currentuser = user;
        if (!user){
            var error = new Error("No Username Found");
            throw error;
        }
        else {
          res.json(user)
        }
            // else {
            //   console.log("req body password?", req.body.password)
            //   return user.checkPassword(req.body.password)
            // }
   })
  //  .then(() => {
  //       req.session.userId = currentuser.id;
  //       req.session.name = currentuser.username;
  //       res.json(currentuser);
  //   })
    .catch(next);
})

module.exports = router;