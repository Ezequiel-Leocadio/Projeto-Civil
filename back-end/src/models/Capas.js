const Sequelize = require('sequelize');

const config = require('../config/database');

const sequelize = new Sequelize(config);
const { Albuns } = require('./Albuns');

const Capas = sequelize.define('Capas', {
  imagem: {
    type: Sequelize.TEXT,
  },

});

module.exports = { Capas };
Albuns.hasMany(Capas);
