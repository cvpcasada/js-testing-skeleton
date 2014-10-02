'use strict';

var chai = require('chai'),
	HelloI18n = require('../src/hello-i18n'),

	expect = chai.expect;

describe('HelloI18n', function() {

	describe('constructor', function() {

		it('should have a default language', function() {
			var helloI18n = new HelloI18n();
			expect(helloI18n.defaultLanguage).to.equal('icelandic');
		});

		it('should set the default language if provided', function() {
			var helloI18n = new HelloI18n({defaultLanguage: 'japanese'});
			expect(helloI18n.defaultLanguage).to.equal('japanese');
		});
	});

	describe('#sayHello', function() {

		it('should say hello in the specified language', function() {
			var greetings = (new HelloI18n().sayHello('spanish'));
			expect(greetings).to.equal('Hola Mundo');
		});

		it('should use the default language if no language is passed in', function() {
			var greetings = (new HelloI18n().sayHello());
			expect(greetings).to.equal('Halló Heimur');
		});

		it('should throw an error if no language is passed in in strict mode', function() {
			expect(function() {
				(new HelloI18n({strict: true})).sayHello();
			}).to.throw(Error);
		});

	});
});
