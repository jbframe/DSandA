"use strict";
exports.__esModule = true;
var bubbleSort = function (input) {
    // loop for the # of swap passes
    for (var i = input.length; i >= 1; i--) {
        // loop for swaps
        for (var j = 0; j <= i - 1; j++) {
            if (input[j] > input[j + 1]) {
                var temp = void 0;
                temp = input[j + 1];
                input[j + 1] = input[j];
                input[j] = temp;
            }
        }
    }
    return input;
};
// test
var a = [4, 1, 8, 5, 5, 3, 3];
console.log(bubbleSort(a)); //expected result [1, 4, 5, 5, 8]
