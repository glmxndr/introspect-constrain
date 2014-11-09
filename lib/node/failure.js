"use strict";
Object.defineProperties(exports, {
  Failure: {get: function() {
      return Failure;
    }},
  failure: {get: function() {
      return failure;
    }},
  __esModule: {value: true}
});
var $__lodash__;
'use strict';
var _ = ($__lodash__ = require("lodash"), $__lodash__ && $__lodash__.__esModule && $__lodash__ || {default: $__lodash__}).default;
var Failure = function Failure(constraint, value, context) {
  Object.assign(this, {
    constraint: constraint,
    value: value,
    context: context
  });
};
var $Failure = Failure;
($traceurRuntime.createClass)(Failure, {toString: function() {
    return (("Failure {\n  context:\n    '" + this.context + "',\n  value:\n    " + JSON.stringify(this.value) + ",\n  constraint:\n    'value should " + this.constraint + "'\n}\n"));
  }}, {make: function() {
    for (var args = [],
        $__2 = 0; $__2 < arguments.length; $__2++)
      args[$__2] = arguments[$__2];
    return new (Function.prototype.bind.apply($Failure, $traceurRuntime.spread([null], args)))();
  }});
var failure = Failure.make;
;
