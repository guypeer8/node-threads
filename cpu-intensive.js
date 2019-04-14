const { parentPort, workerData } = require('worker_threads');
const createHistogram = require('./lib/create-histogram');
const { quicksort, mergesort } = require('./sort');

const sortFuncs = { quicksort, mergesort };
const ITERATIONS = 1e5 * 2;

setTimeout(() => console.log('Timeout Message from worker!'), 0);
console.warn('Worker thread pid: ', process.pid);
console.warn('Worker data (Sort Algorithm): ', workerData);

const list = [];
for (let i = 0; i <= ITERATIONS; i++) {
    list.push(Math.floor(Math.random() * ITERATIONS));
}

const sortedList = sortFuncs[workerData](list);
const sortedHistogram = createHistogram(sortedList);
parentPort.postMessage({
    histogram: sortedHistogram,
    algorithm: workerData,
});
