# Welcome

Hello, and welcome to a new approach for variable management. This app uses JQuery and Sass, and utilises a number of other tools to support ease of development:

* Gulp - a stream based JS task runner, for building
* Browserify - module support
* Node / npm - for dependency management
* Compass - support for Sass

# To Run

* Install the pre-requisites listed below
* Run `npm install` inside the top level directory to grab dependencies
* Run `gulp serve` to start the server
* Navigate to http://localhost:4000

## Pre-Requisites

### Node

If you don't already have it installed, install Node. If you use homebrew, you can install using

	brew install node

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Gulp

Gulp must be installed globally in order to use the command line tools.

	npm install -g gulp

# Building

This project is built using Gulp, a JavaScript task runner.

## Pre-Requisites

In addition to Node and Gulp, you will need the following:

### Ruby

I recommend installing Ruby using RVM. Even if your system comes with Ruby (I'm looking at you OSX) it is often preferable to have a user installation that will allow the installation of gems without the need for `sudo`. Install RVM and Ruby using

	\curl -sSL https://get.rvm.io | bash -s stable --ruby

`ruby -v` will now tell you which version of Ruby you are using. Check out the [RVM docs](http://rvm.io/rvm/basics) to read how to switch between Ruby versions.

### Compass

If you don't already have Compass installed, install using:

	gem update --system
	gem install compass

### Install npm dependencies

	npm install

This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

## Build tasks

It's as simple as running

	gulp

This will build and start watching your files for changes. If you would like to run a specific task, you can run any of the following:

* `jshint` - will JSHint your JavaScript
* `browserify` - will bundle your JavaScript modules
* `watchify` - same as `browserify`, but JavaScript files will continue to be watched for changes
* `images` - copy changed images from `/src/images/` to `/build/images/`
* `copy` - copy the contents of `src/htdocs` to the root of the `build` folder
* `compass` - compiles Sass files in `/src/sass/` to a css file in `build` using Compass
* `clean` - removes the build directory and kicks off a build
* `watch` - will invoke the appropriate task when files in the `src` folder change
* `build` - runs `browserify`, `compass`, `images` and `copy`

Running `gulp` without a specified task, as above, will invoke `watch` then `build`.

# TODO

* Add production task that minifies code using minifyify (module for minification of browserify bundles)
* Add Font support
