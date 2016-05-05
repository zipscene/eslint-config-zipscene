module.exports = {
	plugins: [ 'lodash' ],
	extends: [ 'plugin:lodash/recommended' ],
	rules: {
		'lodash/prefer-constant': [ 2, false, true ],
		'lodash/chain-style': [ 2, 'explicit' ]
	}
};
