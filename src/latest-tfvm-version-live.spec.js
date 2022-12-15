const getLatestTfvmVersion = require('./latest-tfvm-version');

describe("latest tfvm version from github", () => {
  test('happy path', async () => {
    const version = await getLatestTfvmVersion();
    expect(version).toMatch(/^v\d+\.\d+(\.\d+)?$/);
  });
});
