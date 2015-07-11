'use strict';

var isUndefined = require('amp-is-undefined'),
    isFunction  = require('amp-is-function')

// getOwnPropertyNames limited to functions

function getOwnFunctionNames (o) {
  if (isUndefined(o)) {
    return []
  }

  return Object.getOwnPropertyNames(o)
    .filter(function filter (n) {
      return o.hasOwnProperty(n) &&
             o.propertyIsEnumerable(n) &&
             isFunction(o[n])
    })
}

module.exports = getOwnFunctionNames
