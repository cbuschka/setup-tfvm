const fs = require('fs').promises;
const os = require('os');
const path = require('path');
const fetch = require('node-fetch');
const platform = require('./platform');
const getLatestTfvmVersion = require('./latest-tfvm-version.js');
const getTfvmDownloadUrl = require('./tfvm-download-url.js');
const tc = require('@actions/tool-cache');
const log = require('./log');

async function downloadTfvm() {
  const version = await getLatestTfvmVersion();
  const url = await getTfvmDownloadUrl(version);

  log.debug(`Download url for tfvm is ${url}...`);
  return await tc.downloadTool(url);
}

module.exports = downloadTfvm;
