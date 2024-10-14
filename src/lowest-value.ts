/**
 * Find the lowest value in an array
 * create a variable and assign it the first value in the array
 * loop through the items in the array, compare the current value with the lowest value, if the current value is lower than the previous value, assign current to be the lowest value
 * Do this till the values ends
 */

const array = [3, 7, 5, 6, 7, 8, 2, 1];

function lowestValue(arr: number[]): number {
  let lowest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }

  return lowest;
}

// implementation two

function lowest2(arr: number[]): number {
  const values = arr.sort((a,b) => a-b);

  return values[0]
}

console.log(lowest2(array));
