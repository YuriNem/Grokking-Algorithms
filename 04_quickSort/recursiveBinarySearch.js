const recursiveBinarySearch = (array, element, left, right) => {
    const mid = Math.floor((left + right) / 2);
    const guess = array[mid];

    if (element === guess) {
        return mid;
    } else if (left === right) {
        return null;
    }

    if (element > guess) {
        return recursiveBinarySearch(array, element, mid + 1, right);
    }
    return recursiveBinarySearch(array, element, left, mid - 1);
}

const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.log(recursiveBinarySearch(array, 21, 0, array.length)); // 7
console.log(recursiveBinarySearch(array, 22, 0, array.length)); // null
