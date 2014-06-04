var isOs = require('./index.js')
var assert = require('assert')

describe('isOs', function () {
	it('tests os', function () {
		assert.ok(isOs('windows', 'win32'))
		assert.ok(isOs('win32', 'win32'))
		assert.ok(isOs('osx', 'darwin'))
		assert.ok(isOs('mac', 'darwin'))
	})
})