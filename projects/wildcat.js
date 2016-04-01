module.exports = {
  extends: 'zipscene/frameworks/ember',
  rules: {
    "ember/ember-reopenclass-comments": [2, [
      "_class", "localStorage", "zsapiClient", "rawResponse"
    ]]
  }
}
