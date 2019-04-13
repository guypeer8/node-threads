const { Worker, isMainThread, parentPort, threadId } = require('worker_threads');

function createWorker({ file = null, workerData = null, message = () => {}, error = () => {}, exit = () => {} } = {}) {
    if (!file)
        throw new Error('Please provide an absolute file path');

    const worker = new Worker(file, {workerData} || {});

    worker.on('message', m => {
        message(m);
        !isMainThread && parentPort.postMessage(m);
    });

    worker.on('error', err => {
        console.warn('Error: ', err);
        error(err);
    });

    worker.on('exit', code => {
        console.warn(`Exit Code: ${code}, Thread Id: ${threadId} ${threadId === 0 ? ' (Main)' : ' (Worker)' }`);
        exit(code);
    });
}

module.exports = createWorker;
