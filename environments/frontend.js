module.exports = {
  extends: "zipscene/core",
  env: {
    "shared-node-browser": false,
    "browser": true
  },
  rules: {
    "indent": [2, 2, { "SwitchCase": 1 }],
    "array-bracket-spacing": [2, "never"],
    "no-alert": 2
  }
};
