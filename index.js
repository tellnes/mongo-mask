'use strict'

const jsonMask = require('json-mask')

module.exports = function(mask, options) {
  options = options || {}
  if (typeof mask === 'string') mask = jsonMask.compile(mask)
  return walk({}, options.map || {}, '', mask)
}

function walk(obj, mapping, path, mask) {
  Object.keys(mask).forEach((key) => {
    const comb = path + key
    if (key === '*')
      set(obj, path.slice(0, -1))
    else if (mapping[comb])
      map(obj, mapping, comb)
    else if (mask[key].properties)
      walk(obj, mapping, comb + '.', mask[key].properties)
    else
      set(obj, comb)
  })
  return obj
}

function map(obj, mapping, path) {
  if (Array.isArray(mapping[path]))
    mapping[path].forEach((pa) => set(obj, pa))
  else
    set(obj, mapping[path])
}

function set(obj, path) {
  obj[path] = true
}
