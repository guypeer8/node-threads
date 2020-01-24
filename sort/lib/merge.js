function merge(l1, l2) {
    const merged = [];

    while (l1.length > 0 || l2.length > 0) {
        if (l1.length === 0 || l1[0] >= l2[0]) {
            merged.push(l2.shift());
        } else if (l2.length === 0 || l1[0] <= l2[0]) {
            merged.push(l1.shift());
        }
    }

    return merged;
}

function mergesort(list) {
    if (list.length <= 1) return list;
    const middle = Math.floor(list.length / 2);

    return merge(
        mergesort(list.slice(0, middle)),
        mergesort(list.slice(middle))
    );
}

module.exports = {
    mergesort,
    merge,
};
