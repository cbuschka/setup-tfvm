const platform = require('./platform');

const getTfvmDownloadUrl = async (version) => {
  return `https://github.com/cbuschka/tfvm/releases/download/${version}/tfvm-${platform.os}_${platform.arch}${platform.ext}`;
};

module.exports = getTfvmDownloadUrl;
