const os = require('os');

const getArch = () => {
  const osArch = os.arch()
  const mappings = {
    x32: '386',
    x64: 'amd64'
  };
  return mappings[osArch] || osArch;
}

const getOs = () => {
  const osPlatform = os.platform();
  const mappings = {
    win32: 'windows'
  };
  return mappings[osPlatform] || osPlatform;
};

const getPlatform = () => {
  const os = getOs();
  const arch = getArch();
  const ext = os === "windows" ? ".exe" : "";
  return {os, arch, ext};
}

module.exports = getPlatform();
