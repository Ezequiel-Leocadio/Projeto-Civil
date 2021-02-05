module.exports = {

  dialect: 'sqlite',
  storage: 'database.sqlite',

  // ##Com MysQl
  // username: process.env.BANCO_USERNAME,
  // password: process.env.BANCO_PASSWORD,
  // database: process.env.BANCO_DATABASE,
  // host: process.env.BANCO_HOST,
  // dialect: process.env.BANCO_DIALECT,
  // dialectOptions: {
  //   charset: 'utf8',
  // },
  // pool: {
  //   max: 30,
  //   min: 0,
  //   acquire: 60000, // Timeoout
  //   idle: 5000,
  // },
  // timezone: process.env.BANCO_TIMEZONE,
  // disable logging; default: console.log
  logging: false,
};
