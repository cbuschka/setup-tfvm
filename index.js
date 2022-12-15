const core = require('@actions/core');
const log = require('./src/log');

const setupTfvm = require('./src/setup-tfvm');

const main = async () => {
  try {
    await setupTfvm();
    log.info("tfvm/terraform ready.");
  } catch (error) {
    log.error(error);
    core.error(error);
    core.setFailed(error.message);
  }
};

main();
