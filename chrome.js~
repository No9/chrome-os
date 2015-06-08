var platformMap = {
        'mac': 'darwin',
        'win': 'win32',
        'android': 'android',
        'cros': 'cros',
        'linux': 'linux',
        'openbsd': 'openbsd',
        'notsupported': 'Not Supported'
}

exports.endianness = function () { return 'LE' }

exports.hostname = function () {
  var location = window.location
  if (typeof location !== 'undefined') {
    return location.hostname
  }
  else return ''
}

exports.loadavg = function () { return [] }

exports.uptime = function () { return 0 }

exports.freemem = function () {
  return Number.MAX_VALUE
}

exports.totalmem = function () {
  return Number.MAX_VALUE
}

exports.cpus = function (cb) {
  if (typeof cb !== 'function') {
    console.warn('The Synchronious cpu call is not supported on Browserify CPA. Consider the Async call by passing a function')
    return 'Not Supported'
  }
  chrome.system.cpu.getInfo(cb)  // eslint-disable-line
}

exports.type = function () { return 'Chrome Packaged Application' }

exports.release = function () {
  if (typeof navigator !== 'undefined') {
    return navigator.appVersion
  }
  return ''
}

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} }

exports.arch = function () { return 'Not Supported' }

exports.platform = function (cb) {
  if (typeof cb !== 'function') {
    console.warn('The Synchronious platform call is not supported on Browserify CPA. Consider the Async call by passing a function')
    return platformMap['notsupported']
  }
  chrome.runtime.getPlatformInfo(function (info) { // eslint-disable-line
    cb(platformMap[info.os])
  })
}

exports.tmpdir = exports.tmpDir = function () {
  return '/tmp'
}

exports.EOL = '\n'
