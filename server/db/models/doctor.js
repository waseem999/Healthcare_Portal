var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/healthcare_records', {
});

module.exports = db.define('doctor', {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})