module.exports = {
	extends: [ 'zipscene/environments/browser', 'zipscene/modules/ember', 'zipscene/projects/pulse' ],
	rules: {
		'ember/ember-extend-comments': [ 0, [] ],
		'ember/ember-reopenclass-comments': [ 0, [] ],
		'ember/ember-newline-extend': 0,
		'ember/ember-newline-reopenclass': 0,
		'lodash/no-extra-args': 0 // TODO: Write some rules for `lodash-extras` modded interface
	}
};
