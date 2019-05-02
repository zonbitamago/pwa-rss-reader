import DuplicactionFeedURLError from "./DuplicationFeedURLError";

describe("DuplicationFeedURLError", function() {
  it("init", async () => {
    const error = new DuplicactionFeedURLError();

    expect(error.toString()).toEqual(
      "DuplicationFeedURLError:登録内容が重複しています。"
    );
  });
});
