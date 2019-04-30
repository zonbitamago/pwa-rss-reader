import FeedListStore from "./FeedListStore";
import * as Constants from "../utils/Constants";
import { fail } from "assert";
import DuplicactionFeedError from "../error/DulicationFeedError";

let store: FeedListStore;

beforeEach(() => {
  store = new FeedListStore();
  localStorage.clear();
});

describe("FeedListStore", function() {
  it("Init", async () => {
    expect(store.feedList).toEqual([]);
    expect(store.name).toEqual("");
    expect(store.url).toEqual("");
  });

  describe("getFeedList", function() {
    it("null localStorage is zero of feedListSize", async () => {
      //実行
      store.getFeedList();
      //検証
      expect(store.feedList).toEqual([]);
    });

    it("not null localStorage is collect feedList", async () => {
      //データ準備
      localStorage.setItem(
        Constants.FEED_LIST_KEY,
        JSON.stringify([
          {
            name: "collecturl",
            url: "https://feedforall.com/sample-feed.xml"
          }
        ])
      );

      //実行
      store.getFeedList();

      //検証
      expect(store.feedList).not.toEqual([]);
    });
  });

  describe("setFeedList", function() {
    it("collectURL is saved localstorage", async () => {
      // テストデータ準備
      const nameTestData = "collecturl";
      const urlTestData = "https://feedforall.com/sample-feed.xml";
      store.name = nameTestData;
      store.url = urlTestData;

      //実行
      const actual = await store.setFeedList();

      //検証
      expect(actual).toBeTruthy();
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
      const actual = await store.setFeedList();

      //検証
      expect(actual).toBeFalsy();
      expect(store.feedList.length).toBe(0);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });

    it("duplicated url is not saved localstorage", async () => {
      // テストデータ準備
      const name = "savedurl";
      const feedList = [
        {
          name: name,
          url: "https://feedforall.com/sample-feed.xml"
        }
      ];
      localStorage.setItem(Constants.FEED_LIST_KEY, JSON.stringify(feedList));
      store.feedList = feedList;

      store.name = "duplicatedURL";
      store.url = "https://feedforall.com/sample-feed.xml";

      //実行
      let catchError: Error | undefined;
      try {
        await store.setFeedList();
      } catch (error) {
        catchError = error;
      }

      //検証
      expect(catchError).toEqual(new DuplicactionFeedError());
    });
  });

  describe("deleteFeedList", function() {
    it("saved feed is delete", async () => {
      //データ準備
      const name = "savedurl";
      const feedList = [
        {
          name: name,
          url: "https://feedforall.com/sample-feed.xml"
        }
      ];
      localStorage.setItem(Constants.FEED_LIST_KEY, JSON.stringify(feedList));
      store.feedList = feedList;

      //実行
      store.deleteFeedList(name);

      //検証
      expect(store.feedList.length).toBe(0);
      expect(localStorage.getItem(Constants.FEED_LIST_KEY)).toEqual("[]");
    });

    it("not saved feed is not deleted", async () => {
      //データ準備
      const name = "savedurl";
      const feedList = [
        {
          name: name,
          url: "https://feedforall.com/sample-feed.xml"
        }
      ];
      localStorage.setItem(Constants.FEED_LIST_KEY, JSON.stringify(feedList));
      store.feedList = feedList;

      //実行
      store.deleteFeedList("other");

      //検証
      expect(store.feedList.length).toBe(1);
      expect(localStorage.getItem(Constants.FEED_LIST_KEY)).toEqual(
        JSON.stringify(feedList)
      );
    });
  });
});
