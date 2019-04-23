import ItemStore from "./ItemStore";

let store;

beforeEach(() => {
  store = new ItemStore();
});

describe("ItemStore", function() {
  it("Init", async () => {
    expect(store.updateDuration).toBe(5);
    expect(store.items.length).toBe(0);
    expect(store.isLoading).toBeFalsy();
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
      await store.fetchItems();
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
});
