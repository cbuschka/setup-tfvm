const fs = require('fs').promises;
const os = require('os');
const path = require('path');
const fetch = require('node-fetch');
const platform = require('./platform');

const core = require('@actions/core');
const tc = require('@actions/tool-cache');

const getLatestVersion = async () => {
  const LATEST_RELEASE_URL = "https://api.github.com/repos/cbuschka/tfvm/releases/latest";
  const response = await fetch(LATEST_RELEASE_URL, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  });
  const body = await response.json();
  const version = body["tag_name"];
  if (!version) {
    throw new Error("Getting latest tfvm release failed.");
  }
  return version;
};

const getDownloadUrl = async () => {
  const version = await getLatestVersion();
  return `https://github.com/cbuschka/tfvm/releases/download/${version}/tfvm-${platform.os}_${platform.arch}${platform.ext}`;
};

async function downloadTfvm() {
  const url = await getDownloadUrl();

  core.debug(`Download url for tfvm is ${url}...`);
  return await tc.downloadTool(url);
}

module.exports = downloadTfvm;
