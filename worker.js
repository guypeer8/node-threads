const { isMainThread } = require('worker_threads');
const createWorker = require('./lib/create-worker');
const { writeFile } = require('fs');
const { join } = require('path');

if (isMainThread) {
    setTimeout(() => console.log('Timeout Message on main thread!'), 0);

    createWorker({
        file: __filename,
        message({ histogram, algorithm }) {
            const histogram_path = join(__dirname, 'sort', 'histograms', `histogram-${algorithm}.json`);
            writeFile(
                histogram_path,
                JSON.stringify(histogram, null, 2),
                err =>
                    err ? console.warn(err) : console.log(`Wrote "${algorithm}" Histogram.`)
            );
        },
    });

    setInterval(() => console.log('interval... (2 sec)'), 2000);
    console.warn('Main thread pid: ', process.pid);
} else {
    console.log('Making cpu intensive run!');

    createWorker({
        file: join(__dirname, 'cpu-intensive.js'),
        workerData: 'quicksort',
     });

    createWorker({
        file: join(__dirname, 'cpu-intensive.js'),
        workerData: 'mergesort',
    });
 }
