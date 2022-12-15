const fs = require('fs').promises;
const os = require('os');
const path = require('path');
const fetch = require('node-fetch');
const platform = require('./platform');
const getLatestTfvmVersion = require('./latest-tfvm-version.js');
const getTfvmDownloadUrl = require('./tfvm-download-url.js');
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function downloadTfvm() {
  const version = await getLatestTfvmVersion();
  const url = await getTfvmDownloadUrl(version);

  core.debug(`Download url for tfvm is ${url}...`);
  return await tc.downloadTool(url);
}

module.exports = downloadTfvm;
