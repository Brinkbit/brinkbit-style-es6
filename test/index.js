'use strict';

/* eslint-env mocha */
/* eslint no-unused-expressions: 0 */

const chai = require( 'chai' );
chai.use( require( 'sinon-chai' ));
chai.use( require( 'chai-as-promised' ));
const expect = chai.expect;
const bluebird = require( 'bluebird' );
const fs = bluebird.promisifyAll( require( 'fs-extra' ));
const childprocess = bluebird.promisifyAll( require( 'child_process' ));
const buffertools = require( 'buffertools' );

const MOCK_PATH = 'mock/node_modules/brinkbit-style-es6';

// returns a Promise that resolves with true if the files match
function filesMatch( path1, path2 ) {
    return Promise.all([
        path1,
        path2,
    ].map(( path ) => {
        return fs.readFileAsync( path, null );
    }))
    .then(( results ) => {
        return Promise.resolve( !buffertools.compare( results[0], results[1]));
    });
}

describe( 'Validation script', () => {
    // mock vanilla project
    before(() => {
        return Promise.all([
            fs.ensureDirAsync( `${MOCK_PATH}/src` ),
            fs.ensureDirAsync( `${MOCK_PATH}/bin` ),
        ])
        .then(() => {
            return Promise.all([
                fs.copyAsync( 'bin/eslint-pre-commit', `${MOCK_PATH}/bin/eslint-pre-commit` ),
                fs.copyAsync( 'bin/eslintrc', `${MOCK_PATH}/bin/eslintrc` ),
                fs.copyAsync( 'bin/test/package.json', 'mock/package.json' ),
                fs.copyAsync( 'src/index.js', `${MOCK_PATH}/src/index.js` ),
            ]);
        })
        .then(() => {
            return childprocess.execAsync( `node ./node_modules/brinkbit-style-es6/src/index.js`, {
                cwd: 'mock',
            });
        })
        .then(( res ) => {
            console.log( res ); // eslint-disable-line no-console
            return Promise.resolve();
        });
    });

    // remove mock
    after(() => {
        return fs.removeAsync( 'mock' );
    });

    it( 'should copy bin/eslint-pre-commit to scripts/eslint-pre-commit', () => {
        return expect( filesMatch( 'bin/eslint-pre-commit', 'mock/scripts/eslint-pre-commit' )).to.eventually.be.true;
    });

    it( 'should copy bin/eslintrc to .eslintrc', () => {
        return expect( filesMatch( 'bin/eslintrc', 'mock/.eslintrc' )).to.eventually.be.true;
    });

    it( 'should modify the package.json appropriately', () => {
        return expect( filesMatch( 'bin/test/package-compare.json', 'mock/package.json' )).to.eventually.be.true;
    });
});
