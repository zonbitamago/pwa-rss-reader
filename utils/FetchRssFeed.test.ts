import FetchRssFeed from "./FetchRssFeed";

describe("FetchRssFeed", function() {
  it("array args to json results", async () => {
    const urls = ["https://feedforall.com/sample-feed.xml"];
    const json = await FetchRssFeed(urls);

    expect(json.results.length).toBe(1);
    const result = json.results[0];
    expect(result.result).toBeTruthy();
    expect(result.url).toEqual("https://feedforall.com/sample-feed.xml");
  });
});
