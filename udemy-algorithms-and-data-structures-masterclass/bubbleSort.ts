let bubbleSort = (array) => {
  // loop for the # of swap passes
  for (let i = array.length; i >= 1; i--) {
    // loop for swaps
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j+1]) {
        temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array
}


// test
a = [4, 1, 8, 5, 5, 3, 3];
console.log(bubbleSort(a));//expected result [1, 4, 5, 5, 8]