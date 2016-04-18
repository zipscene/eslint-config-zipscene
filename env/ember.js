module.exports = {
	extends: 'zipscene/env/browser',
	plugins: [ 'ember', 'ember-cleanup' ],
	rules: {
		'ember-cleanup/cp-brace-expansion': 2,
		'ember-cleanup/destructuring': 1,
		'ember-cleanup/max-dep-keys': [ 2, { 'max': 5, 'tryExpandKeys': true } ],
		'ember-cleanup/no-console': 1,
		'ember-cleanup/no-dup-keys': [ 2, { 'tryExpandKeys': true } ],
		'ember-cleanup/no-expr-in-dep-keys': 2,
		'ember-cleanup/no-is-array': 2,
		'ember-cleanup/no-multi-dots': 1,
		'ember-cleanup/no-set-in-getter': 2,
		'ember-cleanup/no-settimeout': 2,
		'ember-cleanup/no-this-in-dep-keys': 2,
		'ember-cleanup/no-throw': 0, // We prefer throwing XErrors
		'ember-cleanup/no-typeof': [ 2, { 'disallowed': [ 'object' ] } ],
		'ember-cleanup/no-typo-in-dep-keys': [ 1, { 'ignoreExclamationMark': true } ],
		'ember-cleanup/one-level-each': 2,
		'ember/ember-extend-comments': [ 0, [ 'actions', 'classNames' ] ],
		'ember/ember-newline-extend': 2,
		'ember/ember-newline-reopenclass': 2,
		'ember/ember-reopenclass-comments': [ 2, [] ],
		'indent': [ 2, 2, { 'SwitchCase': 1 } ]
	}
};
