'use strict';

/**
 * Module dependencies (gunningFog, assert).
 */

var gunningFog = require('..'),
    assert = require('assert');

/**
 * Assert, but up to 6 digits.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Unit tests.
 */

describe('gunningFog()', function () {
    it('should be of type `function`', function () {
        assert(typeof gunningFog === 'function');
    });

    it('should work', function () {
        var result;

        /**
         * Return NaN when an invalid value is given.
         */

        result = gunningFog();

        assert(result !== result);

        /**
         * For a sentence without complex polysillabic words.
         */

        roundAssert(gunningFog({
            'sentence' : 1,
            'word' : 13
        }), 5.2);

        /**
         * For “The Australian platypus is seemingly a hybrid of
         * a mammal and reptilian creature.”
         *
         * Sentences: 1
         * Words: 13
         * Complex Polysillabic: 2 (seemingly, reptilian)
         */

        roundAssert(gunningFog({
            'sentence' : 1,
            'word' : 13,
            'complexPolysillabicWord' : 2
        }), 11.353846);
    });
});
