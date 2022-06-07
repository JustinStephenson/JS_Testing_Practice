import { it, expect, vi, beforeEach } from 'vitest';
import { showError } from './dom';
import { Window } from 'happy-dom';
import fs from 'fs';
import path from 'path';

// changed environment to happy-dom (vitest) in package.json

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

// this window is like a virtual browser
// the whole chuck of code creates a virtual DOM
const window = new Window();
const document = window.document;
vi.stubGlobal('document', document); // new ref to our virtual document

beforeEach(() => {
	document.body.innerHTML = '';
	document.write(htmlDocContent);
});

it('Should add an error paragraph to the id="errors" element', () => {
	showError('Test error');

	const errorEle = document.getElementById('errors');
	const errorParagraph = errorEle.firstElementChild;

	expect(errorParagraph).not.toBeNull();
});

it('Should not contain and error paragraph initially', () => {
	const errorEle = document.getElementById('errors');
	const errorParagraph = errorEle.firstElementChild;

	expect(errorParagraph).toBeNull();
});

it('Should output to provided message in the error paragraph', () => {
	const testErrorMessage = 'Test';

	showError(testErrorMessage);

	const errorEle = document.getElementById('errors');
	const errorParagraph = errorEle.firstElementChild;
	expect(errorParagraph.textContent).toBe(testErrorMessage);
});
