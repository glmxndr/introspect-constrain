'use strict';
import _ from 'lodash';
import { report } from './report';
import { failure } from './failure';

/**
 * A constraint is basically a predicate function (taking an argument
 * and returning a boolean), with some context information.
 *
 * A constraint may be composed of several sub constraints.
 *
 * The predicate takes two arguments :
 *  - the value to test the constraint against,
 *  - a report object, allowing the constraint to pass the report down
 *    to sub-constraints.
 *
 * A Constraint is checked using its check function.
 *
 */
class Constraint {

  /**
   * Constraint constructor
   *
   * @param {Object} obj an object with properties:
   *    - {String} repr representation of the constraint
   *    - {(Any, Report) -> Boolean} predicate constraint function
   *    - {String} relCtx relative context
   */
  constructor (obj) {
    Object.assign(this, obj);
  }

  /**
   * Check the constraint for the given value, using the given failure report
   * to notify the possible failure.
   *
   * @param {Any}    value the value to be checked
   * @param {Report} r     the failure report
   *
   * @return {Failure}     the failure, or undefined if the predicate returned true
   */
  check (value, r = report()) {
    var errFound, f;
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
  }

  toString () {
    return this.repr;
  }

  /**
   * Overloaded constructor function
   */
  static make (repr, predicate, relCtx = '') {
    var obj = _.isObject(repr) ? repr
            : { repr, predicate, relCtx };
    obj.relCtx = obj.relCtx || '';
    return new Constraint(obj);
  }
}

var constraint = Constraint.make;

export { Constraint, constraint };
