# chrome-os

Use the Node `os` API in Chrome Apps

## Usage 

This library can be used directly with your browserify builds with targeting Chrome Packaged Apps. 

```
$ npm install chrome-os --save
$ browserify -r chrome-os:os index.js -o test/chrome-app/bundle.js
```

## Test 

Build the solution 

```
$ npm test
```

Then load the folder `test/chrome-app` as an unpacked extension in chrome.
Open the app and the tests will be run with results shown in the console.