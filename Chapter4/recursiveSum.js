const recursiveSum = array => {
    if (!array.length) {
        return 0;
    }
    return array[0] + recursiveSum(array.slice(1));
}

const array = [2, 5, 7];
console.log(recursiveSum(array)); // 14

const arrayEmpty = [];
console.log(recursiveSum(arrayEmpty)); // 0
