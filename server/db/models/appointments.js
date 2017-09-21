const Sequelize = require('sequelize');
const User = require('./users');
const Doctor = require('./doctor');
const db = new Sequelize('postgres://localhost:5432/healthcare_records', {
});


module.exports = db.define('appointment', {

    DateTime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    notes: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  }, {
  instanceMethods : {
    findPatientAppointments: function (id) {
        return this.findAll({
            where: {
                patientId : id
                },
            include: [Doctor]
            })
        }
    },
  })
