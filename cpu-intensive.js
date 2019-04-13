const { parentPort, workerData } = require('worker_threads');
const createHistogram = require('./lib/create-histogram');
const { quicksort } = require('./sort');

setTimeout(() => console.log('Timeout Message from worker!'), 0);
console.warn('Worker thread pid: ', process.pid);
console.warn('Worker data: ', workerData);

const list = [];
for (let i = 0; i <= 1e6; i++) {
    list.push(Math.floor(Math.random() * 1e6));
}

const sortedHistogram = createHistogram(quicksort(list));
parentPort.postMessage(sortedHistogram);
