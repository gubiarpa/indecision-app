import { describe, expect, test } from "vitest";
import { sum, addArray } from "@/helpers/sum";

describe("add functions", () => {
	test("adds 1 + 2 to equal 3", () => {
		// Arrange
		const a = 1;
		const b = 2;
		const expected = 3;

		// Act
		const result = sum(a, b);

		// Assert
		expect(result).toBe(expected);
	});

	test("addArray returns the sum of the array", () => {
		// Arrange
		const arr = [1, 2, 3, 4, 5, 6];
		const expected = 21;

		// Act
		const result = addArray(arr);

		// Assert
		expect(result).toBe(expected);
	});

	test("sum handles zero correctly", () => {
		// Arrange
		const a = 5;
		const b = 0;
		const expected = 5;

		// Act
		const result = sum(a, b);

		// Assert
		expect(result).toBe(expected);
	});

	test("sum handles negative numbers correctly", () => {
		// Arrange
		const a = -5;
		const b = -10;
		const expected = -15;

		// Act
		const result = sum(a, b);

		// Assert
		expect(result).toBe(expected);
	});

	test("addArray returns 0 for an empty array", () => {
		// Arrange
		const arr: number[] = [];
		const expected = 0;

		// Act
		const result = addArray(arr);

		// Assert
		expect(result).toBe(expected);
	});

	test("addArray handles arrays with a single element correctly", () => {
		// Arrange
		const arr = [42];
		const expected = 42;

		// Act
		const result = addArray(arr);

		// Assert
		expect(result).toBe(expected);
	});

	test("addArray handles arrays with negative numbers", () => {
		// Arrange
		const arr = [5, -3, -10, 2];
		const expected = -6;

		// Act
		const result = addArray(arr);

		// Assert
		expect(result).toBe(expected);
	});
});
