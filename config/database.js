const Sequelize = require('sequelize');

const sequelize = new Sequelize('crud_node', 'postgres', 'icq900', {
  host: 'localhost',
  dialect: 'postgres',  // ou 'mysql', 'sqlite', 'mssql', etc.
});

module.exports = sequelize;
