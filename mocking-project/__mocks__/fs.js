// folder __mocks__ is a special folder for vitest and jest
// each file name should be the module that you want to create mocks for

import { vi } from 'vitest';

// we want to change functionality of the writeFile function in the promises alias
export const promises = {
	writeFile: vi.fn((path, data) => {
		return new Promise((res, rej) => {
			res();
		});
	}),
};
