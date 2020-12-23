const path = require('path');
const core = require('@actions/core');
const downloadTfvm = require('./download-tfvm');
const fs = require('fs').promises;
const platform = require('./platform');

const setupTfvm = async () => {
  const tempFilePath = await downloadTfvm();
  const tempDirPath = path.dirname(tempFilePath);
  const tfvmPath = path.join(tempDirPath, `tfvm${platform.ext}`);
  const terraformPath = path.join(tempDirPath, `terraform${platform.ext}`);

  await fs.rename(tempFilePath, tfvmPath);

  if (platform.os === "windows") {
    await fs.copyFile(tfvmPath, terraformPath);
  } else {
    await fs.symlink(tfvmPath, terraformPath);
    await fs.chmod(tfvmPath, 0o755);
  }

  core.addPath(tempDirPath);
};

module.exports = setupTfvm;
