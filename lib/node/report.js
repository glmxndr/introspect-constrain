"use strict";
Object.defineProperties(exports, {
  Report: {get: function() {
      return Report;
    }},
  report: {get: function() {
      return report;
    }},
  __esModule: {value: true}
});
var $__lodash__,
    $__failure__;
'use strict';
var _ = ($__lodash__ = require("lodash"), $__lodash__ && $__lodash__.__esModule && $__lodash__ || {default: $__lodash__}).default;
var failure = ($__failure__ = require("./failure"), $__failure__ && $__failure__.__esModule && $__failure__ || {default: $__failure__}).failure;
var Report = function Report() {
  this.failures = [];
  this.listeners = [];
  this._context = ['o'];
};
var $Report = Report;
($traceurRuntime.createClass)(Report, {
  add: function(failure) {
    this.listeners.forEach((function(evt) {
      return evt(failure);
    }));
    this.failures.push(failure);
    return this;
  },
  combine: function(report) {
    var $__2 = this;
    report.failures.forEach((function(f) {
      return $__2.add(f);
    }));
  },
  combineAll: function(reports) {
    var $__2 = this;
    reports.forEach((function(r) {
      return $__2.combine(r);
    }));
  },
  pushContext: function(str) {
    this._context.push(this.context + str);
    return this;
  },
  popContext: function() {
    this._context.pop();
    return this;
  },
  get context() {
    return this._context[this._context.length - 1];
  },
  onFailure: function(fn) {
    this.listeners.push(fn);
    return this;
  },
  log: function() {
    return this.onFailure((function(f) {
      return console.log(f.toString());
    }));
  },
  errors: function() {
    return this.failures;
  },
  ok: function() {
    return this.failures.length === 0;
  }
}, {make: function() {
    for (var args = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      args[$__4] = arguments[$__4];
    return new (Function.prototype.bind.apply($Report, $traceurRuntime.spread([null], args)))();
  }});
var report = function() {
  var params = arguments[0] !== (void 0) ? arguments[0] : {};
  var r = new Report();
  if (params.onFailure) {
    r.onFailure(params.onFailure);
  }
  if (params.log) {
    r.onFailure((function(f) {
      return console.log(f.toString());
    }));
  }
  return r;
};
;
