"use strict";
Object.defineProperties(exports, {
  Constraint: {get: function() {
      return Constraint;
    }},
  constraint: {get: function() {
      return constraint;
    }},
  __esModule: {value: true}
});
var $__lodash__,
    $__report__,
    $__failure__;
'use strict';
var _ = ($__lodash__ = require("lodash"), $__lodash__ && $__lodash__.__esModule && $__lodash__ || {default: $__lodash__}).default;
var report = ($__report__ = require("./report"), $__report__ && $__report__.__esModule && $__report__ || {default: $__report__}).report;
var failure = ($__failure__ = require("./failure"), $__failure__ && $__failure__.__esModule && $__failure__ || {default: $__failure__}).failure;
var Constraint = function Constraint(obj) {
  Object.assign(this, obj);
};
var $Constraint = Constraint;
($traceurRuntime.createClass)(Constraint, {
  check: function(value) {
    var r = arguments[1] !== (void 0) ? arguments[1] : report();
    var errFound,
        f;
    r.pushContext(this.relCtx);
    try {
      errFound = !this.predicate(value, r);
    } catch (e) {
      errFound = true;
    }
    if (errFound) {
      f = failure(this, value, r.context);
      r.add(f);
    }
    r.popContext();
    return f;
  },
  toString: function() {
    return this.repr;
  }
}, {make: function(repr, predicate) {
    var relCtx = arguments[2] !== (void 0) ? arguments[2] : '';
    var obj = _.isObject(repr) ? repr : {
      repr: repr,
      predicate: predicate,
      relCtx: relCtx
    };
    obj.relCtx = obj.relCtx || '';
    return new $Constraint(obj);
  }});
var constraint = Constraint.make;
;
