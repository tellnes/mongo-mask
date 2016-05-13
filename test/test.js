'use strict'

const assert = require('assert')
const jsonMask = require('json-mask')
const mm = require('../')

test( 'foo'
    , { foo: true }
    )

test( 'foo/bar/baz'
    , { baz: true }
    , { map: { 'foo.bar': 'baz' } }
    )

test( 'foo/bar/baz'
    , { baz: true, daz: true }
    , { map: { 'foo.bar': [ 'baz', 'daz' ] } }
    )

test( 'foo/*'
    , { foo: true }
    )


test( jsonMask.compile('foo')
    , { foo: true }
    )


function test(pattern, result, options) {
  assert.deepEqual(mm(pattern, options), result, pattern)
}