import { it, expect, describe } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
	it('Should return a string no matter which value is passed in', () => {
		const val = 1;
		const val2 = 'invalid';
		const val3 = false;

		const result1 = generateResultText(val);
		const result2 = generateResultText(val2);
		const result3 = generateResultText(val3);

		expect(result1).toBeTypeOf('string');
		expect(result2).toBeTypeOf('string');
		expect(result3).toBeTypeOf('string');
	});

	it('Should return a string that contains the calculation result if a number is provided as a result', () => {
		const result = 5;

		const resultText = generateResultText(result);

		expect(resultText).toContain(result.toString());
	});

	it('Should return an empty string if "no-calc" is provided as a result', () => {
		const result = 'no-calc';

		const resultText = generateResultText(result);

		expect(resultText).toBe('');
	});

	it('Should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
		const result = 'invalid';

		const resultText = generateResultText(result);

		expect(resultText).toContain('Invalid');
	});
});
