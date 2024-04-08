import { healthIndicator } from "./index";

test('should return "healthy" for health > 50', () => {
  expect(healthIndicator({ name: "Маг", health: 90 })).toBe("healthy");
});

test('should return "wounded" for 15 < health <= 50', () => {
  expect(healthIndicator({ name: "Маг", health: 30 })).toBe("wounded");
});

test('should return "critical" for health <= 15', () => {
  expect(healthIndicator({ name: "Маг", health: 10 })).toBe("critical");
});
