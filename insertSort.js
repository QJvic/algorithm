function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    let current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      [arr[i],arr[preIndex]]= [arr[preIndex],arr[i]];
    }
  }
  return arr;
}

module.exports = insertSort;
