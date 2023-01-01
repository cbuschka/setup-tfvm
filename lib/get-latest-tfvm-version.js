const fetch = require('node-fetch');

const getLatestTfvmVersion = async () => {
  const LATEST_RELEASE_URL = "https://api.github.com/repos/cbuschka/tfvm/releases/latest";
  const response = await fetch(LATEST_RELEASE_URL, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  });
  const body = await response.json();
  const version = body["tag_name"];
  if (!version) {
    throw new Error("Getting latest tfvm release failed (no tag_name).");
  }
  return version;
};

module.exports = getLatestTfvmVersion;
