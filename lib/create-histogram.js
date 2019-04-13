function createHistogram(list) {
    const histogram = {};
    for (let item of list)
        histogram[item] = (histogram[item] || 0) + 1;

    return histogram;
}

module.exports = createHistogram;
