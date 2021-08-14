const binSearchNumArray = (n = 61, arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]) => {
    arr = arr.sort((a, b) => a - b); // sort array in case it's not yet sorted
    console.log(arr);
    let min = 0
    let max = arr.length - 1
    let mid = Math.floor((arr.length - 1) / 2) // mid is the initial guess
    while (arr[mid] != n) {
        if (arr[mid] < n) {
            console.debug('guess too low');
            min = mid + 1
        }
        if (arr[mid] > n) {
            console.debug('guess too high')
            max = mid - 1
        }
        console.debug('max min', max, min);
        mid = Math.floor((max + min) / 2)
        console.debug('mid', mid);
        // Return -1 in case n is not in the array
        if (!(max > min)) return -1
    }

}
console.log('Your number`s index, my liege:', binSearchNumArray(10));