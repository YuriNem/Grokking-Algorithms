const binarySearch = (array, element) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const guess = array[mid];

        if (element === guess) {
            return mid;
        }

        if (element > guess) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return null;
};

const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.log(binarySearch(array, 21)); // 7
console.log(binarySearch(array, 22)); // null
