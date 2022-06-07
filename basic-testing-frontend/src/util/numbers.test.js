import { it, expect, describe } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
	// can throw mutiple expectations
	it('Should tranform a string number to a number of type number', () => {
		const input = '1';

		const result = transformToNumber(input);

		expect(result).toBe(1);
		expect(result).toBeTypeOf('number');
	});

	it('Should yield NaN for non-transformable values', () => {
		const input = 'invalid';
		const input2 = {};

		const result = transformToNumber(input);
		const result2 = transformToNumber(input2);

		expect(result).toBeNaN();
		expect(result2).toBeNaN();
	});
});

// Integration test as cleanNumbers() calls many other functions
// it like testing a combonation of functions instead of just one
describe('cleanNumbers()', () => {
	it('Should return an array of number values if an array of string number values is given', () => {
		const numberValues = ['1', '2', '3'];

		const cleanedNumbers = cleanNumbers(numberValues);

		// toEqual will not check for same memory address, just the values
		expect(cleanedNumbers).toEqual([1, 2, 3]);
	});

	it('Should throw an array if an array with at least 1 empty string is provided', () => {
		const numberValues = ['', 1];

		const cleanFn = () => cleanNumbers(numberValues);

		expect(cleanFn).toThrow();
	});
});
