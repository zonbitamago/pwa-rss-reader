import FeedListStore from "./FeedListStore";

let store: FeedListStore;

beforeEach(() => {
  store = new FeedListStore();
});

describe("FeedListStore", function() {
  it("Init", async () => {
    expect(store.feedList).toEqual([]);
    expect(store.name).toEqual("");
    expect(store.url).toEqual("");
  });

  describe("setFeedList", function() {
    it("collectURL is saved localstorage", async () => {
      // テストデータ準備
      const nameTestData = "collecturl";
      const urlTestData = "https://feedforall.com/sample-feed.xml";
      store.name = nameTestData;
      store.url = urlTestData;

      //実行
      await store.setFeedList();

      //検証
      expect(store.feedList.length).toBe(1);
      expect(store.feedList[0].name).toEqual(nameTestData);
      expect(store.feedList[0].url).toEqual(urlTestData);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });

    it("uncollectURL is not saved localstorage", async () => {
      // テストデータ準備
      const nameTestData = "uncollecturl";
      const urlTestData = "https://example.com/";
      store.name = nameTestData;
      store.url = urlTestData;

      //実行
      await store.setFeedList();

      //検証
      expect(store.feedList.length).toBe(0);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });
});
