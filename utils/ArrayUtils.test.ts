import * as ArrayUtils from "./ArrayUtils";

describe("ArrayUtils", function() {
  describe("splitArrayGroups", function() {
    it("split arrays to two elements groups", async () => {
      //テスト準備
      const originalArrays = [1, 2, 3, 4, 5];

      //実行
      const actual = ArrayUtils.splitArrayGroups(originalArrays, 2);

      expect(actual[0]).toEqual([1, 2]);
      expect(actual[1]).toEqual([3, 4]);
      expect(actual[2]).toEqual([5]);
    });

    it("split arrays to three elements groups", async () => {
      //テスト準備
      const originalArrays = [1, 2, 3, 4, 5];

      //実行
      const actual = ArrayUtils.splitArrayGroups(originalArrays, 3);

      expect(actual[0]).toEqual([1, 2, 3]);
      expect(actual[1]).toEqual([4, 5]);
    });
  });
});
