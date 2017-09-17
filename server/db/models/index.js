'use strict';

const patient = require('./patient');
const users  = require('./users');

patient.belongsTo(users);


module.exports = {
 patient, users
};