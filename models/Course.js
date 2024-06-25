const Sequelize = require('sequelize');
const sequelize = require('../config/database.js');

const Course = sequelize.define('course', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  time: Sequelize.STRING,
});

module.exports = Course;
