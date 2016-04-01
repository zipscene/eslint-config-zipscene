module.exports = {
  extends: "zipscene/environments/frontend",
  plugins: ["ember"/*, "ember-cleanup"*/],
  env: { "embertest": true },
  rules: {
    "ember/ember-extend-comments": [2, ["actions", "classNames"]],
    "ember/ember-reopenclass-comments": [2, []],
    "ember/ember-newline-extend": 2,
    "ember/ember-newline-reopenclass": 2
  }
}
