const { merge, mergesort } = require('./lib/merge');
const quicksort = require('./lib/quicksort');
const partition = require('./lib/partition');
const shuffle = require('./lib/shuffle');

const type = (process.argv[2] || 'quicksort').trim();
const sortAlgorithms = { mergesort, partition, quicksort };

function run() {
    switch (type) {
        case 'mergesort':
        case 'partition':
        case 'quicksort':
            return console.log(`${type}: ${sortAlgorithms[type]([ 3, 45, 234, 12, 32, 4, 35, 21, 12, 3, 77, 65, 43, 2 ])}`);

        case 'shuffle':
            return console.log('shuffle: ', shuffle([ 1, 2, 3, 4, 5, 6, 7, 8 ], 2, 5));

        case 'merge':
            return console.log('merge: ', merge([ 3, 4, 12, 32, 35, 45, 234 ], [ 2, 3, 12, 21, 43, 65, 77 ]));

        default:
            console.warn('No valid type has been passed');
    }
}

// run();

module.exports = {
    ...sortAlgorithms,
    shuffle,
    merge,
};
