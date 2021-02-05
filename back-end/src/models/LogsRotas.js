const Sequelize = require('sequelize');

const config = require('../config/database');

const sequelize = new Sequelize(config);

const LogsRota = sequelize.define('LogsRota', {
  descricao: {
    type: Sequelize.STRING,
  },
  usuario: {
    type: Sequelize.STRING,
  },
  method: {
    type: Sequelize.STRING,
  },
  host: {
    type: Sequelize.STRING,
  },
  origin: {
    type: Sequelize.STRING,
  },
  user_agent: {
    type: Sequelize.STRING(1001),
  },

});

module.exports = LogsRota;
// LogsRota.sync({ force: true });
