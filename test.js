'use strict';

var test = require('tape');
var nan = require('is-nan');
var gunningFog = require('./');

test('gunningFog', function (t) {
  t.ok(nan(gunningFog()), 'NaN when an invalid value is given');

  t.equal(
    round(gunningFog({
      sentence: 1,
      word: 13
    })),
    5.2
  );

  t.equal(
    round(gunningFog({
      sentence: 1,
      word: 13,
      complexPolysillabicWord: 2
    })),
    11.353846
  );

  t.end();
});

function round(val) {
  return Math.round(val * 1e6) / 1e6;
}
