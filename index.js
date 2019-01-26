'use strict';
const opn = require('opn');

const baseUrl = 'https://quran.com';
const language = 'translations=33';

module.exports = (surah = 1, ayyah) => {
	const opnOptions = {
		app: ['google-chrome'],
		wait: false
	};

	if (surah && ayyah) {
		return opn(`${baseUrl}/${surah}/${ayyah}?${language}`, opnOptions);
	}

	if (surah) {
		return opn(`${baseUrl}/${surah}?${language}`, opnOptions);
	}

	return Promise.reject(new Error('Please provide surah or ayyah'));
};
