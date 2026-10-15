import { describe, expect, it } from "vitest";
import { somar, subtrair } from "./calc";

describe("calc", () => {
  it("soma", () => {
    expect(somar(2, 3)).toBe(5);
  });

  it("subtrai", () => {
    expect(subtrair(5, 3)).toBe(2);
  });
});
