import { sortHeroes } from "./sortHeroes";

test("should sort heroes by health", () => {
  const input = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const expected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];
  expect(sortHeroes(input)).toEqual(expected);
});
