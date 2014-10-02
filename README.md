# Welcome

Get started with JS testing quickly with this skeleton framework.

# To Run

* Install the pre-requisites listed below
* Run `npm install` inside the top level directory to grab dependencies
* Run `gulp` to watch files and test when files change

## Pre-Requisites

On OS X you're recommended to increase the [ulimit](http://superuser.com/a/443168/6877) as it's ridiculously low by default. Use `ulimit -S -n 2048`.

### Node

If you don't already have it installed, install Node. If you use homebrew, you can install using

	brew install node

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Gulp

Gulp must be installed globally in order to use the command line tools.

	npm install -g gulp

# Building

This project is built using Gulp, a JavaScript task runner.

### Install npm dependencies

	npm install

This runs through all dependencies listed in `package.json` and downloads them to a `node_modules` folder in your project directory.

## Build tasks

It's as simple as running

	gulp
