# chrome-os

Use the Node `os` API in Chrome Apps

## Usage 

This library can be used directly with your browserify builds with targeting Chrome Packaged Apps. 

```
$ npm install chrome-os --save
$ browserify -r chrome-os:os index.js -o bundle.js
```

## Test 

```
$ npm test
```

This will load the folder `test/chrome-app` as an unpacked extension in chrome.
Test currently designed for windows and Mac Canary support for others accepted

## Permissions 

The following permissions need to be added to your chrome packaged app for this module.

```
  "permissions": [
  	"system.memory",
  	"system.cpu"
  ]
```