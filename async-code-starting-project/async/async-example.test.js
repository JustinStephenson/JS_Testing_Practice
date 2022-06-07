import { it, expect, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', () => {
	// done lets us sepcify when the test should be done, can put it in async to wait for callbacks
	// failed tests throw an error, and in a callback will not show error, use try catch
	it('Should generate a token value', (done) => {
		const testUserEmail = 'test@test.com';
		const testCallback = (err, token) => {
			try {
				expect(token).toBeDefined(); // check if token is deifned
				// expect(token).toBe(2);   // this test will fail
				done();
			} catch (err) {
				done(err);
			}
		};

		generateToken(testUserEmail, testCallback);
	});
});

describe('generateTokenPromise()', () => {
	// can wrap a promise inside a expect
	it('Should generate a token value', () => {
		const testUserEmail = 'test@test.com';

		// can use the keywords 'rejects' and 'resolves' to check promise return
		// need to return the promise
		return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
	});

	// can use async await in the test to do the same thing as above test
	it('Should generate a token value aysnc await', async () => {
		const testUserEmail = 'test@test.com';

		const token = await generateTokenPromise(testUserEmail);

		expect(token).toBeDefined();
	});
});
