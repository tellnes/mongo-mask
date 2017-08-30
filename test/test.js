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


test( 'foo,bar'
    , { bar: true }
    , { map: { foo: false } }
    )

test( 'foo(id,name)'
    , { 'foo': true }
    , { map: { foo: 'foo' } }
    )

test( 'foo(id,name)'
    , { 'foo': true }
    , { map: { foo: true } }
    )



function test(pattern, result, options) {
  assert.deepEqual(mm(pattern, options), result, pattern)
}
