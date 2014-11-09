'use strict';
import { constraint } from './constraint';

class Constraints {

  constructor (params = {}) {
    Object.assign(this, params);
    this.csts = [];
  }

  add (...args) {
    this.csts.push(constraint(...args));
    return this;
  }

  checkAll (o, r) {
    return this.csts.map(c => c.check(o, r)).filter(f => f);
  }

  checkSome (o, r) {
    var fs = this.checkAll(o, r);
    if (fs.length < this.csts.length) {
      return [];
    }
    return fs;
  }

  get iterator () {
    var csts = this.csts;
    return function* () {
      var c;
      for (c in csts) { yield csts[c]; }
    };
  }

  display () {
    var descs = [];
    for (var c of this.iterator()) { descs.push(c.toString()); }
    return descs;
  }

  static make (...args) {
    return new Constraints(...args);
  }

}

var constraints = Constraints.make;

export { Constraints, constraints };
