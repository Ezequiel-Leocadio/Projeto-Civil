const Sequelize = require('sequelize');

const config = require('../config/database');

const sequelize = new Sequelize(config);

const Artistas = sequelize.define('Artistas', {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  banda: {
    type: Sequelize.STRING,
  },

});

module.exports = { Artistas };
