import { expect, test } from "@jest/globals";

test("sanity test", () => {
  const value = 2 + 2;
  expect(value).not.toBeNull();
  expect(value).toBe(4);
});
