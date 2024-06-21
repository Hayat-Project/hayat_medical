module.exports = {
    root: true,
    env: {
        node: true,   // Node.js global variables and Node.js scoping
        es2021: true  // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
    },
    extends: [
        "eslint:recommended",  // Use the recommended rules from ESLint itself
        "plugin:node/recommended" // Enforce best practices for Node.js
    ],
    parserOptions: {
        ecmaVersion: 12,  // Modern ECMAScript syntax
        sourceType: 'module'  // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
        'no-unused-vars': 'warn', // Warn on variables that are declared but not used
        'no-console': 'off', // Useful for allowing console logs in Firebase Functions
        'node/no-unsupported-features/es-syntax': ['error', {
            'version': '>=12.0.0', // Specify the Node.js version to check for supported ECMAScript features
            'ignores': [] // Optionally ignore specific files
        }]
    },
    settings: {
        node: {
            // Options to configure plugin-node
            tryExtensions: ['.js', '.json', '.node', '.cjs'] // List of extensions that will be considered by the plugin
        }
    }
};
