import * as DayFormatter from "./DayFormatter";
import MockDate from "mockdate";

beforeEach(() => {
  MockDate.set("2019-04-13 12:34:56");
});

afterEach(() => {
  MockDate.reset();
});

describe("YYYYMMDDHH24MMSS", function() {
  it("noArg is now date", async () => {
    const actual = DayFormatter.YYYYMMDDHH24MMSS();

    expect(actual).toBe("2019/04/13 12:34:56");
  });

  it("hasArg is setdate", async () => {
    const actual = DayFormatter.YYYYMMDDHH24MMSS("1989/03/24 03:02:01");

    expect(actual).toBe("1989/03/24 03:02:01");
  });
});

describe("HH24MMSS", function() {
  it("noArg is now date", async () => {
    const actual = DayFormatter.HH24MMSS();

    expect(actual).toBe("12:34:56");
  });

  it("hasArg is setdate", async () => {
    const actual = DayFormatter.HH24MMSS("1989/03/24 03:02:01");

    expect(actual).toBe("03:02:01");
  });
});

describe("MD", function() {
  it("noArg is now date", async () => {
    const actual = DayFormatter.MD();

    expect(actual).toBe("4/13");
  });

  it("hasArg is setdate", async () => {
    const actual = DayFormatter.MD("1989/03/24 03:02:01");

    expect(actual).toBe("3/24");
  });
});
