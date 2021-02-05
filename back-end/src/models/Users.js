const Sequelize = require('sequelize');

const config = require('../config/database');

const sequelize = new Sequelize(config);

const Users = sequelize.define('Users', {
  nome: {
    type: Sequelize.STRING,
  },
  login: {
    type: Sequelize.STRING,
  },
  senha: {
    type: Sequelize.TEXT,
  },

});

module.exports = { Users };
