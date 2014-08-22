/*global describe,it*/
'use strict';
var assert = require('assert'),
  restfulNode = require('../lib/restful-node.js');

describe('restful-node node module.', function() {
  it('must be awesome', function() {
    assert( restfulNode .awesome(), 'awesome');
  });
});
