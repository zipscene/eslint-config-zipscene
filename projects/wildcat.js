module.exports = {
	extends: [ 'zipscene/modules/ember' ],
	rules: {
		'ember/ember-reopenclass-comments': [ 2, [
			'_class', 'localStorage', 'zsapiClient', 'rawResponse'
		] ]
	}
};
