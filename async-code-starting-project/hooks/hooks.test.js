import { it, expect, beforeAll, beforeEach, afterAll, afterEach } from 'vitest';
import { User } from './hooks';

// hooks can be used to better organize and optimize tests
// hooks: beforeAll(), beforeEach(), afterAll(), afterEach()

// how to use each hook and when they get called
beforeAll(() => {
	console.log('before all');
});
beforeEach(() => {
	console.log('before each');
});
afterAll(() => {
	console.log('after all');
});
afterEach(() => {
	console.log('after each');
});

// can use hooks to reset the info we need
let testEmail;
let user;
// good to initialize data
beforeAll(() => {
	testEmail = 'test@test.com';
	user = null;
});
// reset the data
beforeEach(() => {
	user = new User(testEmail);
});

// can run tests concurrently by adding the concurrent keyword after it
// can also add it to describe, and all tests inside will be executed in parallel
// tests in different file locations run in parallel by default
it.concurrent('Should update the email', () => {
	const newTestEmail = 'test2@test.com';

	user.updateEmail(newTestEmail);

	expect(user.email).toBe(newTestEmail);
});

it.concurrent('Should have an email property', () => {
	expect(user).toHaveProperty('email');
});

it('Should store the provided email value', () => {
	expect(user.email).toBe(testEmail);
});

it('Should clear the email', () => {
	user.clearEmail();

	expect(user.email).toBe('');
});

it('Should still have an email property after clearing the email', () => {
	user.clearEmail();

	expect(user).toHaveProperty('email');
});
