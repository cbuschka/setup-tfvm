const getLatestTfvmVersion = require('./latest-tfvm-version');

describe("tfvm latest version support", () => {
  test('happy path', async () => {
    const version = await getLatestTfvmVersion();
    expect(version).toMatch(/^v\d+\.\d+(\.\d+)?$/);
  });

  
});
