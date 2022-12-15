const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

const getLatestTfvmVersion = require('./latest-tfvm-version');

beforeEach(() => {
  fetch.resetMocks();
});

describe("latest tfvm version from github", () => {
  test('happy path', async () => {
    fetch.mockResponseOnce(JSON.stringify({tag_name:"v1.0.3"}));

    const version = await getLatestTfvmVersion();
    expect(version).toBe("v1.0.3");
  });

  test('handles failed request', async () => {
    fetch.mockRejectOnce(new Error("API is down"))
    try {
      await getLatestTfvmVersion();
      throw new Error("Call should have failed.");
    } catch( err ) {
      expect(err.message).toBe("Getting latest tfvm release failed (API is down).");
    }
  });

  test('handles tag_name missing', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    try {
      await getLatestTfvmVersion();
      throw new Error("Call should have failed.");
    } catch( err ) {
      expect(err.message).toBe("Getting latest tfvm release failed (no tag_name).");
    }
  });
});
