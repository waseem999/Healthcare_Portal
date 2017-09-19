const express = require('express');
const path = require('path');
const models = require('./server/db/models'); 
const sequelize_fixtures = require('sequelize-fixtures');
const patient = models.patient;
const doctor = models.doctor;
const appointments = models.appointments;
const users = models.users;
const bcrypt = require('bcrypt-nodejs');
const index = require('./server/router/index.js');

const bodyParser = require('body-parser');

const app = express();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'html');

app.use('/api', index);

//Here is where I serve up the first page
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './components/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(err.status || 500).send(err);
});

users.sync()
.then(()=> patient.sync())
.then(()=> doctor.sync())
.then(()=> appointments.sync())

.then(() => sequelize_fixtures.loadFile('server/data.json', models))
.then(() => {
    app.listen(3001, function () {
        console.log('Server is listening on port 3001');
    })
});



module.exports = app;