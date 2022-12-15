const path = require('path');
const core = require('@actions/core');
const downloadTfvm = require('./download-tfvm');
const fs = require('fs').promises;
const platform = require('./platform');
const log = require('./log');

const setupTfvm = async () => {
  log.debug("Downloading tfvm...");
  const tempFilePath = await downloadTfvm();
  const tempDirPath = path.dirname(tempFilePath);
  log.debug("Tfvm downloaded to: "+tempFilePath); 

  const tfvmPath = path.join(tempDirPath, `tfvm${platform.ext}`);
  log.debug("Using tfvm path: "+tfvmPath); 

  const terraformPath = path.join(tempDirPath, `terraform${platform.ext}`);
  log.debug("Using terraform path: "+terraformPath); 

  await fs.rename(tempFilePath, tfvmPath);
  log.debug("Moved tfvm to: "+tfvmPath); 

  if (platform.os === "windows") {
    await fs.copyFile(tfvmPath, terraformPath);
    log.debug("Copied tfvm as terraform to: "+terraformPath); 
  } else {
    await fs.symlink(tfvmPath, terraformPath);
    await fs.chmod(tfvmPath, 0o755);
    log.debug("Linked tfvm as terraform to: "+terraformPath); 
  }

  core.addPath(tempDirPath);
  log.debug("Added "+tempDirPath+" to gha core path.");
};

module.exports = setupTfvm;
