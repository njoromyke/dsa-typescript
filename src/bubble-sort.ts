/**
 * outer loop runs n-1 times coz the values coz some part of the array will be already sorted on the first run
 * inner loop will run n-i-1 times
 * can be improved if the array is already sorted
 * we can have a variable
 */

const arr = [7, 3, 9, 12, 11];

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  let swapped = false;
  // out loop to control how many times the inner loop runs
  for (let i = 0; i < n - 1; i++) {
    // innner loop to compare and swap the numbers
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;

        console.log(swapped)
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

console.log(bubbleSort(arr));
