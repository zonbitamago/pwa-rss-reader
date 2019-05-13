import * as LocalStorageManager from "./LocalStorageManager";
import * as Constants from "./Constants";

beforeEach(() => {
  localStorage.clear();
});

describe("LocalStorageManager", function() {
  describe("getFeedList", function() {
    it("get savedFeedList", async () => {
      //テスト準備
      const feedList = [
        {
          name: "name1",
          url: "url1"
        },
        {
          name: "name2",
          url: "url2"
        }
      ];
      localStorage.setItem(Constants.FEED_LIST_KEY, JSON.stringify(feedList));

      //実行
      const actual = LocalStorageManager.getFeedList();

      //検証
      expect(actual).toEqual(feedList);
    });

    it("not saved is initial array", async () => {
      //実行
      const actual = LocalStorageManager.getFeedList();

      //検証
      expect(actual).toEqual([]);
    });
  });

  describe("setLocalStorage", function() {
    it("saveFeedList", async () => {
      //テスト準備
      const feedList: LocalStorageManager.feedListElement[] = [
        {
          name: "name1",
          url: "url1"
        },
        {
          name: "name2",
          url: "url2"
        }
      ];

      //実行
      LocalStorageManager.setLocalStorage(feedList);

      //検証
      expect(localStorage.getItem(Constants.FEED_LIST_KEY)).toEqual(
        JSON.stringify(feedList)
      );
    });
  });

  describe("getUpdateDuration", function() {
    it("get savedUpdateDuration", async () => {
      //テスト準備
      localStorage.setItem(Constants.UPDATE_DURATION_KEY, "2");

      //実行
      const actual = LocalStorageManager.getUpdateDuration();

      //検証
      expect(actual).toBe(2);
    });

    it("not saved is initial number", async () => {
      //実行
      const actual = LocalStorageManager.getUpdateDuration();

      //検証
      expect(actual).toBe(5);
    });
  });

  describe("setUpdateDuration", function() {
    it("saveUpdateDuration", async () => {
      //実行
      LocalStorageManager.setUpdateDuration(3);

      //検証
      expect(localStorage.getItem(Constants.UPDATE_DURATION_KEY)).toBe("3");
    });
  });
});
