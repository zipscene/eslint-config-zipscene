module.exports = {
	extends: [ 'zipscene/modules/mocha', 'zipscene/modules/lodash', 'zipscene/modules/jsdoc' ],
	rules: {
		'arrow-body-style': [ 0, 'as-needed' ],
		// TODO: test/lib/fake-data-utils.js#14:31 Must disable because it complains about filter.
		//       Also an issue on client code with `$.find` when chained.
		'lodash/prefer-lodash-method': [ 0, { 'ignoreObjects': [ 'pasync', 'Router', '$' ] } ],
		// TODO: Write some rules for `lodash-extras` modded interface
		'lodash/no-extra-args': 0,
		// Turned off (instead of adjusting depth) because line length is a fine way to regulate
		'newline-per-chained-call': 0
	}
};
