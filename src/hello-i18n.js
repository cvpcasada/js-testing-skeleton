'use strict';

var translations = {
		english: 'Hello World',
		icelandic: 'Halló Heimur',
		japanese: 'ハローワールド',
		spanish: 'Hola Mundo'
	};

function HelloI18n(opts) {

	if (!(this instanceof HelloI18n)) {
		return new HelloI18n(opts);
	}

	opts = opts || {};

	this.defaultLanguage = opts.defaultLanguage || 'icelandic';
	this.strict = opts.strict || false;
}

HelloI18n.prototype.sayHello = function(language) {

	if (this.strict && !language) {
		throw new Error('Þú verður að gefa upp tungumál!');
	}

	var iDontKnowThatLanguage = !language || !translations[language];

	if (iDontKnowThatLanguage) {
		console.log('Því miður, veit ekki það tungumál :(');
	}

	return iDontKnowThatLanguage ? translations[this.defaultLanguage] : translations[language];
};

module.exports = HelloI18n;
