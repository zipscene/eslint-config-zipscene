module.exports = {
	env: {
		'es6': true
	},
	rules: {
		'accessor-pairs': 0,
		'array-bracket-spacing': [ 2, 'always' ],
		'array-callback-return': 0,
		'arrow-body-style': [ 1, 'as-needed' ],
		'arrow-parens': 2,
		'arrow-spacing': 2,
		'block-scoped-var': 2,
		'block-spacing': 0,
		'brace-style': 2,
		'callback-return': 0,
		'camelcase': 2,
		'comma-dangle': 2,
		'comma-spacing': 2,
		'comma-style': 2,
		'complexity': 0,
		'computed-property-spacing': 0,
		'consistent-return': 0,
		'consistent-this': 0,
		'constructor-super': 2,
		'curly': [ 2, 'multi-line' ],
		'default-case': 0,
		'dot-location': 0,
		'dot-notation': 2,
		'eol-last': 0,
		'eqeqeq': 2,
		'func-names': 0,
		'func-style': 0,
		'generator-star-spacing': 2,
		'global-require': 0,
		'guard-for-in': 0,
		'handle-callback-err': 0,
		'id-blacklist': 0,
		'id-length': 0,
		'id-match': 0,
		'indent': [ 2, 'tab', { 'SwitchCase': 1 } ],
		'init-declarations': 0,
		'jsx-quotes': 0,
		'key-spacing': 2,
		'keyword-spacing': 2,
		'linebreak-style': [ 2, 'unix' ],
		'lines-around-comment': 0,
		'max-depth': 0,
		'max-len': [ 2, 120, 4 ],
		'max-nested-callbacks': 0,
		'max-params': [ 2, 6 ],
		'max-statements': 0,
		'max-statements-per-line': 0,
		'new-cap': 2,
		'new-parens': 2,
		'newline-after-var': 0,
		'newline-before-return': 0,
		'newline-per-chained-call': 0,
		'no-alert': 2,
		'no-array-constructor': 2,
		'no-bitwise': 2,
		'no-caller': 2,
		'no-case-declarations': 2,
		'no-catch-shadow': 2,
		'no-class-assign': 2,
		'no-cond-assign': 2,
		'no-confusing-arrow': 0,
		'no-console': 0,
		'no-const-assign': 2,
		'no-constant-condition': 2,
		'no-continue': 0,
		'no-control-regex': 2,
		'no-debugger': 2,
		'no-delete-var': 2,
		'no-div-regex': 2,
		'no-dupe-args': 2,
		'no-dupe-class-members': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-duplicate-imports': 0,
		'no-else-return': 0,
		'no-empty': 2,
		'no-empty-character-class': 2,
		'no-empty-function': 0,
		'no-empty-pattern': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-ex-assign': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-label': 0,
		'no-extra-parens': 0,
		'no-extra-semi': 2,
		'no-fallthrough': 0,
		'no-floating-decimal': 2,
		'no-func-assign': 2,
		'no-implicit-coercion': 0,
		'no-implicit-globals': 0,
		'no-implied-eval': 2,
		'no-inline-comments': 0,
		'no-inner-declarations': [ 2, 'both' ],
		'no-invalid-regexp': 2,
		'no-invalid-this': 0,
		'no-irregular-whitespace': 2,
		'no-iterator': 2,
		'no-label-var': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-lonely-if': 0,
		'no-loop-func': 2,
		'no-magic-numbers': 0,
		'no-mixed-requires': 0,
		'no-mixed-spaces-and-tabs': 2,
		'no-multi-spaces': 2,
		'no-multi-str': 2,
		'no-multiple-empty-lines': 0,
		'no-native-reassign': 2,
		'no-negated-condition': 0,
		'no-negated-in-lhs': 2,
		'no-nested-ternary': 2,
		'no-new': 0,
		'no-new-func': 2,
		'no-new-object': 2,
		'no-new-require': 2,
		'no-new-symbol': 2,
		'no-new-wrappers': 2,
		'no-obj-calls': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-param-reassign': 0,
		'no-path-concat': 2,
		'no-plusplus': 0,
		'no-process-env': 0,
		'no-process-exit': 0,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-regex-spaces': 0,
		'no-restricted-globals': 0,
		'no-restricted-imports': 0,
		'no-restricted-modules': 0,
		'no-restricted-syntax': [ 2, 'WithStatement' ],
		'no-return-assign': 2,
		'no-script-url': 2,
		'no-self-assign': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-shadow': 0,
		'no-shadow-restricted-names': 2,
		'no-spaced-func': 2,
		'no-sparse-arrays': 2,
		'no-sync': 0,
		'no-ternary': 0,
		'no-this-before-super': 2,
		'no-throw-literal': 2,
		'no-trailing-spaces': 2,
		'no-undef': 2,
		'no-undef-init': 0,
		'no-undefined': 0,
		'no-underscore-dangle': 0,
		'no-unexpected-multiline': 2,
		'no-unmodified-loop-condition': 0,
		'no-unneeded-ternary': 0,
		'no-unreachable': 2,
		'no-unused-expressions': 2,
		'no-unused-labels': 2,
		'no-unused-vars': [ 2, { 'args': 'none' } ],
		'no-use-before-define': [ 2, 'nofunc' ],
		'no-useless-call': 0,
		'no-useless-concat': 0,
		'no-useless-constructor': 0,
		'no-useless-escape': 0,
		'no-var': 2,
		'no-void': 2,
		'no-warning-comments': 0,
		'no-whitespace-before-property': 0,
		'no-with': 2,
		'object-curly-spacing': [ 2, 'always' ],
		'object-shorthand': 2,
		'one-var': 0,
		'one-var-declaration-per-line': 0,
		'operator-assignment': 0,
		'operator-linebreak': 0,
		'padded-blocks': 0,
		'prefer-arrow-callback': 0,
		'prefer-const': 0,
		'prefer-reflect': 0,
		'prefer-rest-params': 0,
		'prefer-spread': 2,
		'prefer-template': 2,
		'quote-props': [ 2, 'as-needed' ],
		'quotes': [ 2, 'single', 'avoid-escape' ],
		'radix': 0,
		'require-jsdoc': 0,
		'require-yield': 0,
		'semi': [ 2, 'always' ],
		'semi-spacing': 2,
		'sort-imports': 0,
		'sort-vars': 0,
		'space-before-blocks': [ 2, 'always' ],
		'space-before-function-paren': [ 2, 'never' ],
		'space-in-parens': [ 2, 'never' ],
		'space-infix-ops': 2,
		'space-return-throw-case': 2,
		'space-unary-ops': 2,
		'spaced-comment': 2,
		'strict': 0,
		'template-curly-spacing': 0,
		'use-isnan': 2,
		'valid-jsdoc': 0,
		'valid-typeof': 2,
		'vars-on-top': 2,
		'wrap-iife': 2,
		'wrap-regex': 0,
		'yield-star-spacing': 0,
		'yoda': [ 2, 'never', { 'exceptRange': true } ]
	}
};
