const Sequelize = require('sequelize');

const config = require('../config/database');

const sequelize = new Sequelize(config);
const { Artistas } = require('./Artistas');

const Albuns = sequelize.define('Albuns', {
  descricao: {
    type: Sequelize.STRING,
  },

});

module.exports = { Albuns };
Artistas.hasMany(Albuns);
