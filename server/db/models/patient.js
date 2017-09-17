var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/healthcare_records', {
});
const bcrypt = require('bcrypt-nodejs');

module.exports = db.define('Patient', {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})


