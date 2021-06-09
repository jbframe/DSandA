
let bubbleSort = (input: number[]):number[] => {
  // loop for the # of swap passes
  for (let i = input.length; i >= 1; i--) {
    // loop for swaps
    for (let j = 0; j <= i - 1; j++) {
      if (input[j] > input[j+1]) {
        let temp: number;
        temp = input[j+1];
        input[j+1] = input[j];
        input[j] = temp;
      }
    }
  }
  return input
}


// test
let a = [4, 1, 8, 5, 5, 3, 3];
console.log(bubbleSort(a));//expected result [1, 4, 5, 5, 8]