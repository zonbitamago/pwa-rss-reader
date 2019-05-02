import InvalidFeedURLException from "./InvalidFeedURLException";

describe("InvalidFeedURLException", function() {
  it("init", async () => {
    const error = new InvalidFeedURLException();

    expect(error.toString()).toEqual(
      "InvalidFeedURLException:このURLは登録できません。"
    );
  });
});
