const log = {
  info: console.info,
  debug: console.debug,
  error: console.error,
  setLogger: setLogger
};

function setLogger(newLogger) {
  log.debug = newLogger.debug || newLogger.log || log.debug || console.debug;
  log.info = newLogger.info || newLogger.log || log.info || console.info;
  log.error = newLogger.error || newLogger.log || log.error || console.error;
}

module.exports = log;
