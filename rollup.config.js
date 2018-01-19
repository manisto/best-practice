let typescript = require('typescript');
let typescriptPlugin = require('rollup-plugin-typescript');
let commonjs = require('rollup-plugin-commonjs');
let resolve = require('rollup-plugin-node-resolve');

module.exports = {
    sourcemap: true,
    input: 'app/index.ts',
    output: {
        file: 'app/index.js',
        format: 'iife',
        name: 'bestPractice'
    },
    plugins: [
        commonjs(),
        typescriptPlugin({
            typescript: typescript
        }),
        resolve()
    ]
};