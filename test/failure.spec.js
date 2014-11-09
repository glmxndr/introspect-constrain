/*global describe, it*/
'use strict';

var expect = require('chai').expect;

var failure = require('../').failure;
var Failure = require('../').Failure;

describe('failure', function () {

  it('should build a Failure object', function () {
    expect(failure()).to.be.an.instanceOf(Failure);
  });

});
