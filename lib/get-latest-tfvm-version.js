const fetch = require('node-fetch');
const core = require('@actions/core');

const FALLBACK_VERSION = "v0.24.0";

const getLatestTfvmVersion = async () => {
  const LATEST_RELEASE_URL = "https://api.github.com/repos/cbuschka/tfvm/releases/latest";
  const response = await fetch(LATEST_RELEASE_URL, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  });
  const body = await response.json();
  const version = body["tag_name"];
  if (!version) {
    core.warning("Getting latest tfvm release failed (no tag_name). Using fallback version.");
    return FALLBACK_VERSION;
  }
  return version;
};

module.exports = getLatestTfvmVersion;
