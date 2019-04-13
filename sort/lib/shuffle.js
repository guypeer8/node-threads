const swap = require('./swap');

function shuffle(list, low = 0, high) {
    high = high || list.length;
    if (high - low > 1) {
        for (let i = low + 1; i < high; i++) {
            const j = Math.floor(Math.random() * (i - low)) + low;
            swap(list, i, j);
        }
    }

    return list;
}

module.exports = shuffle;
