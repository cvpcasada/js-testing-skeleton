'use strict';

var $ = require('jquery'),
	appFn = require('app'),
	numberTemplateFn = require('app/number-template'),
	widgetModule = require('app/widget'),
	container = '.container',
	widget;

$(appFn()).appendTo(container);
$(numberTemplateFn(5)).appendTo(container);

widget = new widgetModule();
widget.appendTo(container);
