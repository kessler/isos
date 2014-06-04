var options = {
	'darwin': ['darwin', 'mac', 'macos', 'osx'],
	'freebsd': ['freebsd'],
	'linux': ['linux'],
	'sunos': ['sunos'],
	'win32': ['win32', 'windows']
}

module.exports = function(os, platform) {
	platform = platform || process.platform

	var aliases = options[platform]

	if (!aliases) throw new Error('unknown opearting system')

	return aliases.indexOf(os) > -1
}