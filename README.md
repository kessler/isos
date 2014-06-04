# isos

test the current OS

on windows:
```
	var isOs = require('isos')

	assert.ok(isOs('windows'))
	assert.ok(isOs('win32'))
```

on mac:
```
	var isOs = require('isos')

	assert.ok(isOs('mac'))
	assert.ok(isOs('darwin'))
	assert.ok(isOs('osx'))
```
