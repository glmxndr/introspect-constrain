# introspect-constrain

Provides rudimentary logic for constraint checking.

<!-- toc -->

* [Install](#install)
* [API](#api)
  * [`contraint`](#contraint)
  * [`constraints`](#constraints)
  * [`failure`](#failure)
  * [`report`](#report)

<!-- toc stop -->

## Install

    npm install introspect-constrain

## API

### `contraint`

This function returns a `Constraint` object.

A constraint is basically a wrapper around a predicate function,
allowing to check values with this predicate function (in a given context
passed by a `Report` object).

### `constraints`

This function returns a `Constraints` object which is basically a list
of constraints, which can all be checked on the same value/report with the
`checkAll` function.

### `failure`

This function returns a `Failure` object. A failure is created each time
a constraint predicate returns a falsey value. The failure is always added
to the report passed to the constraint `check` function.

### `report`

This function returns a `Report` object, which is basically a list of failures.
Reports can be combined to import all the failures of several reports into
a single one.