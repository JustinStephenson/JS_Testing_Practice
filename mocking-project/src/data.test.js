import { it, expect, describe, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
	it('Should execute logFn if provided', () => {
		// spy object
		// can pass a function to spy to have behavior
		const logger = vi.fn();

		generateReportData(logger);

		expect(logger).toBeCalled();
	});
});
