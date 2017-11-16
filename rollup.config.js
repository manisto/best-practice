let typescript = require('typescript');
let typescriptPlugin = require('rollup-plugin-typescript');
let htmlPlugin = require('rollup-plugin-html');

module.exports = {
    sourcemap: true,
    input: 'app/index.ts',
    output: {
        file: 'app/index.js',
        format: 'iife',
        name: 'bestPractice'
    },
    plugins: [
        htmlPlugin({
            include: '**/*.html'
        }),
        typescriptPlugin({
            typescript: typescript
        })
    ]
};