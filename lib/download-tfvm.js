const fs = require('fs').promises;
const os = require('os');
const path = require('path');
const platform = require('./platform');

const core = require('@actions/core');
const tc = require('@actions/tool-cache');

const getLatestTfvmVersion = require('./get-latest-tfvm-version');

const getDownloadUrl = async () => {
  const version = await getLatestTfvmVersion();
  return `https://github.com/cbuschka/tfvm/releases/download/${version}/tfvm-${platform.os}_${platform.arch}${platform.ext}`;
};

async function downloadTfvm() {
  const url = await getDownloadUrl();

  core.debug(`Download url for tfvm is ${url}...`);
  return await tc.downloadTool(url);
}

module.exports = downloadTfvm;
