function swap(list, i, j) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

module.exports = swap;
