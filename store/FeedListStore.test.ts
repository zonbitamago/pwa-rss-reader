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
});
