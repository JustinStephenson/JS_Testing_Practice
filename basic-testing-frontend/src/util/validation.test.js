import { it, expect, describe } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

// decribe is how one creates a test suite, for orgainzation purposes
describe('validateStringNotEmpty()', () => {
	it('Should throw an error, if an empty string is provided', () => {
		const input = '';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).toThrow();
	});

	it('Should throw an error with a message that contains a reason (must not be empty)', () => {
		const input = '';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).toThrow(/must not be empty/);
	});

	it('Should throw an error if a long string of blanks is provided', () => {
		const input = '';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).toThrow();
	});

	it('Should throw an error if any other value than a string is provided', () => {
		const inputNum = 1;
		const inputBool = true;
		const inputObj = {};

		const validationFnNum = () => validateStringNotEmpty(inputNum);
		const validationFnBool = () => validateStringNotEmpty(inputBool);
		const validationFnObj = () => validateStringNotEmpty(inputObj);

		expect(validationFnNum).toThrow();
		expect(validationFnBool).toThrow();
		expect(validationFnObj).toThrow();
	});

	it('Should not throw an error, if a non-empty string is provided', () => {
		const input = 'valid';
		const validationFn = () => validateStringNotEmpty(input);
		expect(validationFn).not.toThrow();
	});
});

describe('validateNumber()', () => {
	it('Should throw an error if NaN is provided', () => {
		const input = NaN;
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow();
	});

	it('Should throw an error with a message that contains a reason (invalid number)', () => {
		const input = NaN;
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow(/Invalid number/);
	});

	it('Should throw an error if a non-numeric value is provided', () => {
		const input = '1';
		const validationFn = () => validateNumber(input);
		expect(validationFn).toThrow();
	});

	it('Should not throw an error, if a number is provided', () => {
		const input = 1;
		const validationFn = () => validateNumber(input);
		expect(validationFn).not.toThrow();
	});
});
