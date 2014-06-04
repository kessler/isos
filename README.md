# isos

test the current OS

on mac:
```
	var isOs = require('isos')

	assert.ok(isOs('mac'))
	assert.ok(isOs('darwin'))
	assert.ok(isOs('osx'))
```

on windows:
```
	var isOs = require('isos')

	assert.ok(isOs('linux'))
```

on windows:
```
	var isOs = require('isos')

	assert.ok(isOs('windows'))
	assert.ok(isOs('win32'))
```

etc...