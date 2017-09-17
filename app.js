const express = require('express');
const path = require('path');
const models = require('./server/db/models'); 
const sequelize_fixtures = require('sequelize-fixtures');
const patients = models.patient;
const users = models.users;
const bcrypt = require('bcrypt-nodejs');

const bodyParser = require('body-parser');

const app = express();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Here is where I serve up the first page
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './components/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(err.status || 500).send(err);
});

users.sync({})
.then(()=> patients.sync({}))
.then(sequelize_fixtures.loadFile('server/data.json', models));

  app.listen(3001, function () {
    console.log('Server is listening on port 3001');
  
})


module.exports = app;