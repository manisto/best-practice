import rollupTypescript from 'rollup-plugin-typescript';
import typescript from 'typescript';

export default {
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