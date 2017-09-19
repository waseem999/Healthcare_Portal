'use strict';

const patient = require('./patient');
const users  = require('./users');
const doctor  = require('./doctor');
const appointments  = require('./appointments');

patient.belongsTo(users);
doctor.belongsTo(users);
patient.hasMany(appointments);
doctor.hasMany(appointments);




module.exports = {
 patient, users, doctor, appointments
};