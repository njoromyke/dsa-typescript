/**
 * An array with values to sort.
 * A quickSort method that calls itself (recursion) if the sub-array has a size larger than 1.
 * A partition method that receives a sub-array, moves values around, swaps the pivot element into the sub-array and returns the index where the next split in sub-arrays happens.
 *
 */

const quick = [55, 3, 56, 1, 55, 66, 77, 34, 45, 65, 67, 87, 2334];

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort(quick));
