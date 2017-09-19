var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/healthcare_records', {
});


module.exports = db.define('appointment', {

  DateTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})
