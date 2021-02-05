class Logger {
  info(logText) {
    console.log(`${new Date()}---Info:::::${logText}`);
  }

  async error(logText) {
    console.error(`${new Date()}---Error:::::${logText}`);
  }

  debug(logText) {
    console.log(`${new Date()}---Debug:::::${logText}`);
  }
}
module.exports = new Logger();
