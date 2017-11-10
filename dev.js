require('./server/server');

const rollup = require('rollup');
const rollupConfig = require('./rollup.config');
const watcher = rollup.watch(rollupConfig);

watcher.on('event', (event) => {
    if (event.code !== 'BUNDLE_END') {
        return;
    }

    console.log(`Finished bundling ${event.input} (took ${event.duration} ms)`);
});
