'use strict';
import _ from 'lodash';

/**
 * A failure contains the data corresponding to:
 *  - the constraint that failed
 *  - the value on which the constraint failed
 *  - the context in which the constraint was evaluated
 */
class Failure {
  constructor (constraint, value, context) {
    Object.assign(this, {constraint, value, context});
  }

  toString() {
    return (`Failure {
  context:
    '${this.context}',
  value:
    ${JSON.stringify(this.value)},
  constraint:
    'value should ${this.constraint}'\n}\n`);
  }

  static make (...args) {
    return new Failure(...args);
  }
}

var failure = Failure.make;

export { Failure, failure };
