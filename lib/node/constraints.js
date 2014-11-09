"use strict";
Object.defineProperties(exports, {
  Constraints: {get: function() {
      return Constraints;
    }},
  constraints: {get: function() {
      return constraints;
    }},
  __esModule: {value: true}
});
var $__constraint__;
'use strict';
var constraint = ($__constraint__ = require("./constraint"), $__constraint__ && $__constraint__.__esModule && $__constraint__ || {default: $__constraint__}).constraint;
var Constraints = function Constraints() {
  var params = arguments[0] !== (void 0) ? arguments[0] : {};
  Object.assign(this, params);
  this.csts = [];
};
var $Constraints = Constraints;
($traceurRuntime.createClass)(Constraints, {
  add: function() {
    for (var args = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      args[$__4] = arguments[$__4];
    this.csts.push(constraint.apply(null, $traceurRuntime.spread(args)));
    return this;
  },
  checkAll: function(o, r) {
    return this.csts.map((function(c) {
      return c.check(o, r);
    })).filter((function(f) {
      return f;
    }));
  },
  checkSome: function(o, r) {
    var fs = this.checkAll(o, r);
    if (fs.length < this.csts.length) {
      return [];
    }
    return fs;
  },
  get iterator() {
    var csts = this.csts;
    return $traceurRuntime.initGeneratorFunction(function $__6() {
      var c,
          $__7,
          $__8,
          $__9,
          $__10;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $__7 = [];
              $__8 = csts;
              for ($__9 in $__8)
                $__7.push($__9);
              $ctx.state = 14;
              break;
            case 14:
              $__10 = 0;
              $ctx.state = 12;
              break;
            case 12:
              $ctx.state = ($__10 < $__7.length) ? 8 : -2;
              break;
            case 4:
              $__10++;
              $ctx.state = 12;
              break;
            case 8:
              c = $__7[$__10];
              $ctx.state = 9;
              break;
            case 9:
              $ctx.state = (!(c in $__8)) ? 4 : 6;
              break;
            case 6:
              $ctx.state = 2;
              return csts[c];
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__6, this);
    });
  },
  display: function() {
    var descs = [];
    for (var $__2 = this.iterator()[Symbol.iterator](),
        $__3; !($__3 = $__2.next()).done; ) {
      var c = $__3.value;
      {
        descs.push(c.toString());
      }
    }
    return descs;
  }
}, {make: function() {
    for (var args = [],
        $__5 = 0; $__5 < arguments.length; $__5++)
      args[$__5] = arguments[$__5];
    return new (Function.prototype.bind.apply($Constraints, $traceurRuntime.spread([null], args)))();
  }});
var constraints = Constraints.make;
;
