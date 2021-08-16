// Inserts an element into a sorted array, while keeping it sorted.
const insert = function (array, rightIndex, value) {
    var i;
    for (i = rightIndex; i >= 0; i--) {
        // slides a bigger element over to the right
        if (array[i] > value) {
            array[i + 1] = array[i];
            // Edge case
            if (i == 0) {
                array[i] = value;
                break;
            }
        }
        if (value >= array[i]) {
            // Replaces smaller/equal element on the right
            array[i + 1] = value;
            break;
        }
    }
};
var array = [1, 2, 4, 5, 6];
insert(array, 4, 0);
console.log(array);
