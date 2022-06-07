import { it, expect, describe } from 'vitest';
import { extractPostData } from './posts';

describe('extractPostData()', () => {
	it('Should extract title and content from the provided from data', () => {
		const testTitle = 'Test title';
		const testContent = 'Test content';
		// can build complex dummy objects to test, if functions take complex objects
		const testFormData = {
			title: testTitle,
			content: testContent,
			get(key) {
				return this[key];
			},
		};

		const data = extractPostData(testFormData);
		expect(data.title).toBe(testTitle);
		expect(data.content).toBe(testContent);
	});
});
