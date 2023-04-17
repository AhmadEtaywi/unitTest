const getDayAbbreviation = require("./getDayAbbreviation");

describe("getDayAbbreviation", () => {
  test("should return correct day abbreviation for valid days", () => {
    expect(getDayAbbreviation("Monday")).toBe("Mon");
    expect(getDayAbbreviation("Tuesday")).toBe("Tue");
    expect(getDayAbbreviation("Wednesday")).toBe("Wed");
    expect(getDayAbbreviation("Thursday")).toBe("Thu");
    expect(getDayAbbreviation("Friday")).toBe("Fri");
    expect(getDayAbbreviation("Saturday")).toBe("Sat");
    expect(getDayAbbreviation("Sunday")).toBe("Sun");
  });

  test('should return "Invalid day" for invalid days', () => {
    expect(getDayAbbreviation("InvalidDay")).toBe("Invalid day");
  });
});
