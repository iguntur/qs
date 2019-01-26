#!/usr/bin/env node
'use strict';
const qs = require('.');

const argv = process.argv.slice(2);

const [surah, ayyah] = argv[0].replace(/(:|\/)/g, '/').split('/');

qs(surah, ayyah).catch(error => {
	console.error(error);
});
