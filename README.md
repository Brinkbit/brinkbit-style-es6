# Deprecated in favor of https://github.com/Brinkbit/eslint-config-brinkbit

brinkbit-style-es6
==================

A linting module to enforce Brinkbit's es6 javascript style.
The style is based on Airbnb's es6 javascript style and is outlined [here](https://github.com/Brinkbit/javascript).

Getting Started
===============

Adding the brinkbit es6 style enforcement to your project is as easy as

`$ npm install --save-dev brinkbit-style-es6`

That's all you should need!

If you use the atom text editor, I highly recommend using the [linter](https://atom.io/packages/linter) and [linter-eslint](https://atom.io/packages/linter-eslint) packages. These will highlight linting errors for you in your text editor right out of the box.

Contributing<a name='contributing'></a>
============

We welcome and appreciate contributions to our repositories! You can find the current list of bugs [here](https://trello.com/b/gFCTWxdY/brinkbit-bugs-public) -- just make sure to check the "About this board" list first.

Prerequisites
-------------

1. Node.js 4 or higher & npm - [download here](http://nodejs.org/download/)
1. Depending on the repository, either:
	- grunt - `$ npm install -g grunt`, or
	- gulp - `$ npm install -g gulp`

Build and test steps
--------------------

1. Fork and clone the repo
1. `$ npm install`
1. `$ grunt` or `$ gulp`

Submitting your code
--------------------

1. All code will need to match the brinkbit es6 style, defined in this repo.
1. Commit messages should adhere to [this format](http://chris.beams.io/posts/git-commit/).
1. We follow [BDD](http://guide.agilealliance.org/guide/bdd.html) principles, so all code requires accompanying unit/functional tests which cover all code paths. They are typically in a top-level test directory and are written in [mocha](https://mochajs.org/) and [chai](http://chaijs.com/), with [sinon](http://sinonjs.org/) and [chai-as-promised](https://github.com/domenic/chai-as-promised/) used when applicable.

When your code is complete and all your tests pass, submit a pull request. We will review the request and post comments with feedback as applicable.
