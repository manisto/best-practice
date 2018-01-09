let typescript = require('typescript');
let typescriptPlugin = require('rollup-plugin-typescript');

module.exports = {
    sourcemap: true,
    input: 'app/index.ts',
    output: {
        file: 'app/index.js',
        format: 'iife',
        name: 'bestPractice'
    },
    plugins: [
        typescriptPlugin({
            typescript: typescript
        })
    ]
};