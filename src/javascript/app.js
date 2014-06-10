'use strict';

var $ = require('jquery'),
	HelloWorld = require('app/hello-world'),
	HelloName = require('app/hello-name'),
	container = '.container',

	helloWorld,
	helloName;

helloWorld = new HelloWorld();
helloName = new HelloName();

$(helloWorld.getMessage()).appendTo(container);
$(helloName.getMessage('Helen')).appendTo(container);
