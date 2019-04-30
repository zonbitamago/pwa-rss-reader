import ItemStore from "./ItemStore";
import MockDate from "mockdate";
import * as Constants from "../utils/Constants";

let store: ItemStore;

beforeEach(() => {
  store = new ItemStore();
  MockDate.set("2019-04-13 12:34:56");
  localStorage.clear();
});

afterEach(() => {
  MockDate.reset();
});

describe("ItemStore", function() {
  it("Init", async () => {
    expect(store.updateDuration).toBe(5);
    expect(store.items.length).toBe(0);
    expect(store.isLoading).toBeFalsy();
    expect(store.updateTime).toBe("12:34:56");
    expect(store.timerId).toBeUndefined();
  });

  describe("setUpdateDuration", function() {
    const cases = [
      { title: "updateDuration to 4", arg: 4, expected: 4 },
      { title: "updateDuration to 6", arg: 6, expected: 6 }
    ];
    describe.each(cases)("updateDuration", cases => {
      it(cases.title, async () => {
        store.setUpdateDuration(cases.arg);
        expect(store.updateDuration).toBe(cases.expected);
      });
    });
  });

  describe("fetchItems", function() {
    it("fetchItemsFromRss", async () => {
      //テスト準備
      MockDate.set("2019-04-15 23:45:01");
      const feedList = [
        {
          name: "SampleFeed",
          url: "https://feedforall.com/sample-feed.xml"
        }
      ];
      localStorage.setItem(Constants.FEED_LIST_KEY, JSON.stringify(feedList));

      //実行
      await store.fetchItems();

      //検証
      expect(store.updateTime).toBe("23:45:01");

      const item = store.items[0];
      expect(item.alt).toBe("alt");
      expect(item.src).toBe(
        "https://www.google.com/s2/favicons?domain=www.feedforall.com"
      );
      expect(item.domainName).toBe("SampleFeed");
      expect(item.date).toBe("2004/10/27 04:06:44");
      expect(item.url).toBe(
        "http://www.feedforall.com/feedforall-partners.htm"
      );
      expect(item.itemName).toBe("Recommended Web Based Feed Reader Software");
    });

    it("no fetchList does not fetch", async () => {
      //実行
      await store.fetchItems();

      //検証
      expect(store.items.length).toEqual(0);
    });
  });

  describe("setTimer", function() {
    it("initialTimer", async () => {
      await store.setTimer();
      expect(store.timerId).toBeDefined();
    });

    it("timerId reset", async () => {
      const timerId = setInterval(() => {
        //テストのため、何も行わない
      }, 60 * 1000);

      store.timerId = timerId;

      await store.setTimer();
      expect(store.timerId).not.toEqual(timerId);
    });
  });
});
