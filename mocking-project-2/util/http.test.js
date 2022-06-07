import { it, expect, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };
const testFetch = vi.fn((url, options) => {
	if (typeof options.body !== 'string') {
		return reject('Not a string');
	}
	return new Promise((resolve, reject) => {
		const testResponse = {
			ok: true,
			json() {
				return new Promise((resolve, reject) => {
					resolve(testResponseData);
				});
			},
		};
		resolve(testResponse);
	});
});
// vi.stubGlobal() allows us to mock/stub a globally available function
vi.stubGlobal('fetch', testFetch);

it('Should return an available response data', () => {
	const testData = { key: 'test' };

	return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

// shows how to test for something to happen, if you change code to not use
// JSON.stringify then the following test will fail
it('Should convert the provided data to JSON before sending the request', async () => {
	const testData = { key: 'test' };

	let errorMessage;

	try {
		await sendDataRequest(testData);
	} catch (error) {
		errorMessage = error;
	}

	expect(errorMessage).not.toBe('not a string');
});

it('Should throw an HTTPError in case of non-ok responses', () => {
	// change the mock implementation once, therefore for this test only
	testFetch.mockImplementationOnce((url, options) => {
		return new Promise((resolve, reject) => {
			const testResponse = {
				ok: false,
				json() {
					return new Promise((resolve, reject) => {
						resolve(testResponseData);
					});
				},
			};
			resolve(testResponse);
		});
	});
	const testData = { key: 'test' };

	return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
