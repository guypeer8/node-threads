const swap = require('./swap');

function partition(list, low = 0, high) {
    high = high || list.length - 1;
    const pivot = list[low];
    let i = low, j = high;

    while (i <= j) {
        while (list[i] < pivot) i++;
        while (list[j] > pivot) j--;
        if (i <= j) swap(list, i++, j--);
    }

    return i;
}

module.exports = partition;
