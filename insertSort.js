// Inserts an element into a sorted array, while keeping it sorted.
var insert = function(array, rightIndex, value) {
    var i;
    for (i = rightIndex; i >= 0 && array[i] > value; i--) {
        array[i + 1] = array[i];
    }
    array[i + 1] = value;
};
var array = [1, 2, 4, 5, 6];
insert(array, 4, 0);
console.log(array);
