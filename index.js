const bubbleSort = require('./bubbleSort');
const insertSort = require('./insertSort');
const selectSort = require('./selectSort')

let arr = [3, 5, 2, 1, 6, 10, 2];

console.log('bubble', bubbleSort(arr));
console.log('insert', insertSort(arr));
console.log('select',selectSort(arr))
