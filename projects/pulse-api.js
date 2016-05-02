module.exports = {
	extends: [ 'zipscene/environments/node', 'zipscene/projects/pulse' ],
	rules: {
		// TODO: test/lib/fake-data-utils.js#14:31 Must diable because it complains about filter
		'lodash/prefer-lodash-method': [ 0, { 'ignoreObjects': [ 'pasync' ] } ]
	}
};
