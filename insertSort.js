// Inserts an element into a sorted array, while keeping it sorted.
var insert = function(array, rightIndex, value) {
    var i;
    for (i = rightIndex; i >= 0 && array[i] > value; i--) {
        array[i + 1] = array[i];
    }
    array[i + 1] = value;
};

var insertionSort = function(array){
    for(var i = 0; i < array.length - 1; i++){
        insert(array, i, array[i + 1]);
    }
}
var array = [10, 2, 9, 5, 6];
insertionSort(array);
console.log(array);
