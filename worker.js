const { isMainThread } = require('worker_threads');
const createWorker = require('./lib/create-worker');
const { writeFile } = require('fs');
const { join } = require('path');

if (isMainThread) {
    setTimeout(() => console.log('Timeout Message on main thread!'), 0);
    createWorker({
        file: __filename,
        message(histogram) {
            writeFile('histogram.json', JSON.stringify(histogram, null, 2), err => 
                err ? console.warn(err) : console.log('Wrote Histogram.')
            );
        },
    });
    setInterval(() => console.log('interval... (2 sec)'), 2000);
    console.warn('Main thread pid: ', process.pid);
} else {
    console.log('Making cpu intensive run!');
    createWorker({ 
        file: join(__dirname, 'cpu-intensive.js'), 
        workerData: new Date().getTime(),
     });
 }
