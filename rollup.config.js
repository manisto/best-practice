let rollupTypescript = require('rollup-plugin-typescript');
let typescript = require('typescript');

module.exports = {
    input: 'app/index.ts',
    output: {
        file: 'app/index.js',
        format: 'iife',
        name: 'bestPractice'
    },
    plugins: [
        rollupTypescript({
            typescript: typescript
        })
    ]
};