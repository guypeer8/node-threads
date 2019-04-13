const partition = require('./partition');
const shuffle = require('./shuffle');

function quicksort(list, low = 0, high) {
    if (list.length > 1) {
        high = high || list.length - 1;
        shuffle(list, low, high);
        const pivot = partition(list, low, high);
        if (low < pivot - 1) quicksort(list, low, pivot - 1);
        if (pivot < high) quicksort(list, pivot, high);
    }

    return list;
}

module.exports = quicksort;
