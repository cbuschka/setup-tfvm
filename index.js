const core = require('@actions/core');

const setupTfvm = require('./lib/setup-tfvm');

const main = async () => {
  try {
    await setupTfvm();
    core.info("tfvm/terraform ready.");
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
};

main();
