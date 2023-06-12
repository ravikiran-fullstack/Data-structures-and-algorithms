console.log('Selection sort');

const sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min_idx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
    }
    let temp = array[min_idx];
    array[min_idx] = array[i];
    array[i] = temp;
    console.log(array);
  }
  return array;
};

console.log(sort([20, 12, 10, 15, 2]));
