const fetch = require('node-fetch');

const getLatestTfvmVersion = async () => {
  const LATEST_RELEASE_URL = "https://api.github.com/repos/cbuschka/tfvm/releases/latest";
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
      throw new Error("'"+version+"' is not a valid version number");
    }

    return version;
  } catch( err ) {
    throw new Error("Getting latest tfvm release failed ("+err.message+").");
  }
};

module.exports = getLatestTfvmVersion;
