# mongo-mask

[![Version npm](https://img.shields.io/npm/v/mongo-mask.svg?style=flat-square)](https://www.npmjs.com/package/mongo-mask)[![npm Downloads](https://img.shields.io/npm/dm/mongo-mask.svg?style=flat-square)](https://www.npmjs.com/package/mongo-mask)[![Build Status](https://img.shields.io/travis/tellnes/mongo-mask/master.svg?style=flat-square)](https://travis-ci.org/tellnes/mongo-mask)[![Coverage Status](https://img.shields.io/coveralls/tellnes/mongo-mask/master.svg?style=flat-square)](https://coveralls.io/github/tellnes/mongo-mask?branch=master)[![Dependencies](https://img.shields.io/david/tellnes/mongo-mask.svg?style=flat-square)](https://david-dm.org/tellnes/mongo-mask)[![Tips](http://img.shields.io/gratipay/tellnes.png?style=flat-square)](https://gratipay.com/~tellnes/)


`mongo-mask` converts a [json-mask](https://www.npmjs.com/package/json-mask)
pattern to a mongodb projection object which can be used when querying mongodb
for data.


## Express example

```js
var mongoMask = require('mongo-mask')

const map =
  { id: '_id' }

app.get('/item', (req, res, next) => {
  const fields = req.query.fields ? mongoMask(req.query.fields, { map }) : null
  mongoCollection.findOne({}, fields, (err, doc) => {
    if (err) return next(err)
    doc.id = doc._id
    delete doc._id
    res.json(doc)
  })
})
```


## Install

```bash
npm install -S mongo-mask
```


## License

MIT
