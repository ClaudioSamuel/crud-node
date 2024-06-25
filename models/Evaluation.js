const Sequelize = require('sequelize');
const sequelize = require('../config/database.js');

const Evaluation = sequelize.define('evaluation', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  credito: Sequelize.STRING,
});

module.exports = Evaluation;
