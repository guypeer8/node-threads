const { isMainThread } = require('worker_threads');
const createWorker = require('./lib/create-worker');
const { writeFile } = require('fs');
const { join } = require('path');

if (isMainThread) {
    setTimeout(() => console.log('Timeout Message on main thread!'), 0);

    createWorker({
        file: __filename,
        message({ histogram, algorithm }) {
            const histogram_path = join(__dirname, 'histograms', `${algorithm}-histogram.json`);
            writeFile(
                histogram_path,
                JSON.stringify(histogram, null, 2),
                err => {
                    if (err) {
                        return console.warn(err);
                    }
                    console.log(`Wrote "${algorithm}" Histogram.`);
                }
            );
        },
    });

    setInterval(() => console.log('interval... (2 sec)'), 2000);
    console.warn('Main thread pid: ', process.pid);
} else {
    console.log('Making cpu intensive run!');

    const file = join(__dirname, 'cpu-intensive.js');
    createWorker({ file, workerData: 'quicksort' });
    createWorker({ file, workerData: 'mergesort' });
 }
