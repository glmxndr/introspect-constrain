'use strict';
import _ from 'lodash';
import { failure } from './failure';

/**
 * A failure report contains a list of failures.
 *
 * It also allows to attach listener functions to be executed on each
 * failure added to the report.
 */
class Report {
  constructor () {
    this.failures = [];
    this.listeners = [];
    this._context = ['o'];
  }

  add (failure) {
    this.listeners.forEach((evt) => evt(failure));
    this.failures.push(failure); return this;
  }

  combine (report) {
    report.failures.forEach((f) => this.add(f));
  }

  combineAll (reports) {
    reports.forEach((r) => this.combine(r));
  }

  pushContext (str) {
    this._context.push(this.context + str);
    return this;
  }
  popContext() {
    this._context.pop();
    return this;
  }
  get context() {
    return this._context[this._context.length - 1];
  }

  onFailure (fn) {
    this.listeners.push(fn);
    return this;
  }

  log () { return this.onFailure( (f) => console.log(f.toString()) ); }

  errors () { return this.failures; }

  ok () { return this.failures.length === 0; }

  static make (...args) {
    return new Report(...args);
  }
}

/**
 * Report construction method
 * @param  {Object} params optional parameters of the report
 * @return {Report} the newly created report
 */
var report = function (params = {}) {
  var r = new Report();
  if (params.onFailure) {
    r.onFailure(params.onFailure);
  }
  if (params.log) {
    r.onFailure( (f) => console.log(f.toString()) );
  }
  return r;
};

export { Report, report };
