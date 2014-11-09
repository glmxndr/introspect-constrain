/*global describe, it*/
'use strict';

var expect = require('chai').expect;

var constraint = require('../').constraint;
var Failure = require('../').Failure;
var report = require('../').report;

// Constructed with the [String, Function, String] signature
var alwaysOK = constraint(
  'always check',
  function () { return true; },
  'some relative context'
);

// Constructed with the [Object] signature
var alwaysKO = constraint({
  repr: 'never check',
  predicate: function () { return false; }
});

// Constructed with the [Object] signature
var mirrorCst = constraint({
  repr: 'mirror',
  predicate: function (o) { return !!o; }
});

describe('Constraint', function () {

  it('should return undefined on check without failure', function () {
    expect(alwaysOK.check()).to.be.undefined;
  });

  it('should return a failure on check with failure', function () {
    expect(alwaysKO.check()).to.be.an.instanceOf(Failure);
  });

  it('should call the report.add method on failure', function () {
    var fs = [];
    var r = report().onFailure(function (f) { fs.push(f); });
    alwaysKO.check(false, r);
    expect(fs.length).to.be.equal(1);
  });

  it('should return undefined or a failure based on the value checked', function () {
    expect(mirrorCst.check(true )).to.be.undefined;
    expect(mirrorCst.check(false)).to.be.an.instanceOf(Failure);
  });

  it('should have an empty relative context by default', function () {
    expect(alwaysKO.relCtx).to.be.equal('');
  });

  it('should have the provided relative context', function () {
    expect(alwaysOK.relCtx).to.be.equal('some relative context');
  });

});
