console.log('Insertion Sort');

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
};

console.log(
  'Before Sorting ',
  [-1, 9, 7, 4, 3, 0, 2],
  'After Sorting',
  insertionSort([-1, 9, 7, 4, 3, 0, 2])
);

console.log(
  'Before Sorting ',
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  'After Sorting',
  insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1])
);

// document.getElementById('heading1').innerHTML = 'Insertion Sort';
document.getElementById('complexity').innerHTML =
  'Insertion Sort : Time complexity O(N2), space complexity O(N)';
document.getElementById('input').innerHTML = [-1, 9, 7, 4, 3, 0, 2];
document.getElementById('output').innerHTML = insertionSort([
  -1, 9, 7, 4, 3, 0, 2,
]);

console.log('Time complexity O(N2), space complexity 0(N)');
