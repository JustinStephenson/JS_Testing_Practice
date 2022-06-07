import { it, expect, vi } from 'vitest';
ppp;
import { promises as fs } from 'fs';
import writeData from './io';

// mock object
// add the module path to mock
// replace 'fs' with empty spy objects

// vitest auto puts mock on top of file before imports
// vitest also sorts test to do un-mocked tests first
vi.mock('fs');
// replace the join method in the path object
vi.mock('path', () => {
	return {
		// default as in default file name from import
		default: {
			join: (...args) => {
				return args[args.length - 1];
			},
		},
	};
});

it('Should execute the writeFile method', () => {
	const testData = 'Test';
	const testFilename = 'test.txt';

	// called writeData and found that fs was called, checking the spy function from mock object
	writeData(testData, testFilename);
	// expect(fs.writeFile).toBeCalled();
	expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

it('Should return a promise that resolves to no value if called correctly', () => {
	const testData = 'Test';
	const testFilename = 'test.txt';

	return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
