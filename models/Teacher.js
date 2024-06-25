const Sequelize = require('sequelize');
const sequelize = require('../config/database.js');

const Teacher = sequelize.define('teacher', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = Teacher;
