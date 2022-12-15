const fetch = require('node-fetch');
const retry = require('async-retry');

const getLatestTfvmVersion = async () => {
  const LATEST_RELEASE_URL = "https://api.github.com/repos/cbuschka/tfvm/releases/latest";
  return retry(async (bail) => {
    try {
      const response = await fetch(LATEST_RELEASE_URL, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      const body = await response.json();
      const version = body["tag_name"];
      if (!version) {
        throw new Error("no tag_name");
      }

      if ( !/^v\d+\.\d+(\.\d+)?$/.test(version) ) {
        bail(new Error("Latest tfvm release verison '"+version+"' is not a valid."));
        return;
      }

      return version;
    } catch( err ) {
      throw new Error("Getting latest tfvm release failed ("+err.message+").");
    }
  }, { retries: 2 });
};

module.exports = getLatestTfvmVersion;
