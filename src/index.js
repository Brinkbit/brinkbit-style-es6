'use strict';

const validate = require( 'git-validate' );
validate.copy( '../.eslintrc', '.eslintrc' );
validate.copy( '../scripts/eslint-pre-commit', 'scripts/eslint-pre-commit' );
validate.installScript( 'eslint-pre-commit', './scripts/eslint-pre-commit' );
validate.configureHook( 'pre-commit', ['eslint-pre-commit']);
