// can import 'test' or 'it' both are the same
import { it, expect } from 'vitest';
import { add } from './math';

it('Should sum all number values in an array', () => {
	// Arrange
	const numbers = [1, 2, 3];

	// Act
	const result = add(numbers);

	// Assert
	const expectedResult = numbers.reduce((prev, curr) => prev + curr, 0);
	expect(result).toBe(expectedResult);
});

it('Should yield NaN if a least on invalid numbers is provided', () => {
	const inputs = ['invalid', 1];

	const result = add(inputs);

	expect(result).toBeNaN();
});

it('Should yield a correct sum if an array of numeric string values is provided', () => {
	const numbers = ['1', '2'];

	const result = add(numbers);

	const expectedResult = numbers.reduce((prev, curr) => +prev + +curr, 0);
	expect(result).toBe(expectedResult);
});

it('Should yield 0 if an empty array is provided', () => {
	const numbers = [];

	const result = add(numbers);

	// can add .not before .toBe() to check for opposite
	expect(result).toBe(0);
});

it('Should throw an error if no value is passed into the function', () => {
	const resultFn = () => {
		add();
	};

	expect(resultFn).toThrow(/is not iterable/);
});

it('Should throw an error if provided with mutiple arguments instead of an array', () => {
	const num1 = 1;
	const num2 = 2;

	const resultFn = () => {
		add(num1, num2);
	};

	expect(resultFn).toThrow(/is not iterable/);
});
