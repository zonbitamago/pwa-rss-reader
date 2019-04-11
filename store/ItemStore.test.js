import ItemStore from "./ItemStore";

describe("ItemStore", function() {
  it("Init", async () => {
    const store = new ItemStore();
    expect(store.updateDuration).toBe(5);
  });

  describe("setUpdateDuration", function() {
    it("updateDuration to 4", async () => {
      const store = new ItemStore();
      store.setUpdateDuration(4);
      expect(store.updateDuration).toBe(4);
    });
    it("updateDuration to 6", async () => {
      const store = new ItemStore();
      store.setUpdateDuration(6);
      expect(store.updateDuration).toBe(6);
    });
  });
});
