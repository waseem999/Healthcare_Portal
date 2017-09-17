var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/healthcare_records', {
});
const bcrypt = require('bcrypt-nodejs');

module.exports = db.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
     },

    role: {
      type: Sequelize.ENUM('doctor', 'patient'),
      allowNull: false,
    }

}, {
  instanceMethods: {
    checkPassword: (password) => {
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, bool) => {
          if(err) { return reject(err); }
          resolve(bool);
        })
      });
    },

    hashPassword: () => {
      return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
          if(err) { 
              return reject(err)
            }
          bcrypt.hash(this.password, salt, null, (err, hash) => {
            if(err) { 
                return reject(err)
            }
            this.password = hash;
            resolve();
          })
        })
      });
    }
  },

  hooks: {
    beforeCreate: (user) => {
      return user.hashPassword();
    }
  }
})
