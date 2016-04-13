module.exports = {
	extends: 'zipscene/env/browser',
	plugins: [ 'ember' ],
	rules: {
		/* eslint-disable quote-props */
		'ember/ember-extend-comments': [ 2, [ 'actions', 'classNames' ] ],
		'ember/ember-newline-extend': 2,
		'ember/ember-newline-reopenclass': 2,
		'ember/ember-reopenclass-comments': [ 2, [] ],
		'indent': [ 2, 2, { 'SwitchCase': 1 } ]
		/* eslint-enable quote-props */
	}
};
