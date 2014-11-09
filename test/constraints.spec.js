/*global describe, it*/
'use strict';

var expect = require('chai').expect;

var constraints = require('../').constraints;

describe('Constraints collection', function () {

  it('should provide an iterator', function () {
    var cur = {}, arr = [], c, cs = constraints();
    var fn1 = function () {};
    var fn2 = function () {};
    cs.add('test1', fn1);
    cs.add({ repr: 'test2', predicate: fn2, relCtx: ''});

    // Simulating "for of" :
    var iter = cs.iterator();
    do {
      cur = iter.next();
      if (cur.value) { arr.push(cur.value); }
    } while(!cur.done);

    expect(arr.length).to.be.equal(2);
    expect(arr[0].predicate).to.be.equal(fn1);
    expect(arr[1].predicate).to.be.equal(fn2);
  });

});
