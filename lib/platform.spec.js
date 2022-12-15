const platform = require('./platform');

describe("platform", () => {
  test('loads', () => {
    expect(platform).toBeDefined();
    expect(platform.ext).toBeDefined();
    expect(platform.os).toBeDefined();
    expect(platform.arch).toBeDefined();
  });
});
