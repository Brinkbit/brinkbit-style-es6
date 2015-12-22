'use strict';

const validate = require( 'git-validate' );
validate.copy( '../bin/eslintrc', '.eslintrc' );
validate.copy( '../bin/eslint-pre-commit', 'scripts/eslint-pre-commit' );
validate.installScript( 'eslint-pre-commit', './scripts/eslint-pre-commit' );
validate.configureHook( 'pre-commit', ['eslint-pre-commit']);
