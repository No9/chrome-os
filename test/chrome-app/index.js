var os = require('../../chrome')
var test = require('tape')
var rpt = document.getElementById('outputlist')

test('api test', function (t) {
  t.plan(1)
  t.equal(os.type(), 'Chrome Packaged Application', 'OS Type')
})

test.createStream().on('data', function (row) {
  var itm = document.createElement('li')
  var textnode = document.createTextNode(row)
  itm.appendChild(textnode)
  rpt.appendChild(itm)
})
