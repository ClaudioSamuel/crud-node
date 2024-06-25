const Sequelize = require('sequelize');
const sequelize = require('../config/database.js');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;
