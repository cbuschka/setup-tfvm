const core = require('@actions/core');
const log = require('./src/log');

const setupTfvm = require('./src/setup-tfvm');

const main = async () => {
  try {
    log.setLogger(core);
    await setupTfvm();
    core.info("tfvm/terraform ready.");
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
};

main();
