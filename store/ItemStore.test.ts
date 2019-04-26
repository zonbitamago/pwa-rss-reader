import ItemStore from "./ItemStore";
import MockDate from "mockdate";

let store: ItemStore;

beforeEach(() => {
  store = new ItemStore();
  MockDate.set("2019-04-13 12:34:56");
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
      MockDate.set("2019-04-15 23:45:01");
      await store.fetchItems();

      expect(store.updateTime).toBe("23:45:01");

      const item = store.items[0];
      expect(item.alt).toBe("alt");
      expect(item.src).toBe(
        "https://www.google.com/s2/favicons?domain=www.feedforall.com"
      );
      expect(item.domainName).toBe("Qiita");
      expect(item.date).toBe("2004/10/27 04:01:01");
      expect(item.url).toBe("http://www.feedforall.com");
      expect(item.itemName).toBe("RSS Resources");
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
