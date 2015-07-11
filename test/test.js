'use strict';

var Assert = require('assert')
var Util   = require('util')
var getOwnFunctionNames = require('../')

var fakeModule = {
  a    : 'a',
  b    : 'b',
  c    : 0x1,
  d    : function d () {},

  e    : Object.create(null),
  f    : {
    constructor: function constructor () {}
  },

  gggg : function gggg () {}
}

var fakeAncestor = {
  hhhh : function hhhh () {}
}

function FakeChild () {
  this.foo = function foo () {}
}

Object.setPrototypeOf(FakeChild, fakeAncestor)

var fakeChild = new FakeChild()

describe('getOwnFunctionNames', function describeModule () {
  it('should return only fns', function fnsTest1 () {
    var fns = getOwnFunctionNames(fakeModule)

    Assert.deepEqual(fns, [ 'd', 'gggg' ], 'Only d & gggg should be deemed a fn')
  })

  it('should return only fns', function fnsTest2 () {
    var fns = getOwnFunctionNames(fakeChild)

    Assert.deepEqual(fns, [ 'foo' ], 'Only foo should be deemed a fn')
  })
})
