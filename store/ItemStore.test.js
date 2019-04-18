import ItemStore from "./ItemStore";

let store;

beforeEach(() => {
  store = new ItemStore();
});

describe("ItemStore", function() {
  it("Init", async () => {
    expect(store.updateDuration).toBe(5);
    expect(store.items.length).toBe(0);
  });

  describe("setUpdateDuration", function() {
    const cases = [
      ["updateDuration to 4", 4, 4],
      ["updateDuration to 6", 6, 6]
    ];
    describe.each(cases)(
      "updateDuration",
      (title, updateDuration, expected) => {
        it(title, async () => {
          store.setUpdateDuration(updateDuration);
          expect(store.updateDuration).toBe(expected);
        });
      }
    );
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
      expect(item.date).toBe("2004/10/27");
      expect(item.url).toBe("http://www.feedforall.com");
      expect(item.itemName).toBe("RSS Resources");
    });
  });
});
