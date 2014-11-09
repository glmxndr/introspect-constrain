/*global describe, it*/
'use strict';

var expect = require('chai').expect;

var report = require('../').report;
var failure = require('../').failure;

describe('report', function () {

  it('should be constructed fine with no args', function () {
    var r = report();
    expect(r.ok()).to.be.true;
    expect(r.errors()).to.be.empty;
  });

  it('should accept constraint failure callbacks', function () {
    var r = report();
    var fs = [];
    r.onFailure(function (f) { fs.push(f); });

    r.add(failure());
    r.add(failure());
    expect(fs.length).to.be.equal(2);
  });

  it('should correctly deal with contexts', function () {
    var r = report();
    expect(r.context).to.be.equal('o');
    r.pushContext('.test');
    expect(r.context).to.be.equal('o.test');
    r.popContext();
    expect(r.context).to.be.equal('o');
  });

});
