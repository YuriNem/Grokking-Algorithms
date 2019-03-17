const quickSort = array => {
    if (array.length < 2) {
        return array;
    }

    const pivot = array[0];
    const lessPivotArray = array.slice(1).filter(element => element <= pivot);
    const greaterPivotArray = array.slice(1).filter(element => element > pivot);

    return [...quickSort(lessPivotArray), pivot, ...quickSort(greaterPivotArray)];
}

const array = [45, 12, 97, 46, 84, 11, 3, 1, 90, 34, 23, 86, 42];

console.log(quickSort(array)); // [1, 3, 11, 12, 23, 34, 42, 45, 46, 84, 86, 90, 97]
