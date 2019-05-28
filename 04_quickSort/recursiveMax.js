const recursiveMax = array => {
    if (array.length === 2) {
        if (array[0] >= array[1]) {
            return array[0];
        }
        return array[1];
    }

    const subMax = recursiveMax(array.slice(1));

    if (array[0] >= subMax) {
        return array[0];
    }
    return subMax;
}

const array = [1, 9, 5, 2, 14, 7, 12];
console.log(recursiveMax(array)); // 14
