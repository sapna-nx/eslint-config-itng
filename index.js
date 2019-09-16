module.exports = {
    'extends': [
        'eslint-config-airbnb/base',
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'rules': {
        'indent': 0,
        'comma-dangle': [2, 'always-multiline'],
        'curly': [2, 'multi-or-nest'],
        'no-use-before-define': [2, 'nofunc'],
        'object-curly-spacing': [2, 'never'],
        'space-before-function-paren': [2, 'never'],
        'no-unused-vars': [2, {
            'vars': 'all',
            'varsIgnorePattern': '__',
            'args': 'after-used',
        }],
        'quote-props': [2, 'consistent-as-needed', {
            'keywords': true,
            'numbers': true,
        }],
    },
};
