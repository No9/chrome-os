var os = require('../../chrome')
var test = require('tape')
var rpt = document.getElementById('outputlist')

test('api test', function (t) {
  t.plan(5)
  t.equal(os.type(), 'Chrome Packaged Application', 'OS Type')
  t.equal(os.platform(), 'Not Supported', 'Sync Platform')
  t.equal(os.cpus(), 'Not Supported', 'Sync cpus message is not supported')
  os.cpus(function (cpuInfo) {
    t.ok(cpuInfo.numOfProcessors > 0)
  })
  os.platform(function (info) {
    t.notEqual(info.os, 'Not Supported')
  })
})

test.createStream().on('data', function (row) {
  var itm = document.createElement('li')
  var textnode = document.createTextNode(row)
  itm.appendChild(textnode)
  rpt.appendChild(itm)
})
