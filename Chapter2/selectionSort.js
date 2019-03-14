const findSmallest = array => {
    let smallestIndex = 0;
    let smallest = array[smallestIndex];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallestIndex = i;
            smallest = array[i];
        }
    }

    return smallestIndex;
}

const selectionSort = array => {
    const sortedArray = [];
    const length = array.length;

    for (let i = 0; i < length; i++) {
        let smallestIndex = findSmallest(array);
        sortedArray.push(...array.splice(smallestIndex, 1));
    }

    return sortedArray;
}

const array = [45, 12, 97, 46, 84, 11, 3, 1, 90, 34, 23, 86, 42];

console.log(selectionSort(array)); // [1, 3, 11, 12, 23, 34, 42, 45, 46, 84, 86, 90, 97]
